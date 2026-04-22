export interface User {
  id: number;
  game_id: number;
  user_id: number;
  user: {
    id: number;
    name: string | null;
    group: string | null;
    tgName: string | null;
    phone_number: string | null;
    status?: UserStatus;
  };
  points?: number;
  is_winner?: boolean;
  prize?: string;
  status?: 'ACTIVE' | 'BAN';
  created_at?: Date;
}

export interface UserLS {
  name?: string | null;
  group?: string | null;
  tgName?: string | null;
  phone_number?: string | null;
}

export type UserStatus = 'ACTIVE' | 'BAN';
