import { useSiteContent } from './content'

export default function Gallery({ onOpen }) {
  const { photos } = useSiteContent()
  return (
    <section id="galerie" style={{ maxWidth: 1180, margin: '0 auto', padding: '70px 32px 40px' }}>
      <div
        data-reveal="28"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 12,
          marginBottom: 28,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#A9772F',
              marginBottom: 12,
            }}
          >
            Din farfurie și din cană
          </div>
          <h2
            style={{
              fontFamily: "'Bitter', serif",
              fontWeight: 900,
              fontSize: 'clamp(32px,4vw,52px)',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Galerie
          </h2>
        </div>
        <span style={{ fontFamily: "'Spectral', serif", fontSize: 16, color: '#6B4A32', maxWidth: 320 }}>
          Apasă pe orice imagine pentru a o vedea mai mare.
        </span>
      </div>
      <div style={{ columns: '3 280px', columnGap: 18 }}>
        {photos.map((p, i) => (
          <div key={p.id || p.caption} className="gallery-card" data-reveal="scale" onClick={() => onOpen(i)}>
            <img src={p.src} alt={p.caption} />
            <div className="gallery-shade" />
            <div className="gallery-caption">{p.caption}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
