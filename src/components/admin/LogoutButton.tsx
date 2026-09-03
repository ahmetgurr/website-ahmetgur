'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@payloadcms/ui'

export function LogoutButton() {
  const router = useRouter()
  const { logOut } = useAuth()

  async function handleLogout() {
    if (!window.confirm('Sistemden çıkış yapmak istediğinize emin misiniz?')) {
      return
    }
    await logOut()
    router.push('/admin/login')
  }

  return (
    <button
      type="button"
      className="admin-logout-btn"
      onClick={handleLogout}
      style={{
        display: 'block',
        width: '100%',
        fontFamily: "'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.05em',
        color: '#ff3b3b',
        background: 'transparent',
        border: '1px solid #ff3b3b',
        borderRadius: 0,
        padding: '10px 14px',
        margin: '20px 0',
        cursor: 'pointer',
        textAlign: 'center',
      }}
    >
      [ SİSTEMDEN ÇIK ]
    </button>
  )
}
