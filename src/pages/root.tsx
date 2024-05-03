import { Outlet } from "react-router-dom";

import Header from "@/components/custom/header";
import { ThemeProvider } from "@/components/custom/theme-provider";

function Root() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="thunder-ui-theme">
      <Header />
      <Outlet />
      <div className="flex items-center justify-center text-foreground/40 h-24">
        <div>
          Thunder is available under GNU AGPL v3 license.
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Root;