import { GameTab } from '@/features/games';
import { Box } from '@mui/material';

const SelectLototronPage = () => {
  return (
    <Box
      component={'section'}
      sx={{ width: '100%', height: '100%', minHeight: '100dvh' }}
    >
      <GameTab />
    </Box>
  );
};

export default SelectLototronPage;
