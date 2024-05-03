import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Root from '@/pages/root';
import ErrorPage from '@/pages/error';

import './index.css';
import Landing from './pages/landing';
import Docs from './pages/docs';
import Downloads from './pages/downloads';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/download",
        element: <Downloads />,
      },
      {
        path: "/docs",
        element: <Docs />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
