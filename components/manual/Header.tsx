'use client'

import { Mark } from '@/components/brand/Mark'
import { manual, sections } from '@/content/manual'
import { useActiveSection } from './use-active-section'

export function Header() {
  const active = useActiveSection()
  const current = active === null ? 'Portada' : active === '00' ? 'Índice' : (sections.find((s) => s.number === active)?.title ?? '')

  return (
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Volver al inicio">
        <Mark className="brand-mark" />
        <span className="brand-text">
          <strong>Manual de usuario</strong>
          <small>
            Doc. {manual.docNumber} · Rev. {manual.revision}
          </small>
        </span>
      </a>
      <div className="topbar-status" aria-live="polite">
        <span className="topbar-sec">{active ?? '—'}</span>
        <span className="topbar-current">{current}</span>
      </div>
    </header>
  )
}
