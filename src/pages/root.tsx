import { Outlet } from 'react-router';

import Header from '@/components/custom/header';

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <div className="flex items-center justify-center text-foreground/40 h-24">
        <div>
          Thunder is available under GNU AGPL v3 license.
        </div>
      </div>
    </>
  );
}

export default Root;