import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FC } from 'react';
import { useGetResultByGame } from '@/entities/results';
import { useGetUsersByGame } from '../../model/hooks/useGetUsersByGame';
import { formatPhoneNumber } from '@/shared/lib/formatPhoneNumber';
import DCoinIcon from '@/shared/assets/icons/dcoin 1.svg?react';
import { Box, CircularProgress } from '@mui/material';
import { GameStatus } from '@/entities/games/model/types/game.types';

interface GameTabContentProps {
  gameId: number;
  status: GameStatus;
}

export const GameTabContent: FC<GameTabContentProps> = ({ gameId, status }) => {
  const {
    results = [],
    isLoading: isLoadingResults,
    error: errorResults,
  } = useGetResultByGame(gameId, status === 'FINISHED');

  const {
    users: gameUsers = [],
    isLoading: isLoadingUsers,
    error: errorUsers,
  } = useGetUsersByGame(gameId, status === 'ACTIVE');

  const data = status === 'FINISHED' ? results : gameUsers;
  const isLoading = status === 'FINISHED' ? isLoadingResults : isLoadingUsers;
  const error = status === 'FINISHED' ? errorResults : errorUsers;

  if (isLoading) {
    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) return <div>Ошибка загрузки</div>;

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        overflowY: 'auto',
      }}
    >
      {status === 'ACTIVE' && (
        <Box
          sx={{
            mb: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ color: '#DCE0ED', fontSize: '14px' }}>
            Всего участников: {data.length}
          </Box>
        </Box>
      )}

      <TableContainer
        component={Paper}
        sx={{
          background: '#C0CEFF12',
          borderRadius: '12px',
          border: 0,
          height: 'fit-content',
        }}
      >
        <Table stickyHeader>
          <TableHead
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 2,
              '& .MuiTableCell-root': {
                backgroundColor: '#1E1E2A',
                color: '#FFFFFF',
                fontWeight: 500,
              },
            }}
          >
            <TableRow>
              {status === 'FINISHED' ? (
                <>
                  <TableCell>ID ученика</TableCell>
                  <TableCell>ФИО</TableCell>
                  <TableCell>Группа</TableCell>
                  <TableCell>Имя / телефон</TableCell>
                  <TableCell align="center">Выигрыш</TableCell>
                </>
              ) : (
                <>
                  <TableCell>Место</TableCell>
                  <TableCell>ID ученика</TableCell>
                  <TableCell>ФИО</TableCell>
                  <TableCell>Группа</TableCell>
                  <TableCell>Имя / телефон</TableCell>
                </>
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((item, index: number) => {
              const user = item.user;
              const displayName = user?.tgName
                ? `@${user.tgName}`
                : formatPhoneNumber(user?.phone_number);

              return (
                <TableRow
                  key={`${user?.id}-${index}`}
                  sx={{
                    height: 'fit-content',
                    background: index % 2 === 0 ? '#111520' : '#C0CEFF0A',
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  {status === 'FINISHED' ? (
                    <>
                      <TableCell
                        sx={{
                          color: '#DCE0ED',
                          verticalAlign: 'top',
                        }}
                      >
                        {user?.id ?? '-'}
                      </TableCell>

                      <TableCell
                        sx={{
                          color: '#DCE0ED',
                          verticalAlign: 'top',
                        }}
                      >
                        {user?.name ?? '-'}
                      </TableCell>

                      <TableCell
                        sx={{
                          color: '#DCE0ED',
                          verticalAlign: 'top',
                        }}
                      >
                        {user?.group ?? '-'}
                      </TableCell>

                      <TableCell
                        sx={{
                          color: '#DCE0ED',
                          verticalAlign: 'top',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {displayName ?? '-'}
                      </TableCell>

                      <TableCell
                        align="center"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          color: '#DCE0ED',
                          verticalAlign: 'top',
                        }}
                      >
                        {'prize' in item ? item.prize : '-'} <DCoinIcon />
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell
                        sx={{
                          color: '#DCE0ED',
                          verticalAlign: 'top',
                        }}
                      >
                        #{index + 1}
                      </TableCell>

                      <TableCell
                        sx={{
                          color: '#DCE0ED',
                          verticalAlign: 'top',
                        }}
                      >
                        {user?.id ?? '-'}
                      </TableCell>

                      <TableCell
                        sx={{
                          color: '#DCE0ED',
                          verticalAlign: 'top',
                        }}
                      >
                        {user?.name ?? '-'}
                      </TableCell>

                      <TableCell
                        sx={{
                          color: '#DCE0ED',
                          verticalAlign: 'top',
                        }}
                      >
                        {user?.group ?? '-'}
                      </TableCell>

                      <TableCell
                        sx={{
                          color: '#DCE0ED',
                          verticalAlign: 'top',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {displayName ?? '-'}
                      </TableCell>
                    </>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
