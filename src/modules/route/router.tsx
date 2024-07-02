import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../main';
import { ErrorPage } from '../error';
import { ServicePage } from '../services';
import { NewsPage } from '../news';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/services',
    element: <ServicePage />,
  },
  {
    path: '/news',
    element: <NewsPage />,
  },
  {
    path: '/license',
    element: <div>license</div>,
  },
  {
    path: '/fleet',
    element: <div>fleet</div>,
  },
  {
    path: '/contacts',
    element: <div>contacts</div>,
  },
]);