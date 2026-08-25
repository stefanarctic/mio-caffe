import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#2B1B12', color: '#F4E9D6', padding: '72px 32px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="footer-grid">
          <div>
            <div
              style={{
                fontFamily: "'Bitter', serif",
                fontWeight: 900,
                fontSize: 34,
                letterSpacing: '-0.03em',
              }}
            >
              mio<span style={{ color: '#C89452' }}>.</span>
            </div>
            <p
              style={{
                fontFamily: "'Spectral', serif",
                fontSize: 16,
                lineHeight: 1.6,
                color: 'rgba(244,233,214,0.72)',
                margin: '14px 0 0',
                maxWidth: 280,
              }}
            >
              Cafea de specialitate, brunch delicios și produse de patiserie proaspete, într-o atmosferă
              caldă și relaxantă.
            </p>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                letterSpacing: '0.2em',
                color: '#C89452',
                marginTop: 20,
              }}
            >
              CAFFÈ · BRUNCH · SWEETS
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#C89452',
                marginBottom: 20,
              }}
            >
              Navigare
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 13,
                fontFamily: "'Spectral', serif",
                fontSize: 16,
              }}
            >
              <Link to="/" className="footer-link">
                Acasă
              </Link>
              <Link to="/meniu" className="footer-link">
                Meniu
              </Link>
              <Link to="/#despre" className="footer-link">
                Despre noi
              </Link>
              <Link to="/#galerie" className="footer-link">
                Galerie
              </Link>
              <Link to="/#contact" className="footer-link">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#C89452',
                marginBottom: 20,
              }}
            >
              Program
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 13,
                fontFamily: "'Spectral', serif",
                fontSize: 16,
                color: 'rgba(244,233,214,0.82)',
              }}
            >
              <div>
                Luni – Vineri
                <br />
                <span style={{ color: 'rgba(244,233,214,0.55)', fontSize: 14 }}>08:00 – 20:00</span>
              </div>
              <div>
                Sâmbătă – Duminică
                <br />
                <span style={{ color: 'rgba(244,233,214,0.55)', fontSize: 14 }}>09:00 – 20:00</span>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#C89452',
                marginBottom: 20,
              }}
            >
              Contact
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 13,
                fontFamily: "'Spectral', serif",
                fontSize: 16,
                color: 'rgba(244,233,214,0.82)',
                lineHeight: 1.5,
              }}
            >
              <div>
                Strada Luceafărului
                <br />
                240065 Râmnicu Vâlcea
              </div>
              <a href="tel:0720897911" className="footer-link" style={{ color: '#F4E9D6' }}>
                0720 897 911
              </a>
              <a
                href="#"
                className="footer-link"
                style={{
                  color: '#C89452',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  letterSpacing: '0.15em',
                }}
              >
                @ INSTAGRAM →
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 MIO CAFFÈ · RÂMNICU VÂLCEA</span>
          <span>4,8 ★ · 38 RECENZII GOOGLE</span>
        </div>
      </div>
    </footer>
  )
}
