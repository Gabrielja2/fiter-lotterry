import React from 'react';
import LoginPage from '../pages/login.page';
import RegisterPage from '../pages/register.page';
import ProfilePage from '../pages/profile';
import { RouteObject } from 'react-router-dom';
import { NotFoundErrorMessage } from '../components';

export const Routes: RouteObject[] = [
  {
    path: '/',
    element: <ProfilePage />,
    errorElement: <NotFoundErrorMessage children={'Page not found'} />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
];
