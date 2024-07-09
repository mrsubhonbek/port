import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../main';
import { ErrorPage } from '../error';
import { FleetMaintenance, TransportationCargo, ServicePage, TransportationPetroleumProducts, LoadingUnloadingWorksNsm } from '../services';
import { FleetPage } from '../fleet';
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
    path: '/license',
    element: <div>license</div>,
  },
  {
    path: '/fleet',
    element: <FleetPage />,
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
  {
    path: '/transportation-of-petroleum-products',
    element: <TransportationPetroleumProducts />,
  },
  {
    path: '/loading-and-unloading-works-of-nsm',
    element: <LoadingUnloadingWorksNsm />,
  },
]);