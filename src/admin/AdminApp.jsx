import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from '@firebase/auth'
import { isFirebaseConfigured, auth } from '../firebase'
import { isImageKitConfigured } from './imagekit'
import { isAllowedAdmin } from './access'
import AdminDashboard from './AdminDashboard'
import AdminLogin from './AdminLogin'
import './admin.css'

export default function AdminApp() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    document.title = 'Admin · Mio Caffè'
    let robots = document.querySelector('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.setAttribute('name', 'robots')
      document.head.appendChild(robots)
    }
    robots.setAttribute('content', 'noindex, nofollow')
  }, [])

  useEffect(() => {
    if (!isFirebaseConfigured || !auth) {
      setUser(null)
      return undefined
    }
    return onAuthStateChanged(auth, (next) => {
      if (next && !isAllowedAdmin(next.email)) {
        signOut(auth)
        setUser(null)
        return
      }
      setUser(next)
    })
  }, [])

  if (!isFirebaseConfigured || !isImageKitConfigured) {
    return (
      <div className="admin-login">
        <div className="admin-login-card">
          <div className="admin-kicker">Mio Caffè</div>
          <h1>Configurare incompletă</h1>
          <p>
            Adaugă cheile Firebase și ImageKit în <code>.env.local</code>, apoi repornește aplicația.
            Cheia privată ImageKit rămâne doar pe server, în <code>IMAGEKIT_PRIVATE_KEY</code>.
          </p>
        </div>
      </div>
    )
  }

  if (user === undefined) {
    return (
      <div className="admin-login">
        <div className="admin-login-card">
          <div className="admin-kicker">Mio Caffè</div>
          <h1>Admin</h1>
          <p>Se verifică sesiunea…</p>
        </div>
      </div>
    )
  }

  if (!user) return <AdminLogin />

  return <AdminDashboard user={user} onSignOut={() => signOut(auth)} />
}
