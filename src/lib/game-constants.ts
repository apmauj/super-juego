// Game Constants for Superhero Educational Board Game

import { Hero, CollectibleItem, BoardSquare, SquareType, HeroId } from './game-types';

// ==================== HEROES ====================
export const HEROES: Hero[] = [
  {
    id: 'CAPITANA_ESTRELLA',
    name: 'CAPITANA ESTRELLA',
    color: '#FF69B4',
    bgColor: '#FFF0F5',
    borderColor: '#FF1493',
    lightColor: '#FFB6C1',
    emoji: '⭐',
  },
  {
    id: 'RAYO_VELOZ',
    name: 'RAYO VELOZ',
    color: '#FFD700',
    bgColor: '#FFFACD',
    borderColor: '#FFA500',
    lightColor: '#FFE4B5',
    emoji: '⚡',
  },
  {
    id: 'MEGA_BOT',
    name: 'MEGA BOT',
    color: '#4A90D9',
    bgColor: '#E8F4FD',
    borderColor: '#2E6EB5',
    lightColor: '#87CEEB',
    emoji: '🤖',
  },
  {
    id: 'ECO_VERDE',
    name: 'ECO VERDE',
    color: '#4CAF50',
    bgColor: '#E8F5E9',
    borderColor: '#2E7D32',
    lightColor: '#A5D6A7',
    emoji: '🌿',
  },
];

export const getHeroById = (id: HeroId): Hero => {
  return HEROES.find((h) => h.id === id)!;
};

// ==================== COLLECTIBLE ITEMS ====================
export const COLLECTIBLE_ITEMS: CollectibleItem[] = [
  { id: 'capa_dorada', name: 'CAPA DORADA', emoji: '🦸', points: 300 },
  { id: 'escudo_laser', name: 'ESCUDO LÁSER', emoji: '🛡️', points: 300 },
  { id: 'botas_rapidas', name: 'BOTAS RÁPIDAS', emoji: '👢', points: 300 },
  { id: 'gema_estelar', name: 'GEMA ESTELAR', emoji: '💎', points: 300 },
  { id: 'super_casco', name: 'SÚPER CASCO', emoji: '⛑️', points: 300 },
];

// ==================== BOARD ====================
export const BOARD_SIZE = 100;
export const SQUARES_PER_ROW = 10;
export const TOTAL_ROWS = 10;

export const generateBoard = (): BoardSquare[] => {
  const board: BoardSquare[] = [];

  // Generate random bonus positions for each decade (1-10, 11-20, ..., 91-100)
  const bonusPositions = new Set<number>();
  for (let decade = 0; decade < 10; decade++) {
    const start = decade * 10 + 1;
    const end = Math.min(decade * 10 + 10, BOARD_SIZE - 1);
    const candidates: number[] = [];
    for (let i = start; i <= end; i++) {
      if (i % 5 !== 0 && i !== BOARD_SIZE && i !== 1) {
        candidates.push(i);
      }
    }
    if (candidates.length > 0) {
      const randomIndex = Math.floor(Math.random() * candidates.length);
      bonusPositions.add(candidates[randomIndex]);
    }
  }

  for (let i = 1; i <= BOARD_SIZE; i++) {
    let type: SquareType = 'NORMAL';

    if (i === BOARD_SIZE) {
      type = 'FINISH';
    } else if (i % 10 === 0) {
      type = 'REWARD_X10';
    } else if (i % 5 === 0) {
      type = 'REWARD_X5';
    } else if (bonusPositions.has(i)) {
      type = 'BONUS';
    }

    const square: BoardSquare = { number: i, type };

    if (type === 'BONUS') {
      const randomItem = COLLECTIBLE_ITEMS[Math.floor(Math.random() * COLLECTIBLE_ITEMS.length)];
      square.bonusItem = { ...randomItem };
    }

    board.push(square);
  }

  return board;
};

// ==================== SCORING ====================
export const POINTS_CORRECT_ANSWER = 50;
export const POINTS_REWARD_X5 = 100;
export const POINTS_REWARD_X10 = 250;
export const POINTS_RARE_ITEM = 300;

