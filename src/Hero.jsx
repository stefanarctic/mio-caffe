import { Link } from 'react-router-dom'
import ouaTurcesti from './assets/oua-turcesti.jpg'
import pancakes from './assets/pancakes.jpg'

export default function Hero({ openLabel, openDotColor, openDotHalo }) {
  return (
    <section id="acasa">
      <header
        className="hero-header"
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '112px 32px 88px',
          minHeight: 'calc(100vh - 72px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))',
          gap: 52,
          alignItems: 'center',
        }}
      >
        <div style={{ animation: 'revUp .9s cubic-bezier(.2,.7,.2,1) both' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(44,107,102,0.12)',
              border: '1px solid rgba(44,107,102,0.3)',
              borderRadius: 999,
              padding: '7px 16px',
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: '50%',
                background: openDotColor,
                boxShadow: `0 0 0 3px ${openDotHalo}`,
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                letterSpacing: '0.16em',
                color: '#2B1B12',
              }}
            >
              {openLabel}
            </span>
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#A9772F',
              marginBottom: 20,
            }}
          >
            Râmnicu Vâlcea
          </div>
          <h1
            style={{
              fontFamily: "'Bitter', serif",
              fontWeight: 900,
              fontSize: 'clamp(48px,6.5vw,88px)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              margin: '0 0 24px',
            }}
          >
            Cafea bună.
            <br />
            Brunch pe
            <br />
            cinste.<span style={{ color: '#C89452' }}>.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(17px,1.4vw,20px)',
              lineHeight: 1.6,
              color: '#4A3121',
              margin: '0 0 34px',
              maxWidth: 460,
            }}
          >
            Cafea de specialitate, brunch delicios și produse de patiserie proaspete, într-o atmosferă
            caldă și relaxantă — chiar lângă râul Olănești.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link to="/meniu" className="btn-solid">
              Vezi meniul
            </Link>
            <Link to="/#contact" className="btn-outline">
              Găsește-ne
            </Link>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            height: 'clamp(380px,44vw,540px)',
            animation: 'revScale 1s cubic-bezier(.2,.7,.2,1) .15s both',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '74%',
              height: '78%',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 24px 50px -18px rgba(43,27,18,0.45)',
            }}
          >
            <img
              src={ouaTurcesti}
              alt="Ouă turcești"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '52%',
              height: '52%',
              borderRadius: 20,
              overflow: 'hidden',
              border: '6px solid #F4E9D6',
              boxShadow: '0 20px 40px -16px rgba(43,27,18,0.4)',
            }}
          >
            <img
              src={pancakes}
              alt="Pancakes"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              top: '8%',
              left: '2%',
              width: 112,
              height: 112,
              borderRadius: '50%',
              background: '#C89452',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              transform: 'rotate(-8deg)',
              boxShadow: '0 12px 26px -8px rgba(43,27,18,0.5)',
            }}
          >
            <span
              style={{
                fontFamily: "'Bitter', serif",
                fontWeight: 900,
                fontSize: 28,
                color: '#2B1B12',
                lineHeight: 1,
              }}
            >
              4,8
            </span>
            <span style={{ fontFamily: "'Bitter', serif", fontSize: 14, color: '#2B1B12' }}>★★★★★</span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 8,
                letterSpacing: '0.14em',
                color: '#4A3121',
                marginTop: 3,
              }}
            >
              38 RECENZII
            </span>
          </div>
        </div>
      </header>
    </section>
  )
}
