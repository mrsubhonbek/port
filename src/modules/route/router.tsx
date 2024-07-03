import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../main';
import { ErrorPage } from '../error';
import { FleetMaintenance, TransportationCargo, ServicePage } from '../services';
import { NewsPage } from '../news';
import { Contacts } from '../contacts';

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
    element: <Contacts />,
  },
  {
    path: '/fleet-maintenance',
    element: <FleetMaintenance />,
  },
  {
    path: '/transportation-of-oil-cargo',
    element: <TransportationCargo />,
  },
]);