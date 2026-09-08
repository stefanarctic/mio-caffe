import { useMemo, useRef, useState } from 'react'
import { serverTimestamp } from '@firebase/firestore'
import { flattenMenuItems } from '../data'
import { saveContent, useSiteContent } from '../content'
import { ensureImageKitAsset, uploadToImageKit } from './imagekit'
import ImagePicker from './ImagePicker'

const TABS = [
  { id: 'landing', label: 'Landing' },
  { id: 'gallery', label: 'Galerie' },
  { id: 'menu', label: 'Meniu' },
]

function newPhotoId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `photo-${Date.now()}`
}

function imageRef(img, extra = {}) {
  return {
    url: img.url,
    fileId: img.fileId || '',
    path: img.path || '',
    ...extra,
  }
}

function FeaturedFields({ item, onSave }) {
  const [draft, setDraft] = useState({
    name: item.name,
    category: item.category,
    price: item.price,
    desc: item.desc,
  })

  const persist = () => {
    if (
      draft.name === item.name &&
      draft.category === item.category &&
      draft.price === item.price &&
      draft.desc === item.desc
    ) {
      return
    }
    onSave(draft)
  }

  return (
    <div className="admin-fields">
      <label>
        Nume
        <input
          value={draft.name}
          onChange={(e) => setDraft((v) => ({ ...v, name: e.target.value }))}
          onBlur={persist}
        />
      </label>
      <label>
        Categorie
        <input
          value={draft.category}
          onChange={(e) => setDraft((v) => ({ ...v, category: e.target.value }))}
          onBlur={persist}
        />
      </label>
      <label>
        Preț
        <input
          value={draft.price}
          onChange={(e) => setDraft((v) => ({ ...v, price: e.target.value }))}
          onBlur={persist}
        />
      </label>
      <label className="admin-span">
        Descriere
        <textarea
          rows={3}
          value={draft.desc}
          onChange={(e) => setDraft((v) => ({ ...v, desc: e.target.value }))}
          onBlur={persist}
        />
      </label>
    </div>
  )
}

