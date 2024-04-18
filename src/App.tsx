import React from 'react';
import { GlobalStyle } from './global.styled';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Routes } from './routes/routes';

const App: React.FC = () => {
  const router = createBrowserRouter(Routes);

  return (
    <div>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
