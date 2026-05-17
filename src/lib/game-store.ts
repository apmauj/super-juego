// Game Store - Zustand state management for the Superhero Board Game

import { create } from 'zustand';
import {
  GamePhase,
  HeroId,
  Player,
  MathQuestion,
  BoardSquare,
  CollectibleItem,
  GameMessage,
} from './game-types';
import {
  HEROES,
  getHeroById,
  generateBoard,
  generateMathOptions,
  POINTS_CORRECT_ANSWER,
  POINTS_REWARD_X5,
  POINTS_REWARD_X10,
  getRandomMessage,
  SUCCESS_MESSAGES,
  ENCOURAGEMENT_MESSAGES,
  BOARD_SIZE,
  COLLECTIBLE_ITEMS,
} from './game-constants';

interface GameState {
  // Game phase
  phase: GamePhase;
  previousPhase: GamePhase;

  // Players
  playerCount: number;
  players: Player[];
  currentPlayerIndex: number;

  // Board
  board: BoardSquare[];

  // Modes
  subtractionEnabled: boolean;
  pendingPenalty: { position: number } | null;

  // Dice
  diceValue: number | null;
  isDiceRolling: boolean;

  // Math question
  currentQuestion: MathQuestion | null;

  // Messages
  messages: GameMessage[];

  // Rewards
  lastReward: {
    type: 'x5' | 'x10' | 'bonus' | 'finish' | null;
    points: number;
    item?: CollectibleItem;
    message: string;
  } | null;

  // Sound
  soundEnabled: boolean;
  speechEnabled: boolean;

  // Animation
  isMoving: boolean;
  showConfetti: boolean;

  // Actions
  setPlayerCount: (count: number) => void;
  setPhase: (phase: GamePhase) => void;
  setSubtractionEnabled: (enabled: boolean) => void;
  addPlayer: (name: string, heroId: HeroId) => void;
  removeLastPlayer: () => void;
  startGame: () => void;
  rollDice: () => void;
  submitAnswer: (answer: number) => void;
  nextTurn: () => void;
  dismissReward: () => void;
  toggleSound: () => void;
  toggleSpeech: () => void;
  resetGame: () => void;
  addMessage: (text: string, type: GameMessage['type']) => void;
}

const initialState = {
  phase: 'SETUP' as GamePhase,
  previousPhase: 'SETUP' as GamePhase,
  playerCount: 2,
  players: [],
  currentPlayerIndex: 0,
  board: [],
  subtractionEnabled: false,
  pendingPenalty: null,
  diceValue: null,
  isDiceRolling: false,
  currentQuestion: null,
  messages: [],
  lastReward: null,
  soundEnabled: true,
  speechEnabled: true,
  isMoving: false,
  showConfetti: false,
};

