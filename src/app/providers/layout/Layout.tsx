import React from 'react';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';

import cls from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <Box className={cls.Layout}>
      <Header />
      <Container className={cls.container} maxWidth="lg">
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
