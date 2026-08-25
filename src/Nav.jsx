import { useState } from 'react'
import { NAV_LINKS } from './data'

export default function Nav({ active, onNavigate }) {
  const [open, setOpen] = useState(false)
  const navOn = '#F4E9D6'
  const navOff = 'rgba(244,233,214,0.7)'

  const go = (id) => {
    setOpen(false)
    onNavigate?.(id)
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#acasa" className="logo" onClick={() => go('acasa')}>
          mio<span>.</span>
        </a>
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
            <a
              key={link.id}
              href={`#${link.id}`}
              className="nav-link"
              style={{ color: active === link.id ? navOn : navOff }}
              onClick={() => go(link.id)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => go('contact')}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
