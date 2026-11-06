// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://www.kaizencode.es",
  // Every page ships its CSS in the HTML: no render-blocking request. GitHub
  // Pages caches files for 10 minutes only, so a shared file gains little
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          en: "en-US",
          es: "es-ES",
        },
      },
    }),
  ],
  // Spanish used to live under /es/ — keep those URLs working
  redirects: {
    "/es": "/",
    "/es/diseno-web": "/diseno-web/",
    "/es/diseno-web-cuenca": "/desarrollo-software-cuenca/",
    "/es/diseno-web-malaga": "/desarrollo-software-malaga/",
    "/es/diseno-web-valencia": "/desarrollo-software-valencia/",
    // City pages now cover web, apps and AI, not just web design
    "/diseno-web-cuenca": "/desarrollo-software-cuenca/",
    "/diseno-web-malaga": "/desarrollo-software-malaga/",
    "/diseno-web-valencia": "/desarrollo-software-valencia/",
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
