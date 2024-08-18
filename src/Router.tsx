import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from './pages/dashboard.layout/Dashboard.page';
import OverviewPage from './pages/dashboard.layout/Overview.page';
import SettingsPage from './pages/dashboard.layout/Settings.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
    children: [
      {
        path: 'overview',
        element: <OverviewPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
