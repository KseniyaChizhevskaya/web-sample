import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CarPage from './pages/car/CarPage';

import OrderPage from './pages/order/OrderPage';
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
  },
  {
    path: ROUTES.ORDER,
    element: <OrderPage />
  }
]);

export function App() {
  return <RouterProvider router={router} />;
}
