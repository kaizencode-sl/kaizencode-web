// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://www.kaizencode.es",
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
    "/es/diseno-web-cuenca": "/diseno-web-cuenca/",
    "/es/diseno-web-malaga": "/diseno-web-malaga/",
    "/es/diseno-web-valencia": "/diseno-web-valencia/",
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
