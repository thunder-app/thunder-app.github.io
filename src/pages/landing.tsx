import { Icons } from "@/components/custom/icons";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading, PageHeaderSubHeading } from "@/components/custom/page-header";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/config/site"
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";

const modeImages = [
  "theme-light.png",
  "theme-dark.png",
  "theme-black.png"
];

function Landing() {
  const downloadsRef = useRef<HTMLDivElement>(null);
  const [currentModeImage, setCurrentModeImage] = useState(0);

  const nextImage = () => {
    setCurrentModeImage((prev) => (prev + 1) % modeImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container relative pb-8 overflow-hidden">
      <PageHeader>
        {/* <Announcement /> */}
        <img src="/thunder.png" width={200} className="rounded-[3em] mb-8" alt="Thunder logo" />
        <PageHeaderHeading>Thunder</PageHeaderHeading>
        <PageHeaderDescription>
          {site.description}
        </PageHeaderDescription>
        <PageActions className="md:pb-4">
          <a onClick={() => window.scrollTo({ top: downloadsRef.current !== null ? downloadsRef.current.offsetTop : 0, behavior: "smooth" })} className={`${cn(buttonVariants())} cursor-pointer`}>
            <span>Get Thunder</span>
            <ArrowRight className="ml-2 w-5" />
          </a>
        </PageActions>
        <PageActions className="">
          <Link
            target="_blank"
            to={site.links.github}
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            <Icons.github className="mr-2 h-4 w-4" />
            Contribute on GitHub
          </Link>
          <Link
            target="_blank"
            to={site.links.weblate}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.weblate className="mr-2 h-4 w-4" />
            Translate via Weblate
          </Link>
        </PageActions>

        <PageHeaderSubHeading className="mt-40">
          It's all about <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400 dark:from-cyan-500 dark:to-blue-400">Material You</span>
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          Choose your own accent colors, or let Thunder do it for you.
        </PageHeaderDescription>
        <div className="relative max-w-screen-lg translate-y-[-50px] lg:translate-y-0 scale-75 lg:scale-100">
          <div className="absolute inset-y-0 left-0 md:w-40 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 md:w-40 bg-gradient-to-r from-background to-transparent rotate-180" />

          <section className="flex justify-center gap-3 align-middle pt-3 md:overflow-hidden">
            <img
              src="/assets/material-green.png"
              width={250}
              className="border-solid border-[6px] dark:border-slate-200 border-slate-700 rounded-3xl"
            />
            <img
              src="/assets/material-blue.png"
              width={250}
              className="border-solid border-[6px] dark:border-slate-200 border-slate-700 rounded-3xl"
            />
            <img
              src="/assets/material-red.png"
              width={250}
              className="border-solid border-[6px] dark:border-slate-200 border-slate-700 rounded-3xl"
            />
            <img
              src="/assets/material-yellow.png"
              width={250}
              className="border-solid border-[6px] dark:border-slate-200 border-slate-700 rounded-3xl"
            />
          </section>
        </div>

        <PageHeaderSubHeading className="md:mt-40">
          Light mode, dark mode, and pure <span className="underline">black</span>
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          Switch between light mode, dark mode, and pure black. Or just let your device choose.
        </PageHeaderDescription>
        <section className="flex justify-center gap-3 align-middle pt-3 overflow-hidden h-[710px]">
          {modeImages.map((image, index) => (
            <motion.img
              key={index}
              src={`/assets/${image}`}
              className="object-cover object-top h-[700px] w-[600px] border-solid border-[6px] dark:border-slate-200 border-slate-700 rounded-t-3xl translate-y-[-50px] lg:translate-y-0 scale-75 lg:scale-100"
              alt={`Image ${index + 1}`}
              style={{
                position: "absolute",
                width: "395px",
                opacity: currentModeImage === index ? 1 : 0,
                transition: "opacity 0.5s ease-out"
              }}
            />
          ))}
        </section>


        <PageHeaderSubHeading className="md:mt-40">
          Multi-account support? Guest mode? <span className="underline">It's all here</span>
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          Thunder provides multi-account support and guest modes. Manage all your accounts in one place.
        </PageHeaderDescription>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.20 }}
          transition={{ duration: 0.4 }}
          variants={{
            visible: { opacity: 1, scale: 0.8, translateY: -50 },
            hidden: { opacity: 0.4, scale: 0.6, translateY: 50 }
          }}
        >
          <section className="flex justify-center gap-3 align-middle pt-3 h-[670px]">
            <img
              src="/assets/multi-account.png"
              className="object-cover object-top h-[800px] w-[600px] border-solid border-[6px] dark:border-slate-200 border-slate-700 rounded-t-3xl translate-y-[-50px] lg:translate-y-0 scale-75 lg:scale-100"
            />
          </section>
        </motion.div>

        <PageHeaderSubHeading id="download" className="md:mt-40">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-500 dark:from-emerald-500 dark:to-indigo-400">Customizability</span> at your fingertips
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          Craft your own experience. Enable <span className="italic">smooth</span> swipe gestures, switch between card and compact modes, and more.
        </PageHeaderDescription>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.20 }}
          transition={{ duration: 0.4 }}
          variants={{
            visible: { opacity: 1, scale: 1, translateY: 0 },
            hidden: { opacity: 0.4, scale: 0.9, translateY: 50 }
          }}
        >
          <section className="relative w-64 h-[640px] lg:h-[1190px] translate-y-[-150px] lg:translate-y-0 scale-50 lg:scale-100">
            <div>
              <img
                src="/assets/material-green.png"
                className="border-solid border-[6px] dark:border-slate-200 border-slate-700 rounded-3xl scale-[1.6] translate-y-[240px] shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-2xl transform translate-x-[-480px] scale-[1.1] opacity-90">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/assets/create-post.png"
                  className="rounded-2xl outline-dashed outline-offset-4 scale-[0.9] outline-slate-400"
                />
                <p className="mt-2 text-foreground">Post Creation</p>
              </div>
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-2xl transform translate-x-[430px] translate-y-[220px] scale-125 opacity-90">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/assets/compact-mode.png"
                  className="rounded-2xl outline-dashed outline-offset-4 scale-[0.9] outline-slate-400"
                />
                <p className="mt-2 text-foreground">Compact Mode</p>
              </div>
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-2xl transform translate-x-[-380px] translate-y-[390px] scale-[1.1] drop-shadow opacity-90">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/assets/card-mode.png"
                  className="rounded-2xl outline-dashed outline-offset-4 scale-[0.9] outline-slate-400"
                />
                <p className="mt-2 text-foreground">Card Mode</p>
              </div>
            </div>

            <div className="absolute inset-0 overflow-hidden rounded-2xl transform translate-x-[-480px] translate-y-[1050px] scale-[1.4] drop-shadow opacity-90">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/assets/comment-settings.png"
                  className="rounded-2xl outline-dashed outline-offset-4 scale-[0.9] outline-slate-400"
                />
                <p className="mt-2 text-foreground">Comments</p>
              </div>
            </div>

            <div className="absolute inset-0 overflow-hidden rounded-2xl transform translate-x-[500px] translate-y-[750px] scale-[1.2] drop-shadow opacity-90">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/assets/account-settings.png"
                  className="rounded-2xl outline-dashed outline-offset-4 scale-[0.9] outline-slate-400"
                />
                <p className="mt-2 text-foreground">Sync Account Settings</p>
              </div>
            </div>
          </section>
        </motion.div>

        <PageHeaderSubHeading className="mt-40">
          Download Thunder
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          Thunder is officially available on the <span className="font-semibold">App Store</span>, <span className="font-semibold">Google Play</span>, and <span className="font-semibold">F-Droid (via IzzyOnDroid)</span>.
        </PageHeaderDescription>
        <div ref={downloadsRef} className="flex flex-col md:flex-row gap-8 md:gap-6 items-center justify-center mt-6 z-10">
          <a href="https://apps.apple.com/iq/app/thunder-for-lemmy/id6450518497" className="h-[70px] cursor-pointer">
            <img src="assets/badges/app_store.svg" className="h-[70px]" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.hjiangsu.thunder">
            <img src="assets/badges/google_play.svg" className="h-[70px]" />
          </a>
          <a href="https://apt.izzysoft.de/fdroid/index/apk/com.hjiangsu.thunder">
            <img src="assets/badges/izzy_on_droid.png" className="h-[70px]" />
          </a>
          <a href="https://github.com/hjiangsu/thunder/releases/latest">
            <img src="assets/badges/github.png" className="h-[70px]" />
          </a>
        </div>
      </PageHeader>
    </div>
  )
}

export default Landing;