export default function AdminDashboard({ user, onSignOut }) {
  const { hero, gallery, featured, menuPhotos, rawMenuPhotos } = useSiteContent()
  const [tab, setTab] = useState('landing')
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const addPhotoRef = useRef(null)
  const menuRows = useMemo(() => flattenMenuItems(), [])

  const flash = (message) => {
    setError('')
    setStatus(message)
    window.setTimeout(() => setStatus(''), 2400)
  }

  const fail = (err) => {
    setStatus('')
    setError(err?.message || 'Salvarea a eșuat.')
  }

  const saveHero = async (next) => {
    try {
      const primary = await ensureImageKitAsset({ ...hero.primary, ...next.primary }, 'hero', 'primary')
      const secondary = await ensureImageKitAsset(
        { ...hero.secondary, ...next.secondary },
        'hero',
        'secondary',
      )
      await saveContent('hero', {
        primary: imageRef(primary, { alt: primary.alt || hero.primary.alt }),
        secondary: imageRef(secondary, { alt: secondary.alt || hero.secondary.alt }),
        updatedAt: serverTimestamp(),
      })
      flash('Pozele de pe landing au fost salvate.')
    } catch (err) {
      fail(err)
    }
  }

  const saveGallery = async (photos) => {
    try {
      const migrated = []
      for (const [index, photo] of photos.entries()) {
        if (!photo.url) continue
        const remote = await ensureImageKitAsset(photo, 'gallery', photo.id || `photo-${index}`)
        migrated.push({
          id: photo.id,
          caption: (photo.caption || '').slice(0, 80),
          order: index,
          ...imageRef(remote),
        })
      }
      await saveContent('gallery', { photos: migrated, updatedAt: serverTimestamp() })
      flash('Galeria a fost actualizată.')
    } catch (err) {
      fail(err)
    }
  }

  const saveFeatured = async (items) => {
    try {
      const migrated = []
      for (const [index, item] of items.entries()) {
        const remote = await ensureImageKitAsset(item, 'featured', item.id || `featured-${index}`)
        migrated.push({
          id: item.id,
          name: item.name,
          category: item.category,
          vol: item.vol || '',
          price: item.price,
          desc: item.desc || '',
          order: index,
          ...imageRef(remote, { alt: item.name }),
        })
      }
      await saveContent('featured', { items: migrated, updatedAt: serverTimestamp() })
      flash('Meniul de pe landing a fost salvat.')
    } catch (err) {
      fail(err)
    }
  }

  const saveMenuPhotos = async (items) => {
    try {
      await saveContent('menuPhotos', { items, updatedAt: serverTimestamp() })
      flash('Pozele din meniu au fost salvate.')
    } catch (err) {
      fail(err)
    }
  }

  return (
    <div className="admin-shell">
      <header className="admin-top">
        <div>
          <div className="admin-kicker">Mio Caffè</div>
          <h1>Dashboard</h1>
        </div>
        <div className="admin-top-meta">
          <span>{user.email}</span>
          <button type="button" className="admin-btn admin-btn-ghost" onClick={onSignOut}>
            Ieși
          </button>
        </div>
      </header>

      <nav className="admin-tabs">
        {TABS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`admin-tab${tab === item.id ? ' is-on' : ''}`}
            onClick={() => setTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {status ? <p className="admin-status">{status}</p> : null}
      {error ? <p className="admin-error">{error}</p> : null}

      {tab === 'landing' ? (
        <section className="admin-section">
          <div className="admin-section-head">
            <h2>Hero</h2>
            <p>Cele două poze din dreapta, pe prima pagină. Se salvează pe ImageKit.</p>
          </div>
          <div className="admin-grid">
            <ImagePicker
              label="Poză principală"
              hint="Imaginea mare din dreapta."
              value={hero.primary}
              alt={hero.primary.alt}
              folder="hero"
              fileName="primary"
              onUploaded={async (file) => {
                await saveHero({ primary: file })
              }}
            />
            <ImagePicker
              label="Poză secundară"
              hint="Imaginea mai mică, suprapusă."
              value={hero.secondary}
              alt={hero.secondary.alt}
              folder="hero"
              fileName="secondary"
              onUploaded={async (file) => {
                await saveHero({ secondary: file })
              }}
            />
          </div>

          <div className="admin-section-head" style={{ marginTop: 48 }}>
            <h2>Meniul de pe landing</h2>
            <p>Cele trei carduri cu preparate de pe prima pagină.</p>
          </div>
          <div className="admin-stack">
            {featured.map((item, index) => (
              <article key={item.id} className="admin-card">
                <ImagePicker
                  label={item.name}
                  value={{ url: item.url, fileId: item.fileId, path: item.path }}
                  alt={item.name}
                  folder="featured"
                  fileName={item.id}
                  onUploaded={async (file) => {
                    const items = featured.map((entry, i) =>
                      i === index ? { ...entry, ...file } : entry,
                    )
                    await saveFeatured(items)
                  }}
                />
                <FeaturedFields
                  key={item.id}
                  item={item}
                  onSave={(draft) => {
                    const items = featured.map((entry, i) => (i === index ? { ...entry, ...draft } : entry))
                    saveFeatured(items)
                  }}
                />
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {tab === 'gallery' ? (
        <section className="admin-section">
          <div className="admin-section-head">
            <div>
              <h2>Galerie</h2>
              <p>Pozele din secțiunea Galerie de pe landing. Ordinea de aici e și pe site.</p>
            </div>
            <button type="button" className="admin-btn admin-btn-solid" onClick={() => addPhotoRef.current?.click()}>
              Adaugă poză
            </button>
            <input
              ref={addPhotoRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              hidden
              onChange={async (e) => {
                const file = e.target.files?.[0]
                e.target.value = ''
                if (!file) return
                try {
                  const id = newPhotoId()
                  const uploaded = await uploadToImageKit(file, { folder: 'gallery', fileName: id })
                  await saveGallery([
                    ...gallery,
                    { id, caption: file.name.replace(/\.[^.]+$/, '').slice(0, 80), ...uploaded },
                  ])
                } catch (err) {
                  fail(err)
                }
              }}
            />
          </div>
          <div className="admin-stack">
            {gallery.map((photo, index) => (
              <article key={photo.id} className="admin-card">
                <ImagePicker
                  label={photo.caption || `Poză ${index + 1}`}
                  value={{ url: photo.url, fileId: photo.fileId, path: photo.path }}
                  alt={photo.caption}
                  folder="gallery"
                  fileName={photo.id}
                  onUploaded={async (file) => {
                    const photos = gallery.map((entry, i) =>
                      i === index ? { ...entry, ...file } : entry,
                    )
                    await saveGallery(photos)
                  }}
                  onRemove={async () => {
                    await saveGallery(gallery.filter((_, i) => i !== index))
                  }}
                />
                <div className="admin-fields">
                  <label className="admin-span">
                    Legendă
                    <input
                      defaultValue={photo.caption}
                      key={`${photo.id}-${photo.caption}`}
                      onBlur={(e) => {
                        const caption = e.target.value
                        if (caption === photo.caption) return
                        const photos = gallery.map((entry, i) =>
                          i === index ? { ...entry, caption } : entry,
                        )
                        saveGallery(photos)
                      }}
                    />
                  </label>
                  <div className="admin-picker-actions">
                    <button
                      type="button"
                      className="admin-btn"
                      disabled={index === 0}
                      onClick={() => {
                        const photos = [...gallery]
                        ;[photos[index - 1], photos[index]] = [photos[index], photos[index - 1]]
                        saveGallery(photos)
                      }}
                    >
                      Sus
                    </button>
                    <button
                      type="button"
                      className="admin-btn"
                      disabled={index === gallery.length - 1}
                      onClick={() => {
                        const photos = [...gallery]
                        ;[photos[index + 1], photos[index]] = [photos[index], photos[index + 1]]
                        saveGallery(photos)
                      }}
                    >
                      Jos
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {tab === 'menu' ? (
        <section className="admin-section">
          <div className="admin-section-head">
            <h2>Poze meniu</h2>
            <p>Fiecare preparat poate avea o poză. Apare în popup-ul din pagina de meniu.</p>
          </div>
          {menuRows.map((row) => {
            const current = menuPhotos[row.key]
            return (
              <article key={row.key} className="admin-card admin-card-row">
                <ImagePicker
                  label={row.item.name}
                  hint={`${row.categoryName}${row.sectionName ? ` · ${row.sectionName}` : ''}`}
                  value={current ? { url: current.url, fileId: current.fileId, path: current.path } : null}
                  alt={row.item.name}
                  folder="menu"
                  fileName={row.key}
                  onUploaded={async (file) => {
                    await saveMenuPhotos({
                      ...rawMenuPhotos,
                      [row.key]: { url: file.url, fileId: file.fileId || '', path: file.path || '' },
                    })
                  }}
                  onRemove={
                    current?.source === 'custom'
                      ? async () => {
                          const next = { ...rawMenuPhotos }
                          delete next[row.key]
                          await saveMenuPhotos(next)
                        }
                      : undefined
                  }
                />
              </article>
            )
          })}
        </section>
      ) : null}
    </div>
  )
}
