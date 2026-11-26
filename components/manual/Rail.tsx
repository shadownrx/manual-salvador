'use client'

import { sections } from '@/content/manual'
import { useActiveSection } from './use-active-section'

/** Índice lateral fijo (solo escritorio). Marca la sección visible. */
export function Rail() {
  const active = useActiveSection()
  return (
    <nav className="rail" aria-label="Índice del manual">
      <a href="#indice" className={`rail-item${active === '00' ? ' is-active' : ''}`} aria-current={active === '00' ? 'true' : undefined}>
        <span>00</span>
        <small>Índice</small>
      </a>
      {sections.map((s) => {
        const isActive = active === s.number
        return (
          <a key={s.id} href={`#${s.id}`} className={`rail-item${isActive ? ' is-active' : ''}`} aria-current={isActive ? 'true' : undefined}>
            <span>{s.number}</span>
            <small>{s.title}</small>
          </a>
        )
      })}
    </nav>
  )
}
