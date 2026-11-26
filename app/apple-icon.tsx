import { ImageResponse } from 'next/og'
import { MARK_PATHS } from '@/components/brand/Mark'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f4efe4',
        }}
      >
        <svg viewBox="0 0 64 64" width="180" height="180" fill="none">
          <path d={MARK_PATHS.frame} stroke="#1c1a17" strokeWidth="2" />
          <path d={MARK_PATHS.ticks} stroke="#1c1a17" strokeWidth="2" strokeLinecap="square" />
          <path d={MARK_PATHS.s} stroke="#1c1a17" strokeWidth="4" strokeLinecap="square" />
          <path d={MARK_PATHS.j} stroke="#c8401a" strokeWidth="4" strokeLinecap="square" />
          <path d={MARK_PATHS.serif} stroke="#c8401a" strokeWidth="4" strokeLinecap="square" />
        </svg>
      </div>
    ),
    size,
  )
}
