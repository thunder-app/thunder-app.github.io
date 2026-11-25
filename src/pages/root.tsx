import { useEffect } from "react"
import { Link, Outlet, ScrollRestoration, useLocation } from "react-router-dom"

import Header from "@/components/custom/header"
import { ThemeProvider } from "@/components/custom/theme-provider"
import { notFoundTitle, routes } from "@/config/routes"
import { site } from "@/config/site"

export default function Root() {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = pathname.replace(/\/$/, "")
    const page = Object.values(routes).find((route) => route.path === path)
    document.title = path ? page?.title ?? notFoundTitle : "Thunder"
  }, [pathname])

  return (
    <ThemeProvider>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-width footer-inner">
          <a href={site.links.license}>GNU AGPL v3</a>
          <nav aria-label="Footer navigation">
            <a href={site.links.weblate}>Translate</a>
            <Link to={routes.privacy.path}>Privacy</Link>
            <Link to={routes.terms.path}>Terms</Link>
          </nav>
        </div>
      </footer>
      <ScrollRestoration />
    </ThemeProvider>
  )
}
