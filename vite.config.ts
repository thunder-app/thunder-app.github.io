import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

import { notFoundTitle, routes } from "./src/config/routes.ts"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "github-pages-routes",
      apply: "build",
      generateBundle: {
        order: "post",
        handler(_options, bundle) {
          const page = bundle["index.html"]
          if (page?.type !== "asset" || typeof page.source !== "string") return

          const pages = [
            ...Object.values(routes).map(({ path, title }) => ({
              fileName: `${path.slice(1)}/index.html`,
              title,
            })),
            { fileName: "404.html", title: notFoundTitle },
          ]

          for (const { fileName, title } of pages) {
            this.emitFile({
              type: "asset",
              fileName,
              source: page.source.replace(/<title>.*<\/title>/, `<title>${title}</title>`),
            })
          }
        },
      },
    },
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
