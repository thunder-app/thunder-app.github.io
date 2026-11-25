import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { routes } from "@/config/routes"

import ErrorPage from "./pages/error"
import Landing from "./pages/landing"
import Root from "./pages/root"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: routes.privacy.path,
        lazy: async () => ({ Component: (await import("./pages/privacy_policy")).default }),
      },
      {
        path: routes.terms.path,
        lazy: async () => ({ Component: (await import("./pages/terms_of_use")).default }),
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
