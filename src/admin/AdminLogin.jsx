import { useState } from 'react'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from '@firebase/auth'
import { auth } from '../firebase'
import { isAllowedAdmin } from './access'

const MESSAGES = {
  'auth/invalid-credential': 'Email sau parolă greșită.',
  'auth/invalid-email': 'Adresa de email nu este validă.',
  'auth/too-many-requests': 'Prea multe încercări. Încearcă din nou în câteva minute.',
  'auth/user-disabled': 'Contul este dezactivat.',
  'auth/user-not-found': 'Nu există un cont cu acest email.',
  'auth/wrong-password': 'Email sau parolă greșită.',
  'auth/popup-closed-by-user': 'Fereastra Google a fost închisă.',
  'auth/cancelled-popup-request': 'Autentificarea Google a fost anulată.',
  'auth/unauthorized-domain': 'Domeniul nu este autorizat în Firebase Authentication.',
}

async function ensureAdmin(user) {
  if (isAllowedAdmin(user?.email)) return user
  await signOut(auth)
  throw Object.assign(new Error('Contul nu are acces de admin.'), { code: 'admin/not-allowed' })
}

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const fail = (err) => {
    if (err?.code === 'admin/not-allowed') {
      setError('Contul nu are acces de admin.')
      return
    }
    setError(MESSAGES[err?.code] || 'Nu am putut conecta contul.')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), password)
      await ensureAdmin(cred.user)
    } catch (err) {
      fail(err)
    } finally {
      setBusy(false)
    }
  }

  const onGoogle = async () => {
    setError('')
    setBusy(true)
    try {
      const cred = await signInWithPopup(auth, new GoogleAuthProvider())
      await ensureAdmin(cred.user)
    } catch (err) {
      fail(err)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="admin-login">
      <form className="admin-login-card" onSubmit={onSubmit}>
        <div className="admin-kicker">Mio Caffè</div>
        <h1>Admin</h1>
        <p>Autentifică-te ca să editezi pozele de pe site și de la meniu.</p>
        <button type="button" className="admin-btn admin-btn-google" onClick={onGoogle} disabled={busy}>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" />
            <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.33A9 9 0 0 0 9 18z" />
            <path fill="#FBBC05" d="M3.97 10.71A5.41 5.41 0 0 1 3.69 9c0-.59.1-1.17.28-1.71V4.96H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.04l3.01-2.33z" />
            <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.96L3.97 7.29C4.68 5.16 6.66 3.58 9 3.58z" />
          </svg>
          Continuă cu Google
        </button>
        <div className="admin-or">sau cu email</div>
        <label>
          Email
          <input
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Parolă
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error ? <p className="admin-error">{error}</p> : null}
        <button type="submit" className="admin-btn admin-btn-solid" disabled={busy}>
          {busy ? 'Se conectează…' : 'Intră în dashboard'}
        </button>
      </form>
    </div>
  )
}
