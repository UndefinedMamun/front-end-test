import MainLayout from "./components/MainLayout";
import AddItem from "./pages/AddItem";
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
      {
        path: 'add',
        element: <AddItem />
      },
    ]
  },

  {
    path: '*',
    element: <div>Not Found</div>,
  }
];

export default routes;
