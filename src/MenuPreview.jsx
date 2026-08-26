import { Link } from 'react-router-dom'
import { FEATURED } from './data'

export default function MenuPreview() {
  return (
    <section id="meniu" style={{ maxWidth: 1180, margin: '0 auto', padding: '80px 32px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
        <span style={{ color: '#C89452', fontSize: 22 }}>❦</span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#A9772F',
          }}
        >
          Caffè · Brunch · Sweets
        </span>
      </div>
      <h2
        data-reveal
        style={{
          fontFamily: "'Bitter', serif",
          fontWeight: 900,
          fontSize: 'clamp(34px,4.5vw,54px)',
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
        }}
      >
        Meniul nostru
      </h2>
      <p
        style={{
          fontFamily: "'Spectral', serif",
          fontSize: 'clamp(16px,1.3vw,18px)',
          lineHeight: 1.6,
          color: '#6B4A32',
          maxWidth: 520,
          margin: '0 0 36px',
        }}
      >
        Preparate proaspete, cafea de specialitate, panini și pancakes. Comanda și plata se fac la bar.
      </p>

      <div className="menu-preview-grid" data-reveal="28">
        {FEATURED.map((item) => (
          <Link key={item.name} to="/meniu" className="menu-preview-card">
            <img src={item.src} alt={item.name} />
            <div className="menu-preview-body">
              <div className="menu-preview-meta">
                {item.category ? <span className="menu-preview-cat">{item.category}</span> : null}
                {item.tag ? <span className="menu-preview-tag">{item.tag}</span> : null}
              </div>
              <div className="menu-preview-row">
                <h3>{item.name}</h3>
                <span className="menu-preview-price">{item.price}</span>
              </div>
              {item.desc ? <p>{item.desc}</p> : null}
            </div>
          </Link>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8, marginBottom: 20 }}>
        <Link to="/meniu" className="btn-solid">
          Vezi meniul complet
        </Link>
      </div>
    </section>
  )
}
