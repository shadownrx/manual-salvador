'use client'

import { useEffect, useState } from 'react'

/**
 * Devuelve el número ('00'..'08') de la sección visible, observando
 * todos los `[data-section]` de la página. '00' es el índice; null es el inicio.
 */
export function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'))
    if (targets.length === 0) return

    const visible = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const key = (entry.target as HTMLElement).dataset.section ?? ''
          if (entry.isIntersecting) visible.set(key, entry.boundingClientRect.top)
          else visible.delete(key)
        }
        if (visible.size === 0) {
          if (window.scrollY < 80) setActive(null)
          return
        }
        // La sección cuyo borde superior está más arriba (pero visible) manda.
        const [top] = Array.from(visible.entries()).sort((a, b) => a[1] - b[1])
        setActive(top[0])
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )

    for (const target of targets) observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return active
}
