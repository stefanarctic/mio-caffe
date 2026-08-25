import { REVIEWS } from './data'

export default function Reviews() {
  return (
    <section style={{ maxWidth: 1180, margin: '0 auto', padding: '80px 32px 20px' }}>
      <div data-reveal="28" style={{ textAlign: 'center', marginBottom: 48 }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#A9772F',
            marginBottom: 14,
          }}
        >
          Ce spun oaspeții
        </div>
        <h2
          style={{
            fontFamily: "'Bitter', serif",
            fontWeight: 900,
            fontSize: 'clamp(32px,4vw,48px)',
            letterSpacing: '-0.02em',
            margin: '0 0 10px',
          }}
        >
          4,8 din 5 — pe bune.
        </h2>
        <div style={{ fontFamily: "'Spectral', serif", fontSize: 17, color: '#6B4A32' }}>
          38 de recenzii pe Google · <span style={{ color: '#C89452' }}>★★★★★</span>
        </div>
      </div>
      <div style={{ columns: '3 300px', columnGap: 24 }}>
        {REVIEWS.map((rev) => (
          <div
            key={rev.name}
            data-reveal="26"
            style={{
              breakInside: 'avoid',
              background: '#FBF4E8',
              border: '1px solid rgba(43,27,18,0.08)',
              borderRadius: 14,
              padding: '24px 26px',
              marginBottom: 24,
            }}
          >
            <div style={{ color: '#C89452', fontSize: 15, letterSpacing: 2, marginBottom: 12 }}>★★★★★</div>
            <p
              style={{
                fontFamily: "'Spectral', serif",
                fontSize: 16,
                lineHeight: 1.6,
                color: '#3A2517',
                margin: '0 0 16px',
              }}
            >
              &ldquo;{rev.text}&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  background: '#C89452',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Bitter', serif",
                  fontWeight: 800,
                  fontSize: 15,
                  color: '#2B1B12',
                }}
              >
                {rev.initial}
              </span>
              <div>
                <div style={{ fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 14 }}>{rev.name}</div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    color: '#6B4A32',
                  }}
                >
                  GOOGLE · ACUM O LUNĂ
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
