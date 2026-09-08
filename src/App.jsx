import { lazy, Suspense, useEffect } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './Footer'
import HomePage from './HomePage'
import MenuPage from './MenuPage'
import Nav from './Nav'
import { useActiveSection, useReveal } from './hooks'

const AdminApp = lazy(() => import('./admin/AdminApp'))

const SECTION_IDS = ['acasa', 'despre', 'galerie', 'contact']

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return undefined
    }

    const id = decodeURIComponent(hash.slice(1))
    let tries = 0
    let frame = 0

    const tick = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
      if (tries++ < 30) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

function Layout() {
  const { pathname } = useLocation()
  const sectionActive = useActiveSection(SECTION_IDS)
  const active = pathname === '/meniu' ? 'meniu' : sectionActive
  useReveal(pathname)

  return (
    <div className="page">
      <Nav active={active} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route
          path="/admin/*"
          element={
            <Suspense fallback={null}>
              <AdminApp />
            </Suspense>
          }
        />
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/meniu" element={<MenuPage />} />
        </Route>
      </Routes>
    </>
  )
}
