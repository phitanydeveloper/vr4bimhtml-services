import { useEffect } from "react"

// Reveals every [data-reveal] element as it scrolls into view, including ones
// mounted later (page switches, filter changes). Styles live in index.css.
export function useScrollReveal() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    const root = document.documentElement
    root.classList.add("reveal-enabled")

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    )

    const observe = (el: Element) => {
      if (!el.classList.contains("is-visible")) io.observe(el)
    }

    document.querySelectorAll("[data-reveal]").forEach(observe)

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return
          if (node.matches("[data-reveal]")) observe(node)
          node.querySelectorAll("[data-reveal]").forEach(observe)
        })
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
      root.classList.remove("reveal-enabled")
    }
  }, [])
}
