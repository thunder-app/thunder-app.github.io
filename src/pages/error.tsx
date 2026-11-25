import { Link, useRouteError } from "react-router-dom"

import { Button } from "@/components/ui/button"

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <section className="site-width inner-page error-page">
      <header className="page-intro">
        <h1>{error ? "Something went wrong." : "Page not found."}</h1>
        <p>{error ? "Return to the homepage to keep browsing Thunder." : "This address doesn’t match a page on the Thunder site."}</p>
      </header>
      <Button asChild size="lg" className="h-11">
        <Link to="/">Back to home</Link>
      </Button>
    </section>
  )
}
