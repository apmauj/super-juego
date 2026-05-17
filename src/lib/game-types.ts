// Game Types for Superhero Educational Board Game

export type HeroId =
  | 'CAPITANA_ESTRELLA'
  | 'RAYO_VELOZ'
  | 'MEGA_BOT'
  | 'ECO_VERDE'
  | 'FLAMA_IGNEA'
  | 'CRISTAL_POLAR'
  | 'VELOCIBOT'
  | 'AQUA_TORRENTE';

export type GamePhase =
  | 'SETUP'
  | 'CHARACTER_SELECT'
  | 'ROLLING_DICE'
  | 'WAITING_ANSWER'
  | 'MOVING'
  | 'REWARD'
  | 'NEXT_TURN'
  | 'FINISHED';

export type SquareType = 'NORMAL' | 'REWARD_X5' | 'REWARD_X10' | 'BONUS' | 'FINISH';

export interface Hero {
  id: HeroId;
  name: string;
  color: string;
  bgColor: string;
  borderColor: string;
  lightColor: string;
  emoji: string;
}

export interface CollectibleItem {
  id: string;
  name: string;
  emoji: string;
  points: number;
}

export interface BoardSquare {
  number: number;
  type: SquareType;
  bonusItem?: CollectibleItem;
  isPenalty?: boolean;
}

export interface Player {
  id: number;
  name: string;
  hero: Hero;
  position: number;
  score: number;
  inventory: CollectibleItem[];
  correctAnswers: number;
  totalAttempts: number;
  diceRolls: number;
  sumCorrect: number;
  sumAttempts: number;
  penaltyLands: number;
  penaltyCorrect: number;
  penaltyAttempts: number;
  hasFinished: boolean;
  finishOrder: number;
}

export interface MathQuestion {
  position: number;
  diceResult: number;
  correctAnswer: number;
  options: number[];
  operation: 'add' | 'sub';
}

export interface GameMessage {
  text: string;
  type: 'success' | 'error' | 'info' | 'reward';
  timestamp: number;
}
