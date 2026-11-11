import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import Lenis from "lenis"

gsap.registerPlugin(ScrollTrigger, SplitText)

// Under the 4rem sticky header
const STACK_TOP = "top 64px"
// Seconds scrubbed animations take to catch up with the scroll. Kept short:
// it stacks on Lenis's own lag, and touch has no Lenis, so it needs less
const SCRUB = matchMedia("(hover: none)").matches ? 0.25 : 0.5

const GLYPHS = "abcdefghijklmnopqrstuvwxyz0123456789{}<>/=+*"

// The statement deciphers itself, left to right, once it comes into view: it
// plays on its own, the reader only has to arrive. Mono glyphs all have one
// width, so the lines never reflow.
function animateStatement() {
  const el = document.querySelector<HTMLElement>("[data-scramble]")
  const track = el?.closest("[data-scramble-track]")
  if (!el || !track) return
  const text = el.textContent ?? ""
  let last = -1
  const render = (progress: number) => {
    const shown = Math.floor(progress * text.length)
    // Rewriting huge type is a full layout: only when a character resolves
    if (shown === last) return
    last = shown
    el.textContent =
      text.slice(0, shown) +
      text
        .slice(shown)
        .replace(/\S/g, () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)])
  }
  render(0)
  const state = { progress: 0 }
  gsap.to(state, {
    progress: 1,
    duration: 1.8,
    ease: "power1.inOut",
    onUpdate: () => render(state.progress),
    scrollTrigger: { trigger: track, start: "top 60%", once: true },
  })
  return () => void (el.textContent = text)
}

// Display titles whose letters arrive one by one, once
function animateCharTitles() {
  gsap.utils.toArray<HTMLElement>("[data-title-chars]").forEach((title) => {
    // Letters don't depend on the line breaks, so one split is enough
    gsap.from(SplitText.create(title, { type: "words,chars" }).chars, {
      y: 56,
      opacity: 0,
      rotate: 6,
      duration: 0.8,
      stagger: 0.025,
      ease: "power3.out",
      scrollTrigger: { trigger: title, start: "top 85%", once: true },
    })
  })
}

// Rows that draw their hairline and raise their cells, once each
function animateRows(track: HTMLElement) {
  gsap.utils
    .toArray<HTMLElement>("[data-process-step]", track)
    .forEach((step) => {
      gsap
        .timeline({
          scrollTrigger: { trigger: step, start: "top 88%", once: true },
        })
        .from(step.querySelector("[data-process-line]"), {
          scaleX: 0,
          duration: 1.1,
          ease: "power3.inOut",
        })
        .from(
          step.querySelectorAll("[data-process-cell]"),
          {
            y: 28,
            opacity: 0,
            duration: 0.8,
            stagger: 0.09,
            ease: "power3.out",
            // A leftover transform would box in the row's stretched link
            clearProps: "transform",
          },
          0.2
        )
    })
}

// The process. The mark turns in space with the scroll; each row plays once
// as it arrives, so nothing rests half revealed
function animateProcess() {
  gsap.utils.toArray<HTMLElement>("[data-process]").forEach((track) => {
    gsap.fromTo(
      track.querySelector("[data-process-mark]"),
      { rotateY: -55, transformPerspective: 700 },
      {
        rotateY: 55,
        ease: "none",
        scrollTrigger: {
          trigger: track,
          start: "top bottom",
          end: "bottom top",
          scrub: SCRUB,
        },
      }
    )
    gsap.from(track.querySelector("[data-process-aside] ul"), {
      y: 32,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: track, start: "top 70%", once: true },
    })
    animateRows(track)
  })
}

// Wide type that travels with the scroll: the marquee, the team's names and
// the closing panel growing to fill the screen
function animateTravellingType() {
  gsap.utils.toArray<HTMLElement>("[data-marquee]").forEach((line) => {
    gsap.to(line, {
      x: () => -window.innerWidth * 0.8,
      ease: "none",
      scrollTrigger: {
        trigger: line.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: SCRUB,
        invalidateOnRefresh: true,
      },
    })
  })
  gsap.utils.toArray<HTMLElement>("[data-team-name]").forEach((name) => {
    gsap.from(name, {
      xPercent: name.dataset.teamName === "left" ? -14 : 14,
      ease: "power2.out",
      scrollTrigger: {
        trigger: name,
        start: "top bottom",
        end: "center 55%",
        scrub: SCRUB,
      },
    })
  })
  gsap.utils.toArray<HTMLElement>("[data-close]").forEach((panel) => {
    gsap.fromTo(
      panel,
      { scale: 0.86 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: panel.parentElement,
          start: "top bottom",
          end: STACK_TOP,
          scrub: SCRUB,
        },
      }
    )
  })
}

// The project index: the sticky screenshot follows the row in use, and is
// decoded ahead so changing rows never shows an empty frame.
function initProjectIndex() {
  const work = document.querySelector<HTMLElement>("[data-work]")
  if (!work) return
  const shots = work.querySelectorAll<HTMLImageElement>("[data-work-shot]")
  ScrollTrigger.create({
    trigger: work,
    start: "top 300%",
    once: true,
    onEnter: () =>
      shots.forEach((shot) => {
        shot.loading = "eager"
        shot.decode().catch(() => {})
      }),
  })
  work.querySelectorAll<HTMLElement>("[data-work-row]").forEach((row) => {
    const show = () =>
      shots.forEach((shot) =>
        shot.toggleAttribute(
          "data-active",
          shot.dataset.workShot === row.dataset.workRow
        )
      )
    row.addEventListener("pointerenter", show)
    row.addEventListener("focusin", show)
  })
}

