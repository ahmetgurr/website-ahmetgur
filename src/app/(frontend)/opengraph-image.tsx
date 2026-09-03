import { ImageResponse } from 'next/og'

// Node.js runtime'da next/og'un ImageResponse'u PNG encode için sharp'a
// düşüyor; bu makinede sharp'ın Windows native binary'si yüklenemiyor
// (ERR_DLOPEN_FAILED, sunucuyu çökertiyordu). Edge runtime, sharp yerine
// WASM tabanlı bir render pipeline'ı kullanıyor — sorunu tamamen atlıyor.
export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000000',
          fontFamily: 'monospace',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: '4px',
            color: '#00ff41',
            textShadow: '0 0 30px rgba(0, 255, 65, 0.8), 0 0 70px rgba(0, 255, 65, 0.4)',
          }}
        >
          AHMET GÜR
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 34,
            color: '#c9d1d9',
            letterSpacing: '2px',
          }}
        >
          [ Bilgi Sistemleri &amp; Siber Güvenlik ]
        </div>
      </div>
    ),
    { ...size },
  )
}
