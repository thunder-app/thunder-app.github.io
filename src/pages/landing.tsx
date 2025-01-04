import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { Icons } from '@/components/custom/icons';
import { ArrowRight } from 'lucide-react';

import thunder from '@/assets/thunder.png';

function Landing() {
  return (
    <div className="flex flex-col items-center h-full">
      <section className="relative flex flex-col items-center justify-center py-24">
        <img src={thunder} width={200} className="rounded-[3em] mb-8" alt="Thunder logo" />
        <h1 className="text-6xl font-bold">Thunder</h1>
        <p className="my-8 text-lg text-center max-w-xl mx-auto">An open-source, cross-platform Lemmy client for the fediverse. Fully free of advertisements and trackers.</p>
        <Link to="/download">
          <Button className="mt-4" >
            <span>Get Thunder</span>
            <ArrowRight className="ml-2 w-5" />
          </Button>
        </Link>
      </section>

      <section className="container mx-auto py-14">
        <div className="flex flex-wrap justify-center mt-8">
          <div className="w-full md:w-1/3 p-4">
            <div className="p-6 text-center">
              <div className="flex justify-center align-center space-x-4">
                <Icons.phone className="h-14 w-14 mb-4 text-primary" />
                <Icons.tablet className="h-14 w-14 mb-4 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Cross Platform</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Compatible with both iOS and Android, providing a unified experience across devices.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="p-6 text-center">
              <Icons.cogwheel className="h-14 w-14 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold">Fully Customizable</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Personalize your experience with extensive customization options.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="p-6 text-center">
              <Icons.github className="h-14 w-14 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold">Open Source</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Thunder is fully open-source, developed and maintained by a community of contributors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-14">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 p-4 subsection">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Personalize Your Feed</h3>
              <p className="text-gray-600 dark:text-gray-400">Use keyword filters to automatically filter posts. Block unwanted users, communities, or instances. Tailor your feed to show only the content you care about.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 subsection">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Theming</h3>
              <p className="text-gray-600 dark:text-gray-400">Easily switch between light and dark themes. Customize with Material You colors or select your own accent color to match your style.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 subsection">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Multi-Account Support</h3>
              <p className="text-gray-600 dark:text-gray-400">Effortlessly manage multiple accounts across different instances. Add, remove, and switch between accounts with ease, all from a single interface.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 subsection">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Guest Mode</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Want to explore without signing up? Use Guest Mode to browse instances anonymously and enjoy Thunder's features without an account.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 subsection">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Advanced Search Capabilities</h3>
              <p className="text-gray-600 dark:text-gray-400">Search for specific posts, comments, users, communities, and even instances with Thunder's advanced search capabilities.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 subsection">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Moderator Tools</h3>
              <p className="text-gray-600 dark:text-gray-400">Manage your communities with Thunder's moderator tools. Pin important posts, remove unwanted content, or ban offending users with ease.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;