import { ArrowDown } from 'lucide-react'
import { Mark } from '@/components/brand/Mark'
import { manual, sections } from '@/content/manual'

const control = [
  ['Documento', manual.docNumber],
  ['Revisión', manual.revision],
  ['Estado', 'Operativo'],
  ['Idioma', 'ES-AR'],
  ['Secciones', String(sections.length).padStart(2, '0')],
]

export function Hero() {
  return (
    <section className="cover" id="inicio" aria-label="Portada">
      <div className="cover-top">
        <span className="kicker">Manual de usuario</span>
        <span className="cover-stamp" aria-hidden="true">
          En construcción
        </span>
      </div>

      <h1 className="cover-title">
        {manual.firstName}
        <br />
        <em>{manual.lastName}</em>
      </h1>

      <svg className="cover-dim" viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 12H400M0 4v16M400 4v16M200 4v16" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="cover-grid">
        <p className="cover-quote">{manual.heroQuote}</p>

        <dl className="cover-control" aria-label="Control del documento">
          {control.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>
                {k === 'Estado' && <span className="dot" />}
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="cover-actions">
        <a className="btn" href="#indice">
          Abrir el manual
          <ArrowDown size={14} aria-hidden="true" />
        </a>
        <Mark className="cover-mark" />
      </div>
    </section>
  )
}
