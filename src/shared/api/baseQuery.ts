import { TG_USER } from '../conts/localStorage';
import { User } from '@/entities/user';

export const getTokenFromLocalStorage = (): string =>
  localStorage.getItem('token') || '';

const userInfoString = localStorage.getItem(TG_USER);
const userInfo: User | null = userInfoString
  ? JSON.parse(userInfoString)
  : null;

const addQueryParams = (
  url: string,
  params: Record<string, string>,
): string => {
  const searchParams = new URLSearchParams(params);
  return url.includes('?')
    ? `${url}&${searchParams.toString()}`
    : `${url}?${searchParams.toString()}`;
};

// Конфиг для дефолтных query-параметров
const defaultQueryParams: Record<string, string> = {};
if (userInfo) {
  defaultQueryParams['user_info'] = JSON.stringify(userInfo);
}

// 🚀 Универсальная функция запросов
export const baseQuery = async (
  url: string,
  options: RequestInit = {},
): Promise<Response> => {
  const finalUrl = addQueryParams(url, defaultQueryParams);

  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string>),
  };

  // Если тело есть и это не FormData — ставим JSON Content-Type
  if (options.body && !(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  const token = getTokenFromLocalStorage();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return fetch(finalUrl, {
    ...options,
    headers,
  });
};
