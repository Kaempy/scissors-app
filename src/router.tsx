import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages';
import Loginpage from './pages/auth/login';
import Signup from './pages/auth/signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/auth',
        element: <Loginpage />,
      },
      {
        path: '/auth/signup',
        element: <Signup />,
      },
    ],
  },
]);

export default router;
