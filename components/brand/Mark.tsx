import type { SVGProps } from 'react'

/**
 * Monograma SJ. Marco con marcas de registro (como una lámina técnica),
 * la S en tinta y la J en naranja internacional.
 *
 * Es la misma geometría que app/icon.svg y public/icon.svg; si cambia acá,
 * regenerar esos archivos con `node scripts/build-icons.mjs`.
 */
export const MARK_PATHS = {
  frame: 'M8 8h48v48H8z',
  ticks: 'M8 2v6M2 8h6M56 2v6M62 8h-6M8 62v-6M2 56h6M56 62v-6M62 56h-6',
  s: 'M28 23a6 6 0 1 0-6 6a6 6 0 1 1-6 6',
  j: 'M44 19v22a6 6 0 0 1-10.24 4.24',
  serif: 'M39 19h10',
}

type Props = SVGProps<SVGSVGElement> & { accent?: string }

export function Mark({ accent = 'var(--accent)', ...props }: Props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path d={MARK_PATHS.frame} stroke="currentColor" strokeWidth="2" />
      <path d={MARK_PATHS.ticks} stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      <path d={MARK_PATHS.s} stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
      <path d={MARK_PATHS.j} stroke={accent} strokeWidth="4" strokeLinecap="square" />
      <path d={MARK_PATHS.serif} stroke={accent} strokeWidth="4" strokeLinecap="square" />
    </svg>
  )
}
