import { FC, Suspense, useCallback } from 'react';
import { Routes, Route, RouteObject } from 'react-router-dom';
import Layout from '../../layout/Layout';

import { routeConfig } from '@/shared/config/routeConfig/model/const/routeConfig';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Box } from '@mui/material';

const AppRouter: FC = () => {
  const renderWithWrapper = useCallback((route: RouteObject) => {
    const element = (
      <Suspense
        fallback={
          <Box>
            <Loader />
          </Box>
        }
      >
        {route.element}
      </Suspense>
    );

    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Route>
    </Routes>
  );
};

export default AppRouter;