export const useGameStore = create<GameState>((set, get) => ({
  ...initialState,

  setPlayerCount: (count: number) => {
    set({ playerCount: count });
  },

  setPhase: (phase: GamePhase) => {
    set((state) => ({ phase, previousPhase: state.phase }));
  },

  setSubtractionEnabled: (enabled: boolean) => {
    set({ subtractionEnabled: enabled });
  },

  addPlayer: (name: string, heroId: HeroId) => {
    const { players } = get();
    const hero = getHeroById(heroId);
    const newPlayer: Player = {
      id: players.length + 1,
      name: name.toUpperCase(),
      hero,
      position: 0,
      score: 0,
      inventory: [],
      correctAnswers: 0,
      totalAttempts: 0,
      diceRolls: 0,
      sumCorrect: 0,
      sumAttempts: 0,
      penaltyLands: 0,
      penaltyCorrect: 0,
      penaltyAttempts: 0,
      hasFinished: false,
      finishOrder: 0,
    };
    set({ players: [...players, newPlayer] });
  },

  removeLastPlayer: () => {
    const { players } = get();
    set({ players: players.slice(0, -1) });
  },

  startGame: () => {
    const { subtractionEnabled } = get();
    const board = generateBoard({ includePenalty: subtractionEnabled });
    set({
      phase: 'ROLLING_DICE',
      previousPhase: 'CHARACTER_SELECT',
      board,
      currentPlayerIndex: 0,
      diceValue: null,
      currentQuestion: null,
      messages: [],
      lastReward: null,
      pendingPenalty: null,
      showConfetti: false,
    });
  },

  rollDice: () => {
    const { phase, isDiceRolling, soundEnabled } = get();
    if (phase !== 'ROLLING_DICE' || isDiceRolling) return;

    set({ isDiceRolling: true, diceValue: null });

    // Simulate dice rolling animation
    let rollCount = 0;
    const maxRolls = 10;
    const rollInterval = setInterval(() => {
      const tempValue = Math.floor(Math.random() * 6) + 1;
      set({ diceValue: tempValue });
      rollCount++;

      if (rollCount >= maxRolls) {
        clearInterval(rollInterval);
        const finalValue = Math.floor(Math.random() * 6) + 1;
        const { players, currentPlayerIndex, board } = get();
        const player = players[currentPlayerIndex];
        const currentPosition = player.position;

        const correctAnswer = currentPosition + finalValue;
        const options = generateMathOptions(currentPosition, finalValue, 'easy', 'add');

        const question: MathQuestion = {
          position: currentPosition,
          diceResult: finalValue,
          correctAnswer,
          options: options.sort((a, b) => a - b),
          operation: 'add',
        };

        set({
          diceValue: finalValue,
          isDiceRolling: false,
          phase: 'WAITING_ANSWER',
          currentQuestion: question,
        });

        // Speak the question
        if (get().speechEnabled) {
          speakText(`${player.name}, TIRASTE ${finalValue}. ¿A QUÉ CASILLA DEBES IR?`);
        }

        get().addMessage(
          `${player.name} TIRÓ ${finalValue}. ¿CUÁNTO ES ${currentPosition} + ${finalValue}?`,
          'info'
        );
      }
    }, 100);
  },

  submitAnswer: (answer: number) => {
    const { currentQuestion, players, currentPlayerIndex, board, speechEnabled } = get();
    if (!currentQuestion) return;

    const player = { ...players[currentPlayerIndex] };
    const isCorrect = answer === currentQuestion.correctAnswer;
    const isPenaltyQuestion = currentQuestion.operation === 'sub';

    player.totalAttempts++;
    if (isPenaltyQuestion) {
      player.penaltyAttempts++;
    } else {
      player.sumAttempts++;
    }

    if (isCorrect) {
      player.correctAnswers++;
      player.diceRolls++;

      if (isPenaltyQuestion) {
        player.penaltyCorrect++;
        const newPosition = Math.max(currentQuestion.correctAnswer, 1);
        player.position = newPosition;
        player.score += POINTS_CORRECT_ANSWER;

        const square = board.find((s) => s.number === newPosition);
        let reward: GameState['lastReward'] = null;
        if (square) {
          if (square.type === 'REWARD_X5') {
            player.score += POINTS_REWARD_X5;
            reward = {
              type: 'x5',
              points: POINTS_REWARD_X5,
              message: `¡CASILLA MÚLTIPLO DE 5! +${POINTS_REWARD_X5} PUNTOS ⭐`,
            };
          } else if (square.type === 'REWARD_X10') {
            player.score += POINTS_REWARD_X10;
            reward = {
              type: 'x10',
              points: POINTS_REWARD_X10,
              message: `¡CASILLA MÚLTIPLO DE 10! +${POINTS_REWARD_X10} PUNTOS 🏆`,
            };
          } else if (square.type === 'BONUS' && square.bonusItem) {
            player.inventory.push({ ...square.bonusItem });
            player.score += square.bonusItem.points;
            reward = {
              type: 'bonus',
              points: square.bonusItem.points,
              item: square.bonusItem,
              message: `¡OBJETO ESPECIAL! ${square.bonusItem.emoji} ${square.bonusItem.name} +${square.bonusItem.points} PUNTOS`,
            };
          }
        }

        const successMsg = getRandomMessage(SUCCESS_MESSAGES);
        get().addMessage(successMsg, 'success');
        if (speechEnabled) {
          speakText(successMsg);
        }

        const updatedPlayers = [...players];
        updatedPlayers[currentPlayerIndex] = player;

        set({
          players: updatedPlayers,
          phase: reward ? 'REWARD' : 'MOVING',
          currentQuestion: null,
          lastReward: reward,
          pendingPenalty: null,
          isMoving: true,
          showConfetti: false,
        });

        setTimeout(() => {
          if (reward) {
            set({ isMoving: false });
          } else {
            get().nextTurn();
          }
        }, 700);
        return;
      }

      player.sumCorrect++;

      // Move player — if answer exceeds board, they still reach the finish
      const rawPosition = currentQuestion.correctAnswer;
      const newPosition = Math.min(rawPosition, BOARD_SIZE);
      player.position = newPosition;
      player.score += POINTS_CORRECT_ANSWER;

      // Check for rewards based on the new square
      const square = board.find((s) => s.number === newPosition);
      const landedPenalty = Boolean(square?.isPenalty) && get().subtractionEnabled;
      if (landedPenalty) {
        player.penaltyLands++;
      }
      let reward: GameState['lastReward'] = null;

      // If player reached or passed the finish line
      if (rawPosition >= BOARD_SIZE) {
        const finishOrder =
          players.filter((p) => p.hasFinished).length + 1;
        player.hasFinished = true;
        player.finishOrder = finishOrder;
        reward = {
          type: 'finish',
          points: 0,
          message: `¡${player.name} LLEGÓ A LA META! 🎉🏁`,
        };
      } else if (square) {
        if (square.type === 'REWARD_X5') {
          player.score += POINTS_REWARD_X5;
          reward = {
            type: 'x5',
            points: POINTS_REWARD_X5,
            message: `¡CASILLA MÚLTIPLO DE 5! +${POINTS_REWARD_X5} PUNTOS ⭐`,
          };
        } else if (square.type === 'REWARD_X10') {
          player.score += POINTS_REWARD_X10;
          reward = {
            type: 'x10',
            points: POINTS_REWARD_X10,
            message: `¡CASILLA MÚLTIPLO DE 10! +${POINTS_REWARD_X10} PUNTOS 🏆`,
          };
        } else if (square.type === 'BONUS' && square.bonusItem) {
          player.inventory.push({ ...square.bonusItem });
          player.score += square.bonusItem.points;
          reward = {
            type: 'bonus',
            points: square.bonusItem.points,
            item: square.bonusItem,
            message: `¡OBJETO ESPECIAL! ${square.bonusItem.emoji} ${square.bonusItem.name} +${square.bonusItem.points} PUNTOS`,
          };
        } else if (square.type === 'FINISH') {
          const finishOrder =
            players.filter((p) => p.hasFinished).length + 1;
          player.hasFinished = true;
          player.finishOrder = finishOrder;
          reward = {
            type: 'finish',
            points: 0,
            message: `¡${player.name} LLEGÓ A LA META! 🎉🏁`,
          };
        }
      }

      const successMsg = getRandomMessage(SUCCESS_MESSAGES);
      get().addMessage(successMsg, 'success');

      if (speechEnabled) {
        speakText(successMsg);
      }

      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex] = player;

      // Check if all players finished
      const allFinished = updatedPlayers.every((p) => p.hasFinished);

      set({
        players: updatedPlayers,
        phase: reward ? 'REWARD' : allFinished ? 'FINISHED' : 'MOVING',
        currentQuestion: null,
        lastReward: reward,
        pendingPenalty: landedPenalty ? { position: newPosition } : null,
        isMoving: true,
        showConfetti: rawPosition >= BOARD_SIZE || square?.type === 'FINISH' || false,
      });

      // After moving animation, transition
      setTimeout(() => {
        if (allFinished) {
          set({ phase: 'FINISHED', showConfetti: true, isMoving: false });
        } else if (!reward) {
          const pending = get().pendingPenalty;
          if (pending) {
            const penaltyValue = Math.floor(Math.random() * 6) + 1;
            const correctAnswer = Math.max(pending.position - penaltyValue, 1);
            const options = generateMathOptions(pending.position, penaltyValue, 'easy', 'sub');
            const question: MathQuestion = {
              position: pending.position,
              diceResult: penaltyValue,
              correctAnswer,
              options: options.sort((a, b) => a - b),
              operation: 'sub',
            };
            set({
              phase: 'WAITING_ANSWER',
              currentQuestion: question,
              pendingPenalty: null,
              isMoving: false,
            });

            const playerName = get().players[get().currentPlayerIndex]?.name || '';
            get().addMessage(
              `¡MALA SUERTE! 😱 ${playerName}, ¿CUÁNTO ES ${pending.position} - ${penaltyValue}?`,
              'info'
            );
            if (speechEnabled) {
              speakText(`${playerName}, MALA SUERTE. ¿CUÁNTO ES ${pending.position} MENOS ${penaltyValue}?`);
            }
          } else {
            get().nextTurn();
          }
        } else {
          set({ isMoving: false });
        }
      }, 800);
    } else {
      // Wrong answer - encouragement, no penalty, but count the error
      const encourageMsg = getRandomMessage(ENCOURAGEMENT_MESSAGES);
      get().addMessage(encourageMsg, 'error');

      if (speechEnabled) {
        speakText('¡CASI! INTENTA OTRA VEZ');
      }

      // Save the updated player (with incremented totalAttempts) back to state
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex] = player;

      // Keep the question, let them try again
      set({
        players: updatedPlayers,
        phase: 'WAITING_ANSWER',
        currentQuestion: { ...currentQuestion }, // trigger re-render
      });
    }
  },

  nextTurn: () => {
    const { players, currentPlayerIndex } = get();
    let nextIndex = (currentPlayerIndex + 1) % players.length;

    // Skip finished players
    let attempts = 0;
    while (players[nextIndex].hasFinished && attempts < players.length) {
      nextIndex = (nextIndex + 1) % players.length;
      attempts++;
    }

    // Check if all finished
    if (players.every((p) => p.hasFinished)) {
      set({ phase: 'FINISHED', showConfetti: true, isMoving: false });
      return;
    }

    set({
      currentPlayerIndex: nextIndex,
      phase: 'ROLLING_DICE',
      diceValue: null,
      currentQuestion: null,
      lastReward: null,
      pendingPenalty: null,
      isMoving: false,
    });

    const nextPlayer = players[nextIndex];
    get().addMessage(`TURNO DE ${nextPlayer.name}`, 'info');

    if (get().speechEnabled) {
      speakText(`TURNO DE ${nextPlayer.name}`);
    }
  },

  dismissReward: () => {
    const { players } = get();
    const allFinished = players.every((p) => p.hasFinished);
    const pending = get().pendingPenalty;

    if (allFinished) {
      set({ phase: 'FINISHED', showConfetti: true, lastReward: null });
    } else if (pending) {
      const penaltyValue = Math.floor(Math.random() * 6) + 1;
      const correctAnswer = Math.max(pending.position - penaltyValue, 1);
      const options = generateMathOptions(pending.position, penaltyValue, 'easy', 'sub');
      const question: MathQuestion = {
        position: pending.position,
        diceResult: penaltyValue,
        correctAnswer,
        options: options.sort((a, b) => a - b),
        operation: 'sub',
      };

      set({
        lastReward: null,
        phase: 'WAITING_ANSWER',
        currentQuestion: question,
        pendingPenalty: null,
      });

      const playerName = players[get().currentPlayerIndex]?.name || '';
      get().addMessage(
        `¡MALA SUERTE! 😱 ${playerName}, ¿CUÁNTO ES ${pending.position} - ${penaltyValue}?`,
        'info'
      );
      if (get().speechEnabled) {
        speakText(`${playerName}, MALA SUERTE. ¿CUÁNTO ES ${pending.position} MENOS ${penaltyValue}?`);
      }
    } else {
      set({ lastReward: null });
      get().nextTurn();
    }
  },

  toggleSound: () => {
    set((state) => ({ soundEnabled: !state.soundEnabled }));
  },

  toggleSpeech: () => {
    set((state) => ({ speechEnabled: !state.speechEnabled }));
  },

  resetGame: () => {
    const { subtractionEnabled } = get();
    set({ ...initialState, subtractionEnabled });
  },

  addMessage: (text: string, type: GameMessage['type']) => {
    set((state) => ({
      messages: [
        { text, type, timestamp: Date.now() },
        ...state.messages.slice(0, 9),
      ],
    }));
  },
}));

// Helper: Speech synthesis
export const speakText = (text: string) => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-ES';
  utterance.rate = 0.8;
  utterance.pitch = 1.2;
  window.speechSynthesis.speak(utterance);
};
