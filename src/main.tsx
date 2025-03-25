import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Root from '@/pages/root';
import ErrorPage from '@/pages/error';

import './index.css';
import Landing from './pages/landing';
import Docs from './pages/docs';
import Downloads from './pages/downloads';
import PrivacyPolicy from './pages/privacy_policy';
import TermsOfUse from './pages/terms_of_use';

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
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-of-use",
        element: <TermsOfUse />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
