import { Outlet, createBrowserRouter } from 'react-router';

import Header from '../components/organisms/Header';
import { Detail } from '../components/pages/Detail';
import { Home } from '../components/pages/Home';

export const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      { path: '/', Component: Home },
      { path: ':id/detail', Component: Detail },
    ],
  },
]);
