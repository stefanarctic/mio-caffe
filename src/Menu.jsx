import { FILTERS, MENU } from './data'

function chipStyle(on) {
  return {
    border: `1.5px solid ${on ? '#2B1B12' : 'rgba(43,27,18,0.25)'}`,
    background: on ? '#2B1B12' : 'transparent',
    color: on ? '#F4E9D6' : '#4A3121',
  }
}

export default function Menu({ active, onFilter, onItemClick }) {
  const visible = active === 'toate' ? MENU : MENU.filter((c) => c.key === active)

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
          margin: '0 0 32px',
        }}
      >
        Preparate proaspete, cafea de specialitate și deserturi făcute cu drag. Prețuri între 20 și 40 lei
        de persoană.
      </p>

      <div data-reveal="28" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 44 }}>
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            className="filter-chip"
            style={chipStyle(active === f.key)}
            onClick={() => onFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        {visible.map((cat) => (
          <section key={cat.key} style={{ marginBottom: 56 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <span style={{ color: '#C89452', fontSize: 22 }}>❦</span>
              <h3
                style={{
                  fontFamily: "'Bitter', serif",
                  fontWeight: 800,
                  fontSize: 'clamp(24px,3vw,34px)',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                {cat.name}
              </h3>
              <span style={{ flex: 1, height: 1, background: 'rgba(43,27,18,0.15)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {cat.items.map((item) => (
                <div key={item.name} className="menu-item" onClick={() => onItemClick(item)}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                    <span
                      style={{
                        fontFamily: "'Bitter', serif",
                        fontWeight: 700,
                        fontSize: 'clamp(17px,2vw,21px)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.name}
                    </span>
                    {item.tag ? (
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 10,
                          letterSpacing: '0.1em',
                          color: '#2B1B12',
                          background: '#C89452',
                          borderRadius: 999,
                          padding: '3px 9px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.tag}
                      </span>
                    ) : null}
                    <span
                      style={{
                        flex: 1,
                        borderBottom: '2px dotted rgba(43,27,18,0.28)',
                        transform: 'translateY(-5px)',
                        minWidth: 24,
                      }}
                    />
                    {item.vol ? (
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 13,
                          color: '#6B4A32',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.vol}
                      </span>
                    ) : null}
                    <span
                      style={{
                        fontFamily: "'Bitter', serif",
                        fontWeight: 800,
                        fontSize: 'clamp(16px,1.8vw,19px)',
                        color: '#A9772F',
                        width: 64,
                        textAlign: 'right',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.price}
                    </span>
                  </div>
                  {item.desc ? (
                    <p
                      style={{
                        fontFamily: "'Spectral', serif",
                        fontSize: 15,
                        color: '#6B4A32',
                        margin: '6px 0 0',
                        lineHeight: 1.45,
                        maxWidth: 640,
                      }}
                    >
                      {item.desc}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ))}

        <div
          style={{
            background: '#FBF4E8',
            border: '1px solid rgba(43,27,18,0.1)',
            borderRadius: 14,
            padding: '26px 30px',
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#A9772F',
              marginBottom: 16,
            }}
          >
            Alergeni & mențiuni
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 22,
              fontFamily: "'Spectral', serif",
              fontSize: 15,
              color: '#4A3121',
            }}
          >
            <span>
              <strong style={{ color: '#2C6B66' }}>V</strong> — Vegetarian
            </span>
            <span>
              <strong style={{ color: '#2C6B66' }}>VG</strong> — Vegan
            </span>
            <span>
              <strong style={{ color: '#A9772F' }}>G</strong> — Conține gluten
            </span>
            <span>
              <strong style={{ color: '#A9772F' }}>L</strong> — Conține lactoză
            </span>
            <span>
              <strong style={{ color: '#A9772F' }}>N</strong> — Conține nuci
            </span>
          </div>
          <p
            style={{
              fontFamily: "'Spectral', serif",
              fontSize: 14,
              color: '#6B4A32',
              margin: '16px 0 0',
              lineHeight: 1.5,
            }}
          >
            Pentru intoleranțe sau alergii, întreabă personalul — te ajutăm cu drag să alegi. Meniul poate
            varia în funcție de sezon.
          </p>
        </div>
      </div>
    </section>
  )
}
