export default function Lightbox({ index, photos = [], onClose, onPrev, onNext }) {
  if (index == null) return null
  const photo = photos[index]
  if (!photo) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(20,12,7,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        animation: 'lbFade .25s ease both',
      }}
    >
      <button type="button" className="lb-btn lb-close" onClick={onClose} aria-label="Închide">
        ×
      </button>
      <button
        type="button"
        className="lb-btn lb-prev"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label="Anterior"
      >
        ‹
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 900,
          maxHeight: '82vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 18,
        }}
      >
        <img
          src={photo.src}
          alt={photo.caption}
          style={{
            maxWidth: '100%',
            maxHeight: '74vh',
            borderRadius: 14,
            objectFit: 'contain',
            boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)',
            animation: 'lbZoom .3s cubic-bezier(.2,.7,.2,1) both',
          }}
        />
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C89452',
          }}
        >
          {photo.caption}
        </div>
      </div>
      <button
        type="button"
        className="lb-btn lb-next"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label="Următor"
      >
        ›
      </button>
    </div>
  )
}
