import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Scroll and data animations, driven by the markup (the page entrance,
// .stars-in / .header-in / .blur-in / .hero-in, is CSS in src/styles/global.css):
//   .reveal      each block fades and rises into place as it enters, on load
//                or scroll (hidden from first paint by the .js rule in CSS)
//   [data-stagger]  its cards rise one by one instead of as one block
//   [data-count-up]  "10+" counts up from 0
//   --scroll-progress  0..1 on <html>, the header bar's scaleX (not
//                motion-gated: it reports position, it does not animate)
// Everything is visible without JS; with reduced motion nothing animates.
export function initAnimations() {
  // Tells the failsafe in layouts/main.astro that the reveals are running
  document.documentElement.dataset.reveal = "on"
  const mm = gsap.matchMedia()

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // Every block of a .reveal section (and each card of a [data-stagger]
    // grid) rises into place once it enters, in a stagger with whatever
    // enters alongside it. Blocks already on screen at load play right after
    // the hero's CSS entrance. CSS transitions (Card's transition-all) are
    // paused meanwhile so they don't fight the tween
    const blocks = gsap.utils.toArray<HTMLElement>(
      ".reveal > :not([data-stagger]), [data-stagger] > *"
    )
    const loadedAt = performance.now()
    gsap.set(blocks, { y: 48, scale: 0.98, transition: "none" })
    ScrollTrigger.batch(blocks, {
      start: "top bottom-=60",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.09,
          delay: performance.now() - loadedAt < 500 ? 0.5 : 0,
          clearProps: "transition",
        }),
    })

    document.querySelectorAll<HTMLElement>("[data-count-up]").forEach((el) => {
      const match = el.textContent?.trim().match(/^(\d+)(.*)$/)
      if (!match) return
      const [whole, digits, suffix] = match
      // Reserve the final width so counting does not shift the layout
      el.style.display = "inline-block"
      el.style.minWidth = `${whole.length}ch`
      const counter = { value: 0 }
      el.textContent = `0${suffix}`
      gsap.to(counter, {
        value: Number(digits),
        duration: 1.4,
        delay: 0.7,
        ease: "power4.out",
        onUpdate: () =>
          void (el.textContent = `${Math.round(counter.value)}${suffix}`),
      })
    })
  })

  gsap.fromTo(
    document.documentElement,
    { "--scroll-progress": 0 },
    {
      "--scroll-progress": 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: true },
    }
  )

  // Webfonts change heights after first layout
  document.fonts.ready.then(() => {
    ScrollTrigger.refresh()
    // After a ClientRouter swap the browser's own hash scroll runs before
    // reveal/layout settles, so land on the target once it's stable
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView()
  })

  return () => {
    mm.revert()
    ScrollTrigger.getAll().forEach((t) => t.kill())
  }
}
