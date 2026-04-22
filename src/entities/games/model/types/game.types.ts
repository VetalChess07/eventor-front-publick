export type GameStatus = 'ACTIVE' | 'FINISHED';

export interface Game {
  id: number;
  name: string;
  description?: string | null;
  countWinner?: number;
  date_start: Date;
  date_finish: Date;
  created_at?: Date;
  updated_at?: Date;
  is_archive?: boolean;
  prize: string;
  status: GameStatus;
}
