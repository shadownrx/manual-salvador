import { manual, sections } from '@/content/manual'

/** Tabla de contenidos con puntos guía, estilo índice impreso. */
export function Index() {
  return (
    <section className="sec sec-index" id="indice" aria-labelledby="indice-title" data-section="00">
      <header className="sec-head">
        <span className="sec-num" aria-hidden="true">
          00
        </span>
        <div className="sec-head-copy">
          <span className="kicker">Índice</span>
          <h2 id="indice-title">
            Tabla de
            <br />
            <em>contenidos</em>
          </h2>
        </div>
        <p className="sec-sub">{manual.indexTagline}</p>
      </header>
      <ol className="toc">
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`}>
              <span className="toc-num">{s.number}</span>
              <span className="toc-copy">
                <strong>{s.title}</strong>
                <small>{s.note}</small>
              </span>
              <span className="toc-leader" aria-hidden="true" />
              <span className="toc-page">p. {s.number}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}
