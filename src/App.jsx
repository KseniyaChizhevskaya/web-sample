import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CarPage from './pages/car/CarPage';

import { RootPage } from './pages/root';
import { ROUTES } from './utils/constants/router';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <RootPage />
  },
  {
    path: ROUTES.CAR,
    element: <CarPage />
  }
]);

export function App() {
  return <RouterProvider router={router} />;
}
