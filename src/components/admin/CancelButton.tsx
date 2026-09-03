'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useFormModified } from '@payloadcms/ui'

/**
 * URL'i bir üst hiyerarşi seviyesine kırpar:
 * /admin/collections/{slug}/{id|create} -> /admin/collections/{slug}
 * /admin/globals/{slug}                 -> /admin (globals'ın liste görünümü yok)
 * diğer her şey                         -> /admin
 */
function getParentPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean)
  if (segments[0] === 'admin' && segments[1] === 'collections' && segments.length >= 4) {
    return `/admin/collections/${segments[2]}`
  }
  return '/admin'
}

export function CancelButton() {
  const router = useRouter()
  const pathname = usePathname()
  const modified = useFormModified()

  function goBack() {
    router.push(getParentPath(pathname))
  }

  function handleCancel() {
    if (!modified) {
      goBack()
      return
    }
    if (window.confirm('Kaydedilmemiş değişiklikleriniz var. Çıkmak istediğinize emin misiniz?')) {
      goBack()
    }
  }

  return (
    <button
      type="button"
      className="admin-cancel-btn"
      onClick={handleCancel}
      style={{
        fontFamily: "'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.05em',
        color: '#00ff41',
        background: 'transparent',
        border: '1px solid #00ff41',
        borderRadius: 0,
        padding: '8px 14px',
        cursor: 'pointer',
      }}
    >
      &lt; Geri Dön
    </button>
  )
}
