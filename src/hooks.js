import { useEffect, useState } from 'react'

export function useOpenStatus() {
  const compute = () => {
    const now = new Date()
    const day = now.getDay()
    const h = now.getHours() + now.getMinutes() / 60
    const open = day === 0 || day === 6 ? 9 : 8
    return h >= open && h < 20
  }

  const [isOpen, setIsOpen] = useState(compute)

  useEffect(() => {
    const tick = () => setIsOpen(compute())
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  return {
    isOpen,
    openLabel: isOpen ? 'DESCHIS ACUM · până la 20:00' : 'ÎNCHIS · deschidem în curând',
    openDotColor: isOpen ? '#3FB27F' : '#C0654A',
    openDotHalo: isOpen ? 'rgba(63,178,127,0.25)' : 'rgba(192,101,74,0.25)',
  }
}

export function useActiveSection(ids, offset = 76) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        let best = null
        for (const entry of entries) {
          if (entry.isIntersecting && (!best || entry.intersectionRatio > best.intersectionRatio)) {
            best = entry
          }
        }
        if (best) setActive(best.target.id)
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: [0, 0.1, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids, offset])

  return active
}

export function useReveal(dep) {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll('[data-reveal]'))
    const show = (el) => el.classList.add('is-visible')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach(show)
      return undefined
    }

    const observer = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target)
            observer.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    reveals.forEach((el) => observer.observe(el))
    const safety = setTimeout(() => {
      reveals.forEach((el) => {
        if (getComputedStyle(el).opacity === '0') show(el)
      })
    }, 3000)

    return () => {
      observer.disconnect()
      clearTimeout(safety)
    }
  }, [dep])
}
