import { HOURS } from './data'

export default function Contact({ openLabel, openDotColor, openDotHalo }) {
  const today = new Date().getDay()

  return (
    <section id="contact" style={{ maxWidth: 1180, margin: '0 auto', padding: '70px 32px 40px' }}>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: '#A9772F',
          marginBottom: 18,
        }}
      >
        Te așteptăm
      </div>
      <h2
        data-reveal
        style={{
          fontFamily: "'Bitter', serif",
          fontWeight: 900,
          fontSize: 'clamp(38px,5vw,68px)',
          lineHeight: 1,
          letterSpacing: '-0.03em',
          margin: '0 0 16px',
        }}
      >
        Vizitează-ne
      </h2>
      <p
        style={{
          fontFamily: "'Spectral', serif",
          fontSize: 'clamp(17px,1.4vw,20px)',
          lineHeight: 1.6,
          color: '#4A3121',
          maxWidth: 540,
          margin: '0 0 40px',
        }}
      >
        Ne găsești în zona Cina, lângă râul Olănești. Comanda se face la bar, servirea e rapidă și atentă.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: 32,
          alignItems: 'stretch',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ background: '#2B1B12', color: '#F4E9D6', borderRadius: 20, padding: '34px 36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 24 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: openDotColor,
                  boxShadow: `0 0 0 4px ${openDotHalo}`,
                }}
              />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '0.16em' }}>
                {openLabel}
              </span>
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#C89452',
                marginBottom: 16,
              }}
            >
              Program
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {HOURS.map((h) => (
                <div
                  key={h.day}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '11px 0',
                    borderBottom: '1px solid rgba(200,148,82,0.18)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Spectral', serif",
                      fontSize: 16,
                      color: h.i === today ? '#C89452' : 'rgba(244,233,214,0.72)',
                    }}
                  >
                    {h.day}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 14,
                      color: h.i === today ? '#F4E9D6' : 'rgba(244,233,214,0.9)',
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              background: '#FBF4E8',
              border: '1px solid rgba(43,27,18,0.1)',
              borderRadius: 20,
              padding: '32px 36px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: '#A9772F',
                  marginBottom: 8,
                }}
              >
                Adresă
              </div>
              <div
                style={{
                  fontFamily: "'Bitter', serif",
                  fontWeight: 700,
                  fontSize: 19,
                  lineHeight: 1.4,
                }}
              >
                Strada Luceafărului
                <br />
                240065 Râmnicu Vâlcea
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: '#A9772F',
                  marginBottom: 8,
                }}
              >
                Telefon
              </div>
              <a
                href="tel:0720897911"
                style={{
                  fontFamily: "'Bitter', serif",
                  fontWeight: 700,
                  fontSize: 19,
                  color: '#2B1B12',
                  textDecoration: 'none',
                }}
              >
                0720 897 911
              </a>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mio+Caffe+Brunch+Sweets+Ramnicu+Valcea"
                target="_blank"
                rel="noreferrer"
                className="btn-solid btn-sm"
              >
                Deschide în Maps
              </a>
              <a href="#" className="btn-gold">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            minHeight: 480,
            border: '1px solid rgba(43,27,18,0.1)',
            boxShadow: '0 8px 24px -12px rgba(43,27,18,0.3)',
          }}
        >
          <iframe
            title="Mio Caffè pe hartă"
            src="https://maps.google.com/maps?q=Mio%20Caffe%20Brunch%20Sweets%20Ramnicu%20Valcea&t=&z=15&ie=UTF8&iwloc=&output=embed"
            style={{ width: '100%', height: '100%', minHeight: 480, border: 0, display: 'block' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