// No hover on touch: the row crossing the middle of the screen lights up
function lightRowsOnTouch() {
  gsap.utils.toArray<HTMLElement>("[data-work-row]").forEach((row) => {
    ScrollTrigger.create({
      trigger: row,
      start: "top 60%",
      end: "bottom 40%",
      onToggle: ({ isActive }) => row.toggleAttribute("data-lit", isActive),
    })
  })
  return () =>
    document
      .querySelectorAll("[data-lit]")
      .forEach((row) => row.removeAttribute("data-lit"))
}

// The screenshot opens once, as the rows draw themselves in
function animateProjectIndex() {
  const preview = document.querySelector("[data-work-preview]")
  if (preview) {
    gsap.from(preview, {
      clipPath: "inset(0 0 100% 0)",
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: { trigger: preview, start: "top 80%", once: true },
    })
  }
  const work = document.querySelector<HTMLElement>("[data-work]")
  if (work) animateRows(work)
}

// The services stack. Stacking itself is CSS sticky; this only adds the motion,
// all tied to scroll: each panel's title rises out of a mask as it arrives, and
// the panel it covers shrinks back and darkens.
function animateServicesStack() {
  const panels = gsap.utils.toArray<HTMLElement>("[data-stack-panel]")
  panels.forEach((panel, i) => {
    // Decoded ahead, like the project screenshots, so they never stall the scroll
    ScrollTrigger.create({
      trigger: panel,
      start: "top 300%",
      once: true,
      onEnter: () =>
        panel.querySelectorAll("img").forEach((image) => {
          image.loading = "eager"
          image.decode().catch(() => {})
        }),
    })
    const arrive = {
      trigger: panel,
      start: "top 85%",
      end: STACK_TOP,
      scrub: SCRUB,
    }
    SplitText.create(panel.querySelector("[data-stack-title]"), {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: arrive,
        }),
    })
    gsap.from(panel.querySelector("[data-stack-number]"), {
      yPercent: 60,
      ease: "power2.out",
      scrollTrigger: arrive,
    })
    gsap.from(panel.querySelector("[data-stack-rest]"), {
      y: 96,
      ease: "power2.out",
      scrollTrigger: arrive,
    })

    const next = panels[i + 1]
    if (!next) return
    const cover = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: next,
        start: "top bottom",
        end: STACK_TOP,
        scrub: SCRUB,
      },
    })
    cover
      .to(panel.querySelector("[data-stack-inner]"), { scale: 0.92 })
      .to(panel.querySelector("[data-stack-shade]"), { opacity: 0.55 }, 0)
  })
}

// Scroll and data animations, driven by the markup (the page entrance,
// .stars-in / .header-in / .blur-in / .hero-in, is CSS in src/styles/global.css):
//   .reveal      each block fades and rises into place as it enters, on load
//                or scroll (hidden from first paint by the .js rule in CSS)
//   [data-stagger]  its cards rise one by one instead of as one block
//   [data-count-up]  "10+" counts up from 0
//   [data-work]    the projects, see animateProjectIndex
//   [data-stack-panel]  the services stack, see animateServicesStack
//   Lenis        eased wheel scrolling; touch keeps native scrolling
//   --scroll-progress  0..1 on <html>, the header bar's scaleX (not
//                motion-gated: it reports position, it does not animate)
// Everything is visible without JS; with reduced motion nothing animates.
export function initAnimations() {
  // Tells the failsafe in layouts/main.astro that the reveals are running
  document.documentElement.dataset.reveal = "on"
  const mm = gsap.matchMedia()

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // Wheel only. Lenis writes instant scroll positions, so html's
    // scroll-smooth still animates anchors and back-to-top natively
    const lenis = new Lenis({
      autoRaf: false,
      allowNestedScroll: true,
      lerp: 0.14,
    })
    lenis.on("scroll", ScrollTrigger.update)
    // Not Lenis's own lenis-scrolling class: it can stay on with the page still
    const root = document.documentElement
    lenis.on("scroll", ({ velocity }) => {
      root.toggleAttribute("data-page-moving", Math.abs(velocity) > 0.01)
    })
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    animateServicesStack()
    animateTravellingType()

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

    return () => {
      gsap.ticker.remove(tick)
      gsap.ticker.lagSmoothing(500, 33)
      root.removeAttribute("data-page-moving")
      lenis.destroy()
    }
  })

  initProjectIndex()
  mm.add("(prefers-reduced-motion: no-preference)", animateProcess)
  mm.add("(prefers-reduced-motion: no-preference)", animateCharTitles)
  mm.add("(prefers-reduced-motion: no-preference)", animateProjectIndex)
  mm.add("(hover: none)", lightRowsOnTouch)
  mm.add("(prefers-reduced-motion: no-preference)", () =>
    gsap.utils.toArray<HTMLElement>("[data-rows]").forEach(animateRows)
  )
  mm.add("(prefers-reduced-motion: no-preference)", animateStatement)

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
