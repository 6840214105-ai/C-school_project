
export enum GameStatus {
  START = 'start',
  PLAYING = 'playing',
  GAME_OVER = 'gameOver',
}

export type GameState = GameStatus.START | GameStatus.PLAYING | GameStatus.GAME_OVER;

export interface Question {
  question: string;
  options: number[];
  answer: number;
}

export interface Player {
  id: number;
  name: string;
  score: number;
}
