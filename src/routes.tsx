import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
    ]
  },

  {
    path: '*',
    element: <div>Not Found</div>,
  }
];

export default routes;
