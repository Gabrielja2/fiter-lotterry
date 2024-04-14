import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/login.page';
import RegisterPage from './pages/register.page';
import { GlobalStyle } from './global.styled';
import ProfilePage from './pages/profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hello</div>,
    errorElement: <div>not found</div>,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <div>not found</div>,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <div>not found</div>,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    errorElement: <div>not found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
