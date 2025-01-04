import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import thunder from '@/assets/thunder.png';

function OAuth() {
  const currentUrl = window.location.href;

  function handleClick() {
    window.open(currentUrl, '_self');
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <section className="relative flex flex-col items-center justify-center">
        <img src={thunder} width={200} className="rounded-[3em] mb-8" alt="Thunder logo" />
        <h1 className="text-4xl font-bold">Thunder</h1>
        <Button className="mt-12" onClick={handleClick}>
          <span>Return to Thunder</span>
          <ArrowRight className="ml-2 w-5" />
        </Button>
      </section>
    </div>
  );
}

export default OAuth;