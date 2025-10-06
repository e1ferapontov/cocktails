import { createBrowserRouter, Navigate, type RouteObject } from 'react-router';

import { DrinkCodes } from '@api';
import { VALID_CODES } from '@common/constants';
import { RootLayout } from '@components/RootLayout';
import { CocktailsPage } from '@pages/CocktailPage';
import { ErrorPage } from '@pages/ErrorPage';

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        element: (
          <Navigate
            to={DrinkCodes.MARGARITA}
            replace
          />
        ),
      },
      ...VALID_CODES.map<RouteObject>((code) => ({
        path: code,
        element: <CocktailsPage drinkCode={code} />,
      })),
      {
        path: '*',
        Component: ErrorPage,
      },
    ],
  },
]);
