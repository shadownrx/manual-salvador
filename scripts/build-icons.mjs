// Genera app/icon.svg y public/icon.svg a partir de la geometría del monograma.
// Uso: node scripts/build-icons.mjs
import { writeFileSync } from 'node:fs'

const paths = {
  frame: 'M8 8h48v48H8z',
  ticks: 'M8 2v6M2 8h6M56 2v6M62 8h-6M8 62v-6M2 56h6M56 62v-6M62 56h-6',
  s: 'M28 23a6 6 0 1 0-6 6a6 6 0 1 1-6 6',
  j: 'M44 19v22a6 6 0 0 1-10.24 4.24',
  serif: 'M39 19h10',
}

const paper = '#f4efe4'
const ink = '#1c1a17'
const accent = '#c8401a'

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="8" fill="${paper}"/>
  <path d="${paths.frame}" fill="none" stroke="${ink}" stroke-width="2"/>
  <path d="${paths.ticks}" stroke="${ink}" stroke-width="2" stroke-linecap="square"/>
  <path d="${paths.s}" fill="none" stroke="${ink}" stroke-width="4" stroke-linecap="square"/>
  <path d="${paths.j}" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="square"/>
  <path d="${paths.serif}" stroke="${accent}" stroke-width="4" stroke-linecap="square"/>
</svg>
`

for (const file of ['app/icon.svg', 'public/icon.svg']) {
  writeFileSync(new URL(`../${file}`, import.meta.url), svg)
  console.log('wrote', file)
}
