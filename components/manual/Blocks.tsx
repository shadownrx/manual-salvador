import { ArrowRight, ArrowUpRight, CircleCheck, Stamp, TriangleAlert } from 'lucide-react'
import type { Block } from '@/content/manual'
import { Icon } from './Icon'

/** Etiqueta en monoespaciada estilo "campo de formulario técnico". */
export function Label({ children, tone = 'accent', icon }: { children: React.ReactNode; tone?: 'accent' | 'blue' | 'ink'; icon?: React.ReactNode }) {
  return (
    <span className={`label label-${tone}`}>
      {icon}
      {children}
    </span>
  )
}

function Lines({ text }: { text: string }) {
  return <>{text}</>
}

export function BlockView({ block, section }: { block: Block; section: string }) {
  switch (block.type) {
    case 'prose':
      return (
        <div className={`prose-grid prose-cols-${block.columns ?? 1}`}>
          {block.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      )

    case 'pull':
      return (
        <figure className={`pull pull-${block.tone ?? 'ink'}`}>
          {block.label && <Label>{block.label}</Label>}
          <blockquote>
            <Lines text={block.text} />
          </blockquote>
        </figure>
      )

    case 'cards':
      return (
        <div className="cards-wrap">
          {block.label && <Label>{block.label}</Label>}
          <div className={`cards cards-${block.columns ?? 4}`}>
            {block.items.map((item, i) => (
              <article className={`card${item.wide ? ' card-wide' : ''}`} key={item.title}>
                <header className="card-head">
                  <span className="card-icon">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <span className="card-ref">
                    {item.tag ?? `${section}.${String(i + 1).padStart(2, '0')}`}
                  </span>
                </header>
                <h3>{item.title}</h3>
                {item.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {item.flow && (
                  <ol className="card-flow" aria-label={item.flow.join(', ')}>
                    {item.flow.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                )}
                {item.quote && <q className="card-quote">{item.quote}</q>}
              </article>
            ))}
          </div>
        </div>
      )

    case 'flow':
      return (
        <div className="flow-block">
          <Label>{block.label}</Label>
          <ol className="flow" aria-label={block.steps.join(', ')}>
            {block.steps.map((step, i) => (
              <li key={step}>
                <span className="flow-step">
                  <small>{String(i + 1).padStart(2, '0')}</small>
                  {step}
                </span>
                {i < block.steps.length - 1 && <ArrowRight size={14} aria-hidden="true" />}
              </li>
            ))}
          </ol>
          <p className="flow-note">{block.note}</p>
        </div>
      )

    case 'callouts':
      return (
        <div className="callouts">
          {block.items.map((item) => (
            <aside className={`callout callout-${item.tone}`} key={item.label}>
              <Label tone={item.tone} icon={item.tone === 'accent' ? <TriangleAlert size={12} /> : undefined}>
                {item.label}
              </Label>
              {item.title && <h3>{item.title}</h3>}
              {item.paragraphs.map((p) => (
                <p key={p}>
                  <Lines text={p} />
                </p>
              ))}
            </aside>
          ))}
        </div>
      )

    case 'chips':
      return (
        <div className="chips-group">
          <Label>{block.label}</Label>
          <ul className={`chips chips-${block.variant ?? 'pill'}`}>
            {block.items.map((item, i) => (
              <li key={item}>
                <small>{String(i + 1).padStart(2, '0')}</small>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )

    case 'list':
      return (
        <div className="terms">
          <Label tone="blue">{block.label}</Label>
          <p className="terms-intro">{block.intro}</p>
          <ol>
            {block.items.map((item, i) => (
              <li key={item}>
                <span className="terms-n">{`${i + 1}.`}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      )

    case 'protocol':
      return (
        <div className="protocol">
          <Label tone="blue">{block.label}</Label>
          <ul>
            {block.items.map((item) => (
              <li key={item}>
                <CircleCheck size={16} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )

    case 'counter':
      return (
        <div className="counter">
          <strong>
            {block.value}
            <span>{block.suffix}</span>
          </strong>
          <Label tone="ink">{block.label}</Label>
          <p>{block.note}</p>
        </div>
      )

    case 'reason-one':
      return (
        <aside className="reason-one">
          <Label>{block.label}</Label>
          <p className="reason-one-lead">{block.lead}</p>
          <p className="reason-one-lines">{block.lines}</p>
          <p className="reason-one-end">{block.end}</p>
        </aside>
      )

    case 'status':
      return (
        <dl className="status">
          {block.items.map((item) => (
            <div key={item.key}>
              <dt>{item.key}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      )

    case 'faq':
      return (
        <div className="faq">
          {block.items.map((item, i) => (
            <details key={item.q} open={i === 0} className={item.highlight ? 'faq-highlight' : undefined}>
              <summary>
                <span className="faq-n">{`${section}.${String(i + 1).padStart(2, '0')}`}</span>
                <span className="faq-q">{item.q}</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      )

    case 'note':
      return (
        <aside className="sys-note">
          <Label tone="ink" icon={<Stamp size={12} />}>
            {block.label}
          </Label>
          {block.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </aside>
      )

    case 'closing':
      return (
        <div className="closing">
          {block.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {block.final && <p className="closing-final">{block.final}</p>}
        </div>
      )

    case 'blank':
      return (
        <div className="blank-page" role="note">
          <p>Esta página se dejó intencionalmente en blanco.</p>
          <small>Contenido pendiente de revisión.</small>
        </div>
      )

    case 'complete':
      return (
        <aside className="complete">
          <div className="complete-head">
            <Label tone="ink">{block.label}</Label>
            <span className="complete-version">{block.version}</span>
          </div>
          <p className="complete-status">
            <span className="dot" />
            {block.status}
          </p>
          <p className="complete-quote">{block.quote}</p>
          <p className="complete-last">{block.last}</p>
          <a className="btn btn-ghost" href="#inicio">
            Volver al inicio
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <small>{block.copyright}</small>
        </aside>
      )
  }
}
