import { ImageResponse } from 'next/og'
import { MARK_PATHS } from '@/components/brand/Mark'
import { manual, sections } from '@/content/manual'

export const alt = `Manual de Usuario — ${manual.name}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const PAPER = '#f4efe4'
const INK = '#1c1a17'
const INK_2 = '#5a544b'
const RULE = '#c9c0ad'
const ACCENT = '#c8401a'

/** Baja una fuente de Google Fonts para satori. Si falla, se usa la fuente por defecto. */
async function loadFont(family: string, text: string, italic = false) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${family}${italic ? ':ital@1' : ''}&text=${encodeURIComponent(text)}`,
      // Un User-Agent viejo hace que Google Fonts sirva TTF (satori no lee woff2).
      { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:30.0) Gecko/20100101 Firefox/30.0' } },
    ).then((r) => r.text())
    const url = css.match(/src: url\((.+?)\) format\('(?:woff|truetype|opentype)'\)/)?.[1]
    if (!url) return null
    return await fetch(url).then((r) => r.arrayBuffer())
  } catch {
    return null
  }
}

export default async function OpenGraphImage() {
  const titleText = `${manual.firstName}${manual.lastName}`
  const monoText = 'MANUALDEUSARIO·DOC.REVSECCIONES0123456789/—ESAR' + sections.map((s) => s.title).join('')

  const [serif, serifItalic, mono] = await Promise.all([
    loadFont('Fraunces', titleText),
    loadFont('Fraunces', titleText, true),
    loadFont('IBM+Plex+Mono', monoText + manual.heroQuote),
  ])

  const fonts = [
    serif && { name: 'Fraunces', data: serif, style: 'normal' as const, weight: 400 as const },
    serifItalic && { name: 'Fraunces', data: serifItalic, style: 'italic' as const, weight: 400 as const },
    mono && { name: 'Plex', data: mono, style: 'normal' as const, weight: 400 as const },
  ].filter((f): f is NonNullable<typeof f> => Boolean(f))

  const serifFamily = serif ? 'Fraunces' : 'serif'
  const monoFamily = mono ? 'Plex' : 'monospace'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: PAPER,
          color: INK,
          padding: '56px 64px',
          fontFamily: monoFamily,
          position: 'relative',
        }}
      >
        {/* Marco con marcas de registro */}
        <div style={{ position: 'absolute', inset: 24, border: `2px solid ${INK}`, display: 'flex' }} />
        <div style={{ position: 'absolute', left: 24, top: 8, width: 2, height: 32, background: INK }} />
        <div style={{ position: 'absolute', left: 8, top: 24, width: 32, height: 2, background: INK }} />
        <div style={{ position: 'absolute', right: 24, bottom: 8, width: 2, height: 32, background: INK }} />
        <div style={{ position: 'absolute', right: 8, bottom: 24, width: 32, height: 2, background: INK }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 20, letterSpacing: 3, color: INK_2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
              <path d={MARK_PATHS.frame} stroke={INK} strokeWidth="2" />
              <path d={MARK_PATHS.ticks} stroke={INK} strokeWidth="2" strokeLinecap="square" />
              <path d={MARK_PATHS.s} stroke={INK} strokeWidth="4" strokeLinecap="square" />
              <path d={MARK_PATHS.j} stroke={ACCENT} strokeWidth="4" strokeLinecap="square" />
              <path d={MARK_PATHS.serif} stroke={ACCENT} strokeWidth="4" strokeLinecap="square" />
            </svg>
            <span>MANUAL DE USUARIO</span>
          </div>
          <span>
            DOC. {manual.docNumber} · REV. {manual.revision}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 48, paddingLeft: 12, fontFamily: serifFamily, lineHeight: 0.92 }}>
          <span style={{ fontSize: 150, letterSpacing: -6 }}>{manual.firstName}</span>
          <span style={{ fontSize: 150, letterSpacing: -6, fontStyle: 'italic', color: ACCENT }}>{manual.lastName}</span>
        </div>

        <div style={{ display: 'flex', marginTop: 'auto', borderTop: `2px solid ${RULE}`, paddingTop: 20, justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <span style={{ fontSize: 24, color: INK_2, maxWidth: 700 }}>{manual.heroQuote}</span>
          <span style={{ fontSize: 18, letterSpacing: 3, color: INK_2 }}>{String(sections.length).padStart(2, '0')} SECCIONES / ES-AR</span>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length > 0 ? fonts : undefined },
  )
}
