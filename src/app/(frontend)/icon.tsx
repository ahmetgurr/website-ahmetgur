import { ImageResponse } from 'next/og'

// Node.js runtime'da next/og'un ImageResponse'u PNG encode için sharp'a
// düşüyor; bu makinede sharp'ın Windows native binary'si yüklenemiyor
// (ERR_DLOPEN_FAILED, sunucuyu çökertiyordu). Edge runtime, sharp yerine
// WASM tabanlı bir render pipeline'ı kullanıyor — sorunu tamamen atlıyor.
export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0d1117',
          color: '#00ff41',
          fontFamily: 'monospace',
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '-0.5px',
        }}
      >
        AG
      </div>
    ),
    { ...size },
  )
}
