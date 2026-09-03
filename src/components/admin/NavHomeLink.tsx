import Link from 'next/link'

export function NavHomeLink() {
  return (
    <Link
      href="/admin"
      style={{
        display: 'block',
        fontFamily: "'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
        fontWeight: 800,
        fontSize: 26,
        letterSpacing: '0.1em',
        color: '#00ff41',
        textShadow: '0 0 6px #00ff41, 0 0 14px rgba(0, 255, 65, 0.6)',
        padding: '20px 20px 16px',
        marginTop: -8,
        marginBottom: 12,
        borderBottom: '1px solid rgba(0, 255, 65, 0.25)',
      }}
    >
      [ ADMIN ]
    </Link>
  )
}
