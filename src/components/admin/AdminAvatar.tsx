'use client'

import { useAuth } from '@payloadcms/ui'
import type { User } from '@/payload-types'

export function AdminAvatar() {
  const { user } = useAuth<User>()
  const photo = user && typeof user.profilePhoto === 'object' ? user.profilePhoto : null
  const initial = (user?.email ?? '?').charAt(0).toUpperCase()

  return (
    <div
      style={{
        width: 25,
        height: 25,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '1px solid #00ff41',
        boxShadow: '0 0 6px rgba(0, 255, 65, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        color: '#00ff41',
        fontFamily: "'Roboto Mono', ui-monospace, monospace",
        fontSize: 12,
        fontWeight: 700,
        flexShrink: 0,
      }}
    >
      {photo?.url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo.url}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        initial
      )}
    </div>
  )
}
