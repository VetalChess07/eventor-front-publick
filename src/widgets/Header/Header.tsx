import cls from './Header.module.scss';
import { Logo } from '../Logo/Logo';

import { memo } from 'react';
import { Box } from '@mui/material';

export const Header = memo(() => (
  <Box component="header" className={cls.Header}>
    <Logo />
  </Box>
));
