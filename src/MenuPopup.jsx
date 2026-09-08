import { ALLERGENS } from './data'
import { useSiteContent } from './content'

export default function MenuPopup({ item, onClose }) {
  const { menuPhotos } = useSiteContent()
  if (!item) return null
  const img = item.photoKey ? menuPhotos[item.photoKey] : null
  const allergenLabels = (item.allergens ?? [])
    .map((n) => ALLERGENS.find((a) => a.n === n))
    .filter(Boolean)

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1100,
        background: 'rgba(20,12,7,0.78)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 28,
        animation: 'lbFade .22s ease both',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 460,
          background: '#F4E9D6',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 34px 70px -22px rgba(0,0,0,0.55)',
          animation: 'lbZoom .3s cubic-bezier(.2,.7,.2,1) both',
        }}
      >
        <button type="button" className="popup-close" onClick={onClose} aria-label="Închide">
          ×
        </button>
        {img ? (
          <img
            src={img.url}
            alt={item.name}
            style={{ width: '100%', height: 210, objectFit: 'cover', display: 'block' }}
          />
        ) : null}
        <div style={{ padding: '26px 30px 30px' }}>
          {item.tag ? (
            <span
              style={{
                display: 'inline-block',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.12em',
                color: '#2B1B12',
                background: '#C89452',
                borderRadius: 999,
                padding: '4px 11px',
                marginBottom: 12,
              }}
            >
              {item.tag}
            </span>
          ) : null}
          <h3
            style={{
              fontFamily: "'Bitter', serif",
              fontWeight: 800,
              fontSize: 28,
              letterSpacing: '-0.01em',
              margin: '0 0 10px',
              color: '#2B1B12',
            }}
          >
            {item.name}
            {item.frozen ? (
              <span
                aria-label="produs congelat"
                title="Produs congelat"
                style={{ color: '#A9772F', marginLeft: 6, fontWeight: 700 }}
              >
                ★
              </span>
            ) : null}
          </h3>
          {item.desc ? (
            <p
              style={{
                fontFamily: "'Spectral', serif",
                fontSize: 16,
                lineHeight: 1.55,
                color: '#6B4A32',
                margin: item.frozen || allergenLabels.length ? '0 0 10px' : '0 0 20px',
              }}
            >
              {item.desc}
            </p>
          ) : null}
          {item.frozen ? (
            <p
              style={{
                fontFamily: "'Spectral', serif",
                fontSize: 14,
                color: '#6B4A32',
                margin: allergenLabels.length ? '0 0 8px' : '0 0 20px',
              }}
            >
              <strong style={{ color: '#A9772F' }}>★</strong> Produs congelat.
            </p>
          ) : null}
          {allergenLabels.length ? (
            <p
              style={{
                fontFamily: "'Spectral', serif",
                fontSize: 14,
                color: '#6B4A32',
                margin: '0 0 20px',
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: '#A9772F' }}>Alergeni:</strong>{' '}
              {allergenLabels.map((a) => `${a.n}. ${a.label}`).join(' · ')}
            </p>
          ) : null}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 14,
              paddingTop: 18,
              borderTop: '1px solid rgba(43,27,18,0.14)',
            }}
          >
            <span
              style={{
                fontFamily: "'Bitter', serif",
                fontWeight: 900,
                fontSize: 26,
                color: '#A9772F',
              }}
            >
              {item.price}
            </span>
            {item.vol ? (
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: '#6B4A32' }}>
                {item.vol}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
