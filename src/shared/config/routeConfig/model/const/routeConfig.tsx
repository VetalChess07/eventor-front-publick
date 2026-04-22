import { RouteObject } from 'react-router-dom';

import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
import { SelectLototronPageAsync } from '@/pages/SelectLototronPage/SelectLototronPage.async';

export enum AppRoutes {
  NOT_FOUND = 'not_found',
  SELECT_LOTOTRON = 'select_lototron',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.SELECT_LOTOTRON]: '/',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.SELECT_LOTOTRON]: {
    path: RoutePath[AppRoutes.SELECT_LOTOTRON],
    element: <SelectLototronPageAsync />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};

export const getRouteSelectLototron = '/';

export const getRouteLogin = '/login';