// ==================== MATH QUESTIONS ====================
export const generateMathOptions = (
  position: number,
  diceResult: number,
  difficulty: 'easy' | 'medium' | 'hard' = 'easy'
): number[] => {
  const correctAnswer = position + diceResult;
  const options = new Set<number>();
  options.add(correctAnswer);

  const range = difficulty === 'easy' ? 3 : difficulty === 'medium' ? 2 : 1;

  // Generate wrong options that are different from the correct answer and from each other
  let attempts = 0;
  while (options.size < 4 && attempts < 100) {
    attempts++;
    // Generate wrong answers around the correct answer
    const offset = Math.floor(Math.random() * (range * 2 + 1)) - range;
    const wrong = correctAnswer + offset;
    if (wrong !== correctAnswer && wrong > 0) {
      options.add(wrong);
    }
  }

  // Fallback: if we still don't have 4 distinct options, add manually
  let fallback = 1;
  while (options.size < 4) {
    const candidate = correctAnswer + fallback;
    if (!options.has(candidate) && candidate > 0) {
      options.add(candidate);
    }
    const candidate2 = correctAnswer - fallback;
    if (options.size < 4 && !options.has(candidate2) && candidate2 > 0 && candidate2 !== correctAnswer) {
      options.add(candidate2);
    }
    fallback++;
  }

  // Shuffle options
  const shuffled = Array.from(options).sort(() => Math.random() - 0.5);
  return shuffled;
};

// ==================== POSITIVE MESSAGES ====================
export const SUCCESS_MESSAGES = [
  '¡EXCELENTE! ⭐',
  '¡MUY BIEN! 🎉',
  '¡GENIAL! 💪',
  '¡FANTÁSTICO! 🌟',
  '¡INCREÍBLE! 🦸',
  '¡SÚPER! 🚀',
  '¡BRAVO! 👏',
  '¡PERFECTO! ✨',
];

export const ENCOURAGEMENT_MESSAGES = [
  '¡CASI! ¡INTENTA OTRA VEZ! 💪',
  '¡CASI LO LOGRAS! 🤗',
  '¡INTENTA DE NUEVO! ✨',
  '¡TÚ PUEDES! 💪',
  '¡VAMOS! ¡TÚ PUEDES! 🌟',
];

export const getRandomMessage = (messages: string[]): string => {
  return messages[Math.floor(Math.random() * messages.length)];
};

// ==================== BOARD LAYOUT HELPERS ====================
// Square 1 is at top-left, serpentine path going down
export const getSquarePosition = (squareNumber: number): { row: number; col: number } => {
  const index = squareNumber - 1;
  const row = Math.floor(index / SQUARES_PER_ROW);
  const colInRow = index % SQUARES_PER_ROW;
  // Alternate direction for serpentine (even rows: left-to-right, odd rows: right-to-left)
  const col = row % 2 === 0 ? colInRow : SQUARES_PER_ROW - 1 - colInRow;
  return { row, col };
};

export const getSquareTypeColor = (type: SquareType): string => {
  switch (type) {
    case 'NORMAL':
      return '#FFFFFF';
    case 'REWARD_X5':
      return '#FFF3CD';
    case 'REWARD_X10':
      return '#FFE0B2';
    case 'BONUS':
      return '#E1BEE7';
    case 'FINISH':
      return '#C8E6C9';
    default:
      return '#FFFFFF';
  }
};

export const getSquareTypeEmoji = (type: SquareType): string => {
  switch (type) {
    case 'NORMAL':
      return '';
    case 'REWARD_X5':
      return '⭐';
    case 'REWARD_X10':
      return '🏆';
    case 'BONUS':
      return '🎁';
    case 'FINISH':
      return '🏁';
    default:
      return '';
  }
};

export const getSquareTypeLabel = (type: SquareType): string => {
  switch (type) {
    case 'NORMAL':
      return '';
    case 'REWARD_X5':
      return '×5';
    case 'REWARD_X10':
      return '×10';
    case 'BONUS':
      return 'BONUS';
    case 'FINISH':
      return 'META';
    default:
      return '';
  }
};
