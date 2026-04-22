export type ResultStatus = 'ACTIVE' | 'FINISHED';

import { UserStatus } from '@/entities/user/model/types/user';

export interface Result {
  id: number;
  game_id: number;
  user_id: number;
  created_at?: Date;
  updated_at?: Date;
  status: ResultStatus;
  date_finished: string;
}

export interface ResultUsers {
  user: {
    id: number;
    name: string | null;
    group: string | null;
    tgName: string | null;
    phone_number: string | null;
    status?: UserStatus;
  };
  prize: number;
}
