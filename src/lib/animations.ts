import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Scroll and data animations, driven by the markup (the page entrance,
// .stars-in / .blur-in / .hero-in, is CSS in src/styles/global.css):
//   .reveal      sections rise into place as they scroll in (move only, never
//                fade, so text never fails contrast mid-animation)
//   [data-count-up]  "10+" counts up from 0
//   --scroll-progress  0..1 on <html>, the header bar's scaleX (not
//                motion-gated: it reports position, it does not animate)
// Everything is visible without JS; with reduced motion nothing animates.
export function initAnimations() {
  const mm = gsap.matchMedia()

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      gsap.from(el, {
        y: 32,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top bottom-=240",
          scrub: true,
        },
      })
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

  gsap.fromTo(document.documentElement, { "--scroll-progress": 0 }, {
    "--scroll-progress": 1,
    ease: "none",
    scrollTrigger: { start: 0, end: "max", scrub: true },
  })

  // Webfonts change heights after first layout
  document.fonts.ready.then(() => ScrollTrigger.refresh())

  return () => {
    mm.revert()
    ScrollTrigger.getAll().forEach((t) => t.kill())
  }
}
