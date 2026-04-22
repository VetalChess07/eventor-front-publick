import axios from 'axios';

export type DefaultResponse<T = unknown> = {
  data: T;
  status?: number;
  message?: string;
  meta?: {
    total: number;
    page: number;
    limit: number;
  };
};

export type ErrorResponse = {
  error: string;
  status?: number;
};

export interface PaginationOptions {
  page?: number;
  limit?: number;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
