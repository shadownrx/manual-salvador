import { Radio } from 'lucide-react'
import { Mark } from '@/components/brand/Mark'
import { manual } from '@/content/manual'

export function Footer() {
  return (
    <>
      <aside className="ready" aria-label="Nota del sistema">
        <Radio size={20} aria-hidden="true" />
        <p>
          {manual.readyNote}
          <br />
          <span>{manual.readyNoteSub}</span>
        </p>
      </aside>
      <footer className="foot">
        <span className="foot-brand">
          <Mark className="foot-mark" />
          {manual.docNumber} / S. Juárez
        </span>
        <span>{manual.footerLine}</span>
        <span>Fin del documento — Rev. {manual.revision}</span>
      </footer>
    </>
  )
}
