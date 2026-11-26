import type { Section as SectionData } from '@/content/manual'
import { sections } from '@/content/manual'
import { BlockView } from './Blocks'

export function Section({ section }: { section: SectionData }) {
  const titleId = `${section.id}-title`
  return (
    <section className="sec" id={section.id} aria-labelledby={titleId} data-section={section.number}>
      <header className="sec-head">
        <span className="sec-num" aria-hidden="true">
          {section.number}
        </span>
        <div className="sec-head-copy">
          <span className="kicker">
            Sección {section.number} <i>/</i> {String(sections.length).padStart(2, '0')}
          </span>
          <h2 id={titleId}>
            {section.heading[0]}
            <br />
            <em>{section.heading[1]}</em>
          </h2>
        </div>
        <p className="sec-sub">{section.subtitle}</p>
      </header>
      <div className="sec-body">
        {section.blocks.map((block, i) => (
          <BlockView key={`${block.type}-${i}`} block={block} section={section.number} />
        ))}
      </div>
    </section>
  )
}
