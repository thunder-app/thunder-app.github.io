const github = "https://github.com/thunder-app/thunder"

export const site = {
  description: "An open-source Lemmy and PieFed app for iOS and Android. No ads or trackers.",
  links: {
    github,
    features: `${github}#features`,
    releases: `${github}/releases/latest`,
    license: `${github}/blob/develop/LICENSE`,
    weblate: "https://hosted.weblate.org/engage/thunder/",
    appStore: "https://apps.apple.com/app/id6450518497",
    googlePlay: "https://play.google.com/store/apps/details?id=com.hjiangsu.thunder",
    izzy: "https://apt.izzysoft.de/fdroid/index/apk/com.hjiangsu.thunder",
  },
}

export const stores = [
  { name: "App Store", link: site.links.appStore, badge: { file: "app_store.svg", width: 120, height: 40 } },
  { name: "Google Play", link: site.links.googlePlay, badge: { file: "google_play.svg", width: 180, height: 53 } },
  { name: "IzzyOnDroid", link: site.links.izzy, badge: { file: "izzy_on_droid.png", width: 532, height: 163 } },
  { name: "GitHub Releases", link: site.links.releases, badge: { file: "github.png", width: 564, height: 168 } },
]
