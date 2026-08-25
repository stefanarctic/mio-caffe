import { PHOTOS } from './data'

export default function MenuPopup({ item, onClose }) {
  if (!item) return null
  const img = PHOTOS.find((im) => im.caption.toLowerCase() === item.name.toLowerCase())

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
            src={img.src}
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
          </h3>
          {item.desc ? (
            <p
              style={{
                fontFamily: "'Spectral', serif",
                fontSize: 16,
                lineHeight: 1.55,
                color: '#6B4A32',
                margin: '0 0 20px',
              }}
            >
              {item.desc}
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
