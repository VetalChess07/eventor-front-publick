import { User } from '@/entities/user';
import api, { DefaultResponse } from '@/shared/api/axiosConfig';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

// Хук для получения пользователя по ID
export const useGetUserById = (userId: number, enabled: boolean = true) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId || !enabled) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await api.get<
          DefaultResponse<User>,
          AxiosResponse<DefaultResponse<User>>
        >(`users/${userId}`);
        console.log('User by ID:', response);
        setUser(response.data.data);
      } catch (err: any) {
        console.error('Ошибка при получении пользователя по ID:', err);
        setError(err?.message || 'Не удалось загрузить пользователя');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [userId, enabled]);

  return { user, isLoading, error };
};

// Хук для получения всех пользователей
export const useGetAllUsers = (enabled: boolean = true) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!enabled) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await api.get<
          DefaultResponse<User[]>,
          AxiosResponse<DefaultResponse<User[]>>
        >('users');
        console.log('All users:', response);
        setUsers(response.data.data);
      } catch (err: any) {
        console.error('Ошибка при получении пользователей:', err);
        setError(err?.message || 'Не удалось загрузить список пользователей');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [enabled]);

  return { users, isLoading, error };
};

// Хук для получения пользователей по игре
export const useGetUsersByGame = (gameId: number, enabled: boolean = true) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!gameId || !enabled) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await api.get<
          DefaultResponse<User[]>,
          AxiosResponse<DefaultResponse<User[]>>
        >(`results/get-user-by-games/${gameId}`);
        console.log('Users by game:', response);
        setUsers(response.data.data);
      } catch (err: any) {
        console.error('Ошибка при получении пользователей игры:', err);
        setError(err?.message || 'Не удалось загрузить пользователей игры');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [gameId, enabled]);

  return { users, isLoading, error };
};

// Хук для поиска пользователей по телефону или Telegram
export const useSearchUsers = (searchTerm: string, enabled: boolean = true) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchUsers = async () => {
      if (!searchTerm || !enabled) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await api.get<
          DefaultResponse<User[]>,
          AxiosResponse<DefaultResponse<User[]>>
        >(`users/search?q=${encodeURIComponent(searchTerm)}`);
        console.log('Search users:', response);
        setUsers(response.data.data);
      } catch (err: any) {
        console.error('Ошибка при поиске пользователей:', err);
        setError(err?.message || 'Не удалось выполнить поиск пользователей');
      } finally {
        setIsLoading(false);
      }
    };

    // Добавляем задержку для поиска (debounce)
    const timeoutId = setTimeout(searchUsers, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, enabled]);

  return { users, isLoading, error };
};
