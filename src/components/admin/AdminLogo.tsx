import React from 'react'

const baseStyle: React.CSSProperties = {
  fontFamily: "'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  color: '#00ff41',
  letterSpacing: '0.08em',
  textShadow: '0 0 5px #00ff41, 0 0 10px rgba(0, 255, 65, 0.5)',
  whiteSpace: 'nowrap',
}

export function AdminLogo() {
  return <span style={{ ...baseStyle, fontSize: '20px', fontWeight: 700 }}>[ ADMIN ]</span>
}

export function AdminIcon() {
  return <span style={{ ...baseStyle, fontSize: '20px', fontWeight: 800 }}>[ ADMIN ]</span>
}
