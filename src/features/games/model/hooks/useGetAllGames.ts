import { useEffect, useState } from 'react';
import api, { DefaultResponse } from '@/shared/api/axiosConfig';
import { Game } from '../../../../entities/games/model/types/game.types';
import { AxiosResponse } from 'axios';

export const useGetAllGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await api.get<
          DefaultResponse<Game[]>,
          AxiosResponse<DefaultResponse<Game[]>>
        >('games/find-all');
        console.log(response);
        setGames(response.data.data);
      } catch (err: any) {
        console.error('Ошибка при получении игр:', err);
        setError(err?.message || 'Не удалось загрузить список игр');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  return { games, isLoading, error };
};
