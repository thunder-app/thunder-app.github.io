import { Link, useLocation } from "react-router-dom";

import { site } from "@/config/site";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/custom/icons";

function Navigation() {
  const location = useLocation();

  return (
    <div className="mr-4 flex">
      <Link to="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold inline-block">
          {site.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
      <Link
          to="/download"
          className={cn(
            "hidden transition-colors hover:text-foreground/80 lg:block",
            location.pathname === "/download" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Download
        </Link>
        <Link
          to="/docs"
          className={cn(
            "hidden transition-colors hover:text-foreground/80 lg:block",
            location.pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Docs
        </Link>
        <Link
          to={site.links.github}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  )
}

export default Navigation;