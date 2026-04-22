import { useState, FC } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  CircularProgress,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useGetAllGames } from '../../model/hooks/useGetAllGames';
import { ErrorAlert } from '@/widgets/ErrorAlert/ErrorAlert';
import dayjs from 'dayjs';
import { GAME_STATUS } from '@/entities/games/model/conts/game';
import { GameTabContent } from './GameTabContent';

export const GameTab: FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { games, isLoading, error } = useGetAllGames();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const handleSelectChange = (event: any) => {
    setTabIndex(event.target.value);
  };

  if (isLoading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );

  if (error) return <ErrorAlert message={error} />;

  if (!games || games.length === 0)
    return (
      <Typography sx={{ mt: 4, textAlign: 'center' }}>
        Пока нет доступных игр
      </Typography>
    );

  const currentGame = games[tabIndex];

  return (
    <Box sx={{ width: '100%', height: '100%', minHeight: '100dvh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isTablet ? 'column' : 'row',
          gap: isTablet ? '16px' : '20px',
          height: '100dvh',
          mt: 2,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: isTablet ? '100%' : '220px',
          }}
        >
          {isTablet ? (
            <Select value={tabIndex} onChange={handleSelectChange} fullWidth>
              {games.map((game, index) => (
                <MenuItem key={game.id} value={index}>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: '8px',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        fontFamily: 'Inter-Bold',
                        color: tabIndex === index ? '#fff' : '#DBE2E9',
                        lineHeight: '1rem',
                      }}
                    >
                      {game.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '.875rem',
                        fontWeight: 400,
                        color: tabIndex === index ? '#fff' : '#DBE2E999',
                      }}
                    >
                      {dayjs(game.date_start).format('DD.MM.YY')} •{' '}
                      {GAME_STATUS[game.status]}
                    </Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          ) : (
            <Tabs
              value={tabIndex}
              onChange={handleChange}
              orientation="vertical"
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                minHeight: '100dvh',
                width: '100%',
                overflowY: 'auto',
              }}
            >
              {games.map((game, index) => (
                <Tab
                  key={game.id}
                  label={
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '8px',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          fontFamily: 'Inter-Bold',
                          color: tabIndex === index ? '#fff' : '#DBE2E9',
                          lineHeight: '1rem',
                          textAlign: 'left',
                        }}
                      >
                        {game.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '.875rem',
                          fontWeight: 400,
                          color: tabIndex === index ? '#fff' : '#DBE2E999',
                        }}
                      >
                        {dayjs(game.date_start).format('DD.MM.YY')} •{' '}
                        {GAME_STATUS[game.status]}
                      </Typography>
                    </Box>
                  }
                />
              ))}
            </Tabs>
          )}
        </Box>

        <GameTabContent gameId={currentGame.id} status={currentGame.status} />
      </Box>
    </Box>
  );
};
