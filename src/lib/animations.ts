import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Page animations, driven by class names in the markup:
//   .stars-in    star field fades in
//   .blur-in     hero wordmark words blur in, one after another
//   .hero-shine  one light sweep across the wordmark
//   .hero-in     hero entrance, staggered by the element's --i
//   .reveal      sections rise into place as they scroll in (move only, never
//                fade, so text never fails contrast mid-animation)
//   [data-count-up]  "10+" counts up from 0
// Everything is visible without JS; with reduced motion nothing animates.
// The head script in main.astro hides the entrance targets until this runs.
export function initAnimations() {
  const mm = gsap.matchMedia()

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.from(".stars-in", { autoAlpha: 0, duration: 1.5, ease: "power1.out" })

    gsap.from(".blur-in", {
      autoAlpha: 0,
      filter: "blur(10px)",
      duration: 0.8,
      delay: 0.2,
      stagger: 0.08,
      ease: "power1.out",
      clearProps: "filter",
    })

    gsap.fromTo(
      ".hero-shine",
      { backgroundPosition: "100% 0" },
      {
        backgroundPosition: "0% 0",
        duration: 1.6,
        delay: 0.9,
        ease: "power1.inOut",
      }
    )

    gsap.utils.toArray<HTMLElement>(".hero-in").forEach((el) => {
      const i = Number(getComputedStyle(el).getPropertyValue("--i")) || 0
      gsap.from(el, {
        autoAlpha: 0,
        y: 18,
        filter: "blur(6px)",
        duration: 0.9,
        delay: 0.1 + i * 0.09,
        ease: "power3.out",
        // A lingering filter would cut glass cards inside off from the stars
        clearProps: "transform,filter",
      })
    })

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

  // Webfonts change heights after first layout
  document.fonts.ready.then(() => ScrollTrigger.refresh())

  return () => mm.revert()
}
