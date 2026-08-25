const STATS = [
  { value: '4,8', label: 'Rating Google' },
  { value: '38+', label: 'Recenzii' },
  { value: '100%', label: 'Făcut în casă' },
  { value: '7', label: 'Zile / săptămână' },
]

export default function About() {
  return (
    <section id="despre" style={{ background: '#EADBC4', marginTop: 60 }}>
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          padding: 'clamp(60px,8vw,100px) 32px 40px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#A9772F',
            marginBottom: 22,
          }}
        >
          Povestea noastră
        </div>
        <h2
          data-reveal
          style={{
            fontFamily: "'Bitter', serif",
            fontWeight: 900,
            fontSize: 'clamp(36px,5vw,64px)',
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            margin: '0 0 28px',
          }}
        >
          Un loc drag sufletului, lângă râu.
        </h2>
        <p
          style={{
            fontFamily: "'Spectral', serif",
            fontSize: 'clamp(18px,1.6vw,22px)',
            lineHeight: 1.65,
            color: '#4A3121',
            margin: '0 auto',
            maxWidth: 640,
          }}
        >
          Mio Caffè s-a deschis în zona Cina din Râmnicu Vâlcea cu o idee simplă: cafea de specialitate
          făcută cu grijă și un brunch care merită drumul.
        </p>
      </div>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 32px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 56,
          alignItems: 'start',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
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
              Cafeaua
            </span>
          </div>
          <h3
            style={{
              fontFamily: "'Bitter', serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,3.2vw,38px)',
              letterSpacing: '-0.02em',
              margin: '0 0 18px',
              lineHeight: 1.1,
            }}
          >
            Specialitate, preparată impecabil
          </h3>
          <p
            style={{
              fontFamily: "'Spectral', serif",
              fontSize: 17,
              lineHeight: 1.7,
              color: '#4A3121',
              margin: 0,
            }}
          >
            Lucrăm cu cafea de specialitate și o preparăm cu arome echilibrate și gust autentic — de la
            espresso la matcha. Fiecare ceașcă e făcută de un barist care ține la ce iese din pahar.
          </p>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
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
              Bucătăria
            </span>
          </div>
          <h3
            style={{
              fontFamily: "'Bitter', serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,3.2vw,38px)',
              letterSpacing: '-0.02em',
              margin: '0 0 18px',
              lineHeight: 1.1,
            }}
          >
            Proaspăt, estetic, savuros
          </h3>
          <p
            style={{
              fontFamily: "'Spectral', serif",
              fontSize: 17,
              lineHeight: 1.7,
              color: '#4A3121',
              margin: 0,
            }}
          >
            Micul dejun e proaspăt și frumos aranjat — aspectul farfuriilor este impecabil. De la ouăle
            turcești la focaccia făcută în casă, totul e gândit să fie bun de privit și de mâncat.
          </p>
        </div>
      </div>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '20px 32px 90px' }}>
        <div
          data-reveal="scale"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
            gap: 32,
            textAlign: 'center',
            background: '#2B1B12',
            color: '#F4E9D6',
            borderRadius: 20,
            padding: '56px 40px',
          }}
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "'Bitter', serif",
                  fontWeight: 900,
                  fontSize: 'clamp(36px,4.5vw,54px)',
                  color: '#C89452',
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(244,233,214,0.7)',
                  marginTop: 12,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
