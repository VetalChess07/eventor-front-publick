import { useEffect, useState } from 'react';
import api, { DefaultResponse } from '@/shared/api/axiosConfig';

import { AxiosResponse } from 'axios';

import type { ResultUsers } from '../types/result';

export const useGetResultByGame = (gameId: number, enabled: boolean) => {
  const [results, setResults] = useState<ResultUsers[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true);
      setError(null);

      if (!enabled) return;

      try {
        const response = await api.get<
          void,
          AxiosResponse<DefaultResponse<ResultUsers[]>>
        >(`results/${gameId}`);
        console.log(response);
        setResults(response.data.data);
      } catch (err: any) {
        console.error('Ошибка при получении игр:', err);
        setError(err?.message || 'Не удалось загрузить список игр');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, [gameId]);

  return { results, isLoading, error };
};
