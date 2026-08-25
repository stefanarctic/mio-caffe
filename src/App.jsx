import { useEffect, useState } from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Gallery from './Gallery'
import Hero from './Hero'
import Lightbox from './Lightbox'
import Menu from './Menu'
import MenuPopup from './MenuPopup'
import Nav from './Nav'
import Pillars from './Pillars'
import Reviews from './Reviews'
import { PHOTOS } from './data'
import { useActiveSection, useOpenStatus, useReveal } from './hooks'

const SECTION_IDS = ['acasa', 'meniu', 'despre', 'galerie', 'contact']

export default function App() {
  const [filter, setFilter] = useState('toate')
  const [menuItem, setMenuItem] = useState(null)
  const [lbIdx, setLbIdx] = useState(null)
  const navActive = useActiveSection(SECTION_IDS)
  const open = useOpenStatus()
  useReveal()

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && menuItem) {
        setMenuItem(null)
        return
      }
      if (lbIdx == null) return
      const n = PHOTOS.length
      if (e.key === 'Escape') setLbIdx(null)
      if (e.key === 'ArrowRight') setLbIdx((i) => (i + 1) % n)
      if (e.key === 'ArrowLeft') setLbIdx((i) => (i - 1 + n) % n)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuItem, lbIdx])

  useEffect(() => {
    document.body.style.overflow = menuItem || lbIdx != null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuItem, lbIdx])

  return (
    <div className="page">
      <Nav active={navActive} />
      <Hero openLabel={open.openLabel} openDotColor={open.openDotColor} openDotHalo={open.openDotHalo} />
      <Pillars />
      <Menu active={filter} onFilter={setFilter} onItemClick={setMenuItem} />
      <About />
      <Reviews />
      <Gallery onOpen={setLbIdx} />
      <Contact openLabel={open.openLabel} openDotColor={open.openDotColor} openDotHalo={open.openDotHalo} />
      <Footer />
      <MenuPopup item={menuItem} onClose={() => setMenuItem(null)} />
      <Lightbox
        index={lbIdx}
        onClose={() => setLbIdx(null)}
        onPrev={() => setLbIdx((i) => (i - 1 + PHOTOS.length) % PHOTOS.length)}
        onNext={() => setLbIdx((i) => (i + 1) % PHOTOS.length)}
      />
    </div>
  )
}
