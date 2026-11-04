// Smoke test for the built site: run `pnpm build` first (or `pnpm test`).
// Every page needs a title, canonical and og tags; es/en twins must link to
// each other with hreflang; every page must be in the sitemap.
import { readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"
import assert from "node:assert/strict"

const dist = new URL("../dist/", import.meta.url).pathname
const site = "https://www.kaizencode.es"
const walk = (d) =>
  readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]
  )
const pages = walk(dist)
  .filter((f) => f.endsWith("index.html"))
  .map((f) => ({
    url: "/" + f.slice(dist.length).replace(/index\.html$/, ""),
    html: readFileSync(f, "utf8"),
  }))
  // redirect stubs (e.g. /es/, /diseno-web-cuenca/) only carry a refresh
  .filter((p) => !p.html.includes('http-equiv="refresh"'))

const sitemap = walk(dist)
  .filter((f) => /sitemap-\d+\.xml$/.test(f))
  .map((f) => readFileSync(f, "utf8"))
  .join("")

assert(pages.length >= 20, `only ${pages.length} pages built`)
for (const { url, html } of pages) {
  const ctx = `page ${url}`
  assert(/<title>[^<]{5,}<\/title>/.test(html), `${ctx}: missing title`)
  assert(html.includes('name="description"'), `${ctx}: missing description`)
  assert(
    html.includes(`rel="canonical" href="${site}${url}"`),
    `${ctx}: bad canonical`
  )
  assert(html.includes('property="og:title"'), `${ctx}: missing og:title`)
  assert(sitemap.includes(`<loc>${site}${url}</loc>`), `${ctx}: not in sitemap`)
}

// Every English page has a Spanish twin that points back at it
for (const { url, html } of pages.filter((p) => p.url.startsWith("/en/"))) {
  const href = html.match(/hreflang="es" href="([^"]+)"/)?.[1]
  assert(href, `${url}: no es hreflang`)
  const es = pages.find((p) => site + p.url === href)
  assert(es, `${url}: es twin ${href} was not built`)
  assert(
    es.html.includes(`hreflang="en" href="${site}${url}"`),
    `${href}: no hreflang back to ${url}`
  )
}
console.log(`ok: ${pages.length} pages checked`)
