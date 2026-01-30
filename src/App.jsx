import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CarPage from './pages/car/CarPage';

import OrderPage from './pages/order/OrderPage';
import { RootPage } from './pages/root';
import { ROUTES } from './utils/constants/router';
import SuccessPage from './pages/success/SuccessPage';

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
  },
  {
    path: ROUTES.SUCCESS,
    element: <SuccessPage />
  }
]);

export function App() {
  return <RouterProvider router={router} />;
}
