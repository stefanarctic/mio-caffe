import { ALLERGENS, FILTERS, MENU, menuItemKey } from './data'

function chipStyle(on) {
  return {
    border: `1.5px solid ${on ? '#2B1B12' : 'rgba(43,27,18,0.25)'}`,
    background: on ? '#2B1B12' : 'transparent',
    color: on ? '#F4E9D6' : '#4A3121',
  }
}

function AllergenNums({ nums, style }) {
  if (!nums?.length) return null
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12,
        letterSpacing: '0.06em',
        color: '#A9772F',
        ...style,
      }}
    >
      ({nums.join(', ')})
    </span>
  )
}

export default function Menu({ active, onFilter, onItemClick, standalone = false }) {
  const visible = active === 'toate' ? MENU : MENU.filter((c) => c.group === active)
  const activeKind = FILTERS.find((f) => f.key === active)?.kind
  const showAllergens = visible.some((c) =>
    (c.sections ?? [{ items: c.items }]).some((sec) => sec.items.some((i) => i.allergens?.length)),
  )
  const showDrinkExtras = !activeKind || active === 'cafea'
  const showGeneralNotes = !activeKind
  const showFrozenNote = visible.some((c) =>
    (c.sections ?? [{ items: c.items }]).some((sec) => sec.items.some((i) => i.frozen)),
  )
  const showNotesBox = showAllergens || showDrinkExtras || showFrozenNote

  return (
    <section
      id="meniu"
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: standalone ? '48px 32px 96px' : '80px 32px 20px',
      }}
    >
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
        Preparate proaspete, cafea de specialitate, panini și pancakes. <b style={{fontWeight: 'bold'}}>Comanda și plata se fac la bar. Mulțumim!</b><br />
        Brunch & sweets: 7:30 – 16:30.
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: cat.sections ? 36 : 0 }}>
            {(cat.sections ?? [{ items: cat.items }]).map((sec) => (
              <div key={sec.name || cat.key}>
                {sec.name ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                    <h4
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        fontWeight: 500,
                        letterSpacing: '0.28em',
                        textTransform: 'uppercase',
                        color: '#A9772F',
                        margin: 0,
                      }}
                    >
                      {sec.name}
                    </h4>
                    <span style={{ flex: 1, height: 1, background: 'rgba(43,27,18,0.1)' }} />
                  </div>
                ) : null}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {sec.items.map((item) => (
                    <div key={`${item.name}-${item.vol || item.price}`} className="menu-item" onClick={() => onItemClick({ ...item, photoKey: menuItemKey(cat.key, item) })}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                        <span
                          style={{
                            fontFamily: "'Bitter', serif",
                            fontWeight: 700,
                            fontSize: 'clamp(17px,2vw,21px)',
                          }}
                        >
                          {item.name}
                          {item.frozen ? (
                            <span
                              aria-label="produs congelat"
                              title="Produs congelat"
                              style={{ color: '#A9772F', marginLeft: 4, fontWeight: 700 }}
                            >
                              ★
                            </span>
                          ) : null}
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
                            minWidth: 88,
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
                      <AllergenNums
                        nums={item.allergens}
                        style={{ display: 'block', marginTop: item.desc ? 4 : 6 }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </section>
        ))}

        {showNotesBox ? (
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
              {showAllergens ? 'Alergeni & mențiuni' : 'Mențiuni'}
            </div>
            {showAllergens ? (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 14,
                  fontFamily: "'Spectral', serif",
                  fontSize: 15,
                  color: '#4A3121',
                }}
              >
                {ALLERGENS.map((a) => (
                  <span key={a.n}>
                    <strong style={{ color: '#A9772F' }}>{a.n}.</strong> {a.label}
                  </span>
                ))}
              </div>
            ) : null}
            {showFrozenNote ? (
              <p
                style={{
                  fontFamily: "'Spectral', serif",
                  fontSize: 15,
                  color: '#4A3121',
                  margin: showAllergens ? '16px 0 0' : 0,
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: '#A9772F' }}>★</strong> Produs congelat.
              </p>
            ) : null}
            {showDrinkExtras || showAllergens || showGeneralNotes ? (
              <p
                style={{
                  fontFamily: "'Spectral', serif",
                  fontSize: 14,
                  color: '#6B4A32',
                  margin: showAllergens || showFrozenNote ? '10px 0 0' : 0,
                  lineHeight: 1.5,
                }}
              >
                {showDrinkExtras ? 'Lapte vegan +2 lei · Decaf +3 lei. ' : ''}
                {showAllergens
                  ? ' Pentru intoleranțe sau alergii, întreabă personalul — te ajutăm cu drag să alegi.'
                  : ''}
                {showGeneralNotes ? ' Meniul poate varia în funcție de sezon.' : ''}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
