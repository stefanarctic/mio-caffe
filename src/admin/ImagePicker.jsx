import { useRef, useState } from 'react'
import { deleteFromImageKit, uploadToImageKit } from './imagekit'

export default function ImagePicker({
  label,
  hint,
  value,
  alt,
  onUploaded,
  onRemove,
  folder,
  fileName,
}) {
  const inputRef = useRef(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [drag, setDrag] = useState(false)

  const pick = () => inputRef.current?.click()

  const handleFile = async (file) => {
    if (!file) return
    setError('')
    setBusy(true)
    try {
      const uploaded = await uploadToImageKit(file, { folder, fileName })
      if (value?.fileId && value.fileId !== uploaded.fileId) {
        try {
          await deleteFromImageKit(value.fileId)
        } catch {
          // The new image is already live; a leftover file is acceptable.
        }
      }
      await onUploaded({ ...uploaded, alt: alt || label || '' })
    } catch (err) {
      setError(err?.message || 'Upload-ul a eșuat.')
    } finally {
      setBusy(false)
    }
  }

  const handleRemove = async () => {
    if (!onRemove) return
    setBusy(true)
    setError('')
    try {
      if (value?.fileId) {
        try {
          await deleteFromImageKit(value.fileId)
        } catch {
          // Still clear the document reference.
        }
      }
      await onRemove()
    } catch (err) {
      setError(err?.message || 'Ștergerea a eșuat.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className={`admin-picker${drag ? ' is-drag' : ''}`}>
      <button
        type="button"
        className="admin-picker-preview"
        onClick={pick}
        onDragOver={(e) => {
          e.preventDefault()
          setDrag(true)
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDrag(false)
          handleFile(e.dataTransfer.files?.[0])
        }}
        disabled={busy}
      >
        {value?.url ? (
          <img src={value.url} alt={alt || label || ''} />
        ) : (
          <span>Adaugă poză</span>
        )}
        {busy ? <span className="admin-picker-busy">Se încarcă…</span> : null}
      </button>
      <div className="admin-picker-meta">
        {label ? <div className="admin-picker-label">{label}</div> : null}
        {hint ? <p>{hint}</p> : null}
        <div className="admin-picker-actions">
          <button type="button" className="admin-btn" onClick={pick} disabled={busy}>
            {value?.url ? 'Schimbă poza' : 'Încarcă poză'}
          </button>
          {onRemove && value?.url ? (
            <button type="button" className="admin-btn admin-btn-ghost" onClick={handleRemove} disabled={busy}>
              Șterge
            </button>
          ) : null}
        </div>
        {error ? <p className="admin-error">{error}</p> : null}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        hidden
        onChange={(e) => {
          handleFile(e.target.files?.[0])
          e.target.value = ''
        }}
      />
    </div>
  )
}
