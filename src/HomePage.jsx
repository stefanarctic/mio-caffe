import { useEffect, useState } from 'react'
import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'
import Hero from './Hero'
import Lightbox from './Lightbox'
import MenuPreview from './MenuPreview'
import Pillars from './Pillars'
import Reviews from './Reviews'
import { useSiteContent } from './content'
import { useOpenStatus } from './hooks'

export default function HomePage() {
  const [lbIdx, setLbIdx] = useState(null)
  const { photos } = useSiteContent()
  const open = useOpenStatus()

  useEffect(() => {
    document.title = 'Mio Caffè · Râmnicu Vâlcea'
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (lbIdx == null) return
      const n = photos.length
      if (e.key === 'Escape') setLbIdx(null)
      if (e.key === 'ArrowRight') setLbIdx((i) => (i + 1) % n)
      if (e.key === 'ArrowLeft') setLbIdx((i) => (i - 1 + n) % n)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lbIdx, photos.length])

  useEffect(() => {
    document.body.style.overflow = lbIdx != null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [lbIdx])

  return (
    <>
      <Hero openLabel={open.openLabel} openDotColor={open.openDotColor} openDotHalo={open.openDotHalo} />
      <Pillars />
      <MenuPreview />
      <About />
      <Reviews />
      <Gallery onOpen={setLbIdx} />
      <Contact openLabel={open.openLabel} openDotColor={open.openDotColor} openDotHalo={open.openDotHalo} />
      <Lightbox
        index={lbIdx}
        onClose={() => setLbIdx(null)}
        photos={photos}
        onPrev={() => setLbIdx((i) => (i - 1 + photos.length) % photos.length)}
        onNext={() => setLbIdx((i) => (i + 1) % photos.length)}
      />
    </>
  )
}
