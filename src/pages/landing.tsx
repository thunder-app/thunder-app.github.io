import { Circle, Moon, Sun } from "lucide-react"

import { Icons } from "@/components/custom/icons"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { site, stores } from "@/config/site"

const accents = ["green", "blue", "red", "yellow"]
const appThemes = [
  { label: "Light", image: "theme-light", icon: Sun },
  { label: "Dark", image: "theme-dark", icon: Moon },
  { label: "Pure black", image: "theme-black", icon: Circle, fill: "currentColor" },
]

function ThemePreview() {
  return (
    <section className="landing-section" aria-labelledby="appearance-title">
      <Tabs defaultValue={appThemes[0].image} className="feature-layout">
        <div className="feature-copy">
          <h2 id="appearance-title">Light, dark, and pure <span className="black-accent">black</span></h2>
          <p className="landing-description">Pick a theme for Thunder or let it follow your device’s appearance.</p>
        </div>
        <div className="preview-stage">
          <TabsList
            aria-label="App theme preview"
            className="order-last mt-5 max-w-full flex-wrap border border-border bg-transparent px-1 py-0.5 group-data-[orientation=horizontal]/tabs:h-auto"
          >
            {appThemes.map(({ image, label, icon: Icon, fill }) => (
              <TabsTrigger
                key={image}
                value={image}
                aria-label={label}
                title={label}
                className="h-9 min-w-11 flex-none px-3 py-0.5 dark:data-[state=active]:bg-muted"
              >
                <Icon aria-hidden="true" fill={fill} />
              </TabsTrigger>
            ))}
          </TabsList>
          {appThemes.map(({ label, image }) => (
            <TabsContent key={image} value={image}>
              <img
                className="screen-preview single-screen"
                src={`/previews/${image}.webp`}
                alt={`Thunder’s feed in ${label.toLowerCase()} mode`}
                width="560"
                height="1247"
                loading="lazy"
              />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  )
}

export default function Landing() {
  return (
    <div className="site-width landing">
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-logo" src="/thunder.png" alt="" width="200" height="200" fetchPriority="high" />
        <h1 id="hero-title">Thunder</h1>
        <p className="hero-description">{site.description}</p>
        <Button asChild size="lg" className="h-auto min-h-11 max-w-full whitespace-normal">
          <a href="#download">Get Thunder</a>
        </Button>
        <div className="hero-community">
          <Button asChild variant="outline" className="h-auto min-h-11 max-w-full whitespace-normal">
            <a href={site.links.github}><Icons.github aria-hidden="true" /> Contribute on GitHub</a>
          </Button>
          <Button asChild variant="outline" className="h-auto min-h-11 max-w-full whitespace-normal">
            <a href={site.links.weblate}><Icons.weblate aria-hidden="true" /> Translate via Weblate</a>
          </Button>
        </div>
      </section>

      <section className="landing-section" id="features" aria-labelledby="theming-title">
        <h2 id="theming-title">Make your feed <span className="theming-accent">a little more you</span></h2>
        <p className="landing-description">
          Give Thunder your favorite accent color. On supported Android devices, Material You can
          match the app to your system colors.
        </p>
        <div className="accent-gallery">
          {accents.map((color) => (
            <img
              key={color}
              className="screen-preview"
              data-accent={color}
              src={`/previews/material-${color}.webp`}
              alt={`Thunder’s feed with the ${color} accent`}
              width="560"
              height="1247"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <ThemePreview />

      <section className="landing-section" aria-labelledby="accounts-title">
        <div className="feature-layout feature-layout-reverse">
          <div className="feature-copy">
            <h2 id="accounts-title">Your accounts in one place</h2>
            <p className="landing-description">Switch between accounts on different servers, or browse as a guest.</p>
          </div>
          <div className="preview-stage">
            <img
              className="screen-preview single-screen"
              src="/previews/multi-account.webp"
              alt="The account switcher in Thunder with signed-in and guest accounts"
              width="560"
              height="1247"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="landing-section" aria-labelledby="customization-title">
        <h2 id="customization-title"><span className="customization-accent">Customizability</span> at your fingertips</h2>
        <p className="landing-description">Give photos room with card view or fit more posts into compact view. Set swipe shortcuts for voting, saving, and replying.</p>
        <div className="feature-gallery">
          <img className="screen-preview" src="/previews/create-post.webp" alt="Thunder’s post composer" width="560" height="599" loading="lazy" />
          <img className="screen-preview" src="/previews/compact-mode.webp" alt="Several posts displayed as compact rows with thumbnails" width="540" height="775" loading="lazy" />
          <img className="screen-preview" src="/previews/card-mode.webp" alt="Two posts with large photos in card view" width="560" height="675" loading="lazy" />
        </div>
        <p className="landing-description">Search with filters, favorite communities, and hide posts that match keywords you choose.</p>
        <Button asChild variant="outline" className="mt-4 h-auto min-h-11 max-w-full whitespace-normal">
          <a href={site.links.features}><Icons.github aria-hidden="true" /> See all features on GitHub</a>
        </Button>
      </section>

      <section className="landing-section" id="download" aria-labelledby="download-title">
        <h2 id="download-title">Download Thunder</h2>
        <p className="landing-description">Free and open source on iOS and Android.</p>
        <ul className="download-badges">
          {stores.map(({ name, link, badge }) => (
            <li key={name}>
              <a href={link}>
                <img src={`/assets/badges/${badge.file}`} alt={name} width={badge.width} height={badge.height} loading="lazy" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
