import { Link, Outlet } from "react-router-dom";

import Header from "@/components/custom/header";
import { ThemeProvider } from "@/components/custom/theme-provider";
import { cn } from "@/lib/utils";

function Root() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="thunder-ui-theme">
      <Header />
      <Outlet />
      <div className="text-foreground/40 h-24">
        <div className="flex flex-row items-center justify-center space-x-2 mb-3">
          Thunder is available under GNU AGPL v3 license.
        </div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <Link
            to="/privacy-policy"
            className={cn("hidden transition-colors hover:text-foreground/80 lg:block")}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-use"
            className={cn("hidden transition-colors hover:text-foreground/80 lg:block")}
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Root;