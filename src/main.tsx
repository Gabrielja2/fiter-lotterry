import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/login.page';
import RegisterPage from './pages/register.page';
import { GlobalStyle } from './global.styled';
import ProfilePage from './pages/profile';
import { NotFoundErrorMessage } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <NotFoundErrorMessage children={'Home page not found'} />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <NotFoundErrorMessage children={'Login page not found'} />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <NotFoundErrorMessage children={'Register page not found'} />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    errorElement: <NotFoundErrorMessage children={'Profile page not found'} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
