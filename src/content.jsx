import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { doc, onSnapshot, setDoc } from '@firebase/firestore'
import ouaTurcesti from './assets/oua-turcesti.jpg'
import pancakes from './assets/pancakes.jpg'
import { FEATURED, PHOTOS, flattenMenuItems, matchMenuPhoto } from './data'
import { db, isFirebaseConfigured } from './firebase'

export const DEFAULT_HERO = {
  primary: { url: ouaTurcesti, alt: 'Ouă turcești', path: '', fileId: '' },
  secondary: { url: pancakes, alt: 'Pancakes', path: '', fileId: '' },
}

export const DEFAULT_GALLERY = PHOTOS.map((photo, index) => ({
  id: `local-${index}`,
  url: photo.src,
  caption: photo.caption,
  path: '',
  fileId: '',
  order: index,
}))

export const DEFAULT_FEATURED = FEATURED.map((item, index) => ({
  id: `featured-${index}`,
  name: item.name,
  category: item.category,
  vol: item.vol || '',
  price: item.price,
  desc: item.desc,
  url: item.src,
  path: '',
  fileId: '',
  alt: item.name,
  order: index,
}))

function normalizeImage(value, fallback) {
  if (!value?.url) return fallback
  return {
    url: value.url,
    alt: value.alt || fallback.alt,
    path: value.path || '',
    fileId: value.fileId || '',
  }
}

function normalizeHero(data) {
  return {
    primary: normalizeImage(data?.primary, DEFAULT_HERO.primary),
    secondary: normalizeImage(data?.secondary, DEFAULT_HERO.secondary),
  }
}

function normalizeGallery(data) {
  if (!data || !Array.isArray(data.photos)) return DEFAULT_GALLERY
  return [...data.photos]
    .map((photo, index) => ({
      id: photo.id || `photo-${index}`,
      url: photo.url || '',
      caption: photo.caption || '',
      path: photo.path || '',
      fileId: photo.fileId || '',
      order: typeof photo.order === 'number' ? photo.order : index,
    }))
    .filter((photo) => photo.url)
    .sort((a, b) => a.order - b.order)
}

function normalizeFeatured(data) {
  if (!data || !Array.isArray(data.items) || data.items.length === 0) return DEFAULT_FEATURED
  return [...data.items]
    .map((item, index) => {
      const fallback = DEFAULT_FEATURED[index] || DEFAULT_FEATURED[0]
      return {
        id: item.id || fallback.id,
        name: item.name || fallback.name,
        category: item.category || fallback.category,
        vol: item.vol || fallback.vol || '',
        price: item.price || fallback.price,
        desc: item.desc || fallback.desc,
        url: item.url || fallback.url,
        path: item.path || '',
        fileId: item.fileId || '',
        alt: item.alt || item.name || fallback.name,
        order: typeof item.order === 'number' ? item.order : index,
      }
    })
    .sort((a, b) => a.order - b.order)
}

function normalizeMenuPhotos(data) {
  if (!data || typeof data.items !== 'object' || !data.items) return {}
  return data.items
}

const SiteContentContext = createContext(null)

export function SiteContentProvider({ children }) {
  const [hero, setHero] = useState(DEFAULT_HERO)
  const [gallery, setGallery] = useState(DEFAULT_GALLERY)
  const [featured, setFeatured] = useState(DEFAULT_FEATURED)
  const [menuPhotos, setMenuPhotos] = useState({})
  const [ready, setReady] = useState(!isFirebaseConfigured)

  useEffect(() => {
    if (!isFirebaseConfigured || !db) {
      setReady(true)
      return undefined
    }

    const flags = { hero: false, gallery: false, featured: false, menuPhotos: false }
    const mark = (key) => {
      flags[key] = true
      if (Object.values(flags).every(Boolean)) setReady(true)
    }

    const unsubHero = onSnapshot(
      doc(db, 'content', 'hero'),
      (snap) => {
        setHero(normalizeHero(snap.data()))
        mark('hero')
      },
      () => {
        setHero(DEFAULT_HERO)
        mark('hero')
      },
    )

    const unsubGallery = onSnapshot(
      doc(db, 'content', 'gallery'),
      (snap) => {
        setGallery(normalizeGallery(snap.data()))
        mark('gallery')
      },
      () => {
        setGallery(DEFAULT_GALLERY)
        mark('gallery')
      },
    )

    const unsubFeatured = onSnapshot(
      doc(db, 'content', 'featured'),
      (snap) => {
        setFeatured(normalizeFeatured(snap.data()))
        mark('featured')
      },
      () => {
        setFeatured(DEFAULT_FEATURED)
        mark('featured')
      },
    )

    const unsubMenu = onSnapshot(
      doc(db, 'content', 'menuPhotos'),
      (snap) => {
        setMenuPhotos(normalizeMenuPhotos(snap.data()))
        mark('menuPhotos')
      },
      () => {
        setMenuPhotos({})
        mark('menuPhotos')
      },
    )

    return () => {
      unsubHero()
      unsubGallery()
      unsubFeatured()
      unsubMenu()
    }
  }, [])

  const value = useMemo(() => {
    const photos = gallery.map((photo) => ({ src: photo.url, caption: photo.caption, id: photo.id }))
    const menuRows = flattenMenuItems()
    const resolvedMenuPhotos = {}
    for (const row of menuRows) {
      const custom = menuPhotos[row.key]
      if (custom?.url) {
        resolvedMenuPhotos[row.key] = {
          url: custom.url,
          path: custom.path || '',
          fileId: custom.fileId || '',
          source: 'custom',
        }
        continue
      }
      const matched = matchMenuPhoto(row.item, photos)
      if (matched) {
        resolvedMenuPhotos[row.key] = { url: matched.src, path: '', source: 'gallery' }
      }
    }

    return {
      hero,
      gallery,
      featured,
      menuPhotos: resolvedMenuPhotos,
      rawMenuPhotos: menuPhotos,
      photos,
      ready,
      configured: isFirebaseConfigured,
    }
  }, [featured, gallery, hero, menuPhotos, ready])

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext)
  if (!ctx) throw new Error('useSiteContent must be used within SiteContentProvider')
  return ctx
}

export async function saveContent(docId, data) {
  if (!db) throw new Error('Firebase nu este configurat.')
  await setDoc(doc(db, 'content', docId), data, { merge: true })
}
