import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from './data'

export default function Nav({ active }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const navOn = '#F4E9D6'
  const navOff = 'rgba(244,233,214,0.7)'

  const close = (to) => {
    setOpen(false)
    if (to && pathname === to.split('#')[0] && !to.includes('#')) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo" onClick={() => close('/')}>
          mio<span>.</span>
        </Link>
        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links${open ? ' open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="nav-link"
              style={{ color: active === link.id ? navOn : navOff }}
              onClick={() => close(link.to)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/#contact" className="nav-cta" onClick={() => close('/#contact')}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
