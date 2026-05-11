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
  addPlayer: (name: string, heroId: HeroId) => void;
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
      hasFinished: false,
      finishOrder: 0,
    };
    set({ players: [...players, newPlayer] });
  },

  startGame: () => {
    const board = generateBoard();
    set({
      phase: 'ROLLING_DICE',
      previousPhase: 'CHARACTER_SELECT',
      board,
      currentPlayerIndex: 0,
      diceValue: null,
      currentQuestion: null,
      messages: [],
      lastReward: null,
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

        // Cap position at board size for the question
        const maxAnswer = Math.min(currentPosition + finalValue, BOARD_SIZE);

        const options = generateMathOptions(currentPosition, finalValue);
        // Ensure the correct answer doesn't exceed board size
        const correctAnswer = currentPosition + finalValue;
        const cappedCorrect = Math.min(correctAnswer, BOARD_SIZE);
        const finalOptions = options.map((o) => Math.min(o, BOARD_SIZE));
        if (!finalOptions.includes(cappedCorrect)) {
          finalOptions[0] = cappedCorrect;
        }

        const question: MathQuestion = {
          position: currentPosition,
          diceResult: finalValue,
          correctAnswer: cappedCorrect,
          options: finalOptions.sort((a, b) => a - b),
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

    player.totalAttempts++;

    if (isCorrect) {
      player.correctAnswers++;
      player.diceRolls++;

      // Move player
      const newPosition = currentQuestion.correctAnswer;
      player.position = newPosition;
      player.score += POINTS_CORRECT_ANSWER;

      // Check for rewards based on the new square
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
        isMoving: true,
        showConfetti: square?.type === 'FINISH' || false,
      });

      // After moving animation, transition
      setTimeout(() => {
        if (allFinished) {
          set({ phase: 'FINISHED', showConfetti: true, isMoving: false });
        } else if (!reward) {
          get().nextTurn();
        } else {
          set({ isMoving: false });
        }
      }, 800);
    } else {
      // Wrong answer - encouragement, no penalty
      const encourageMsg = getRandomMessage(ENCOURAGEMENT_MESSAGES);
      get().addMessage(encourageMsg, 'error');

      if (speechEnabled) {
        speakText('¡CASI! INTENTA OTRA VEZ');
      }

      // Keep the question, let them try again
      // Just add a visual shake via the component
      set({
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

    if (allFinished) {
      set({ phase: 'FINISHED', showConfetti: true, lastReward: null });
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
    set({ ...initialState });
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
