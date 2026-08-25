const PILLARS = [
  {
    n: '01',
    icon: '☕',
    title: 'Caffè',
    text: 'Cafea de specialitate preparată impecabil — arome echilibrate, gust autentic, de la espresso la matcha.',
  },
  {
    n: '02',
    icon: '🍳',
    title: 'Brunch',
    text: 'Ouă turcești, avocado toast, focaccia proaspătă — preparate estetice și extrem de savuroase.',
  },
  {
    n: '03',
    icon: '🍰',
    title: 'Sweets',
    text: 'Pancakes pufoși și deserturi proaspete — o stare de bine servită într-o farfurie.',
  },
]

export default function Pillars() {
  return (
    <section style={{ position: 'relative', background: '#2B1B12', color: '#F4E9D6', marginTop: 32, overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: -90,
          right: -70,
          width: 340,
          height: 340,
          borderRadius: '50%',
          border: '1px solid rgba(200,148,82,0.16)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: -40,
          right: -20,
          width: 240,
          height: 240,
          borderRadius: '50%',
          border: '1px solid rgba(200,148,82,0.1)',
        }}
      />
      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '76px 32px 84px' }}>
        <div data-reveal style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
          <span style={{ height: 1, width: 44, background: '#C89452' }} />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#C89452',
            }}
          >
            Ce facem cel mai bine
          </span>
        </div>
        <div className="pillar-grid">
          {PILLARS.map((p) => (
            <div key={p.n} className="pillar" data-reveal="36">
              <div
                style={{
                  fontFamily: "'Bitter', serif",
                  fontWeight: 900,
                  fontSize: 15,
                  letterSpacing: '0.2em',
                  color: 'rgba(200,148,82,0.55)',
                  marginBottom: 22,
                }}
              >
                {p.n}
              </div>
              <div
                style={{
                  width: 62,
                  height: 62,
                  borderRadius: '50%',
                  background: 'rgba(200,148,82,0.12)',
                  border: '1px solid rgba(200,148,82,0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  marginBottom: 22,
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Bitter', serif",
                  fontWeight: 800,
                  fontSize: 27,
                  margin: '0 0 12px',
                  letterSpacing: '0.01em',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Spectral', serif",
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: 'rgba(244,233,214,0.72)',
                  margin: 0,
                  maxWidth: 280,
                }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
