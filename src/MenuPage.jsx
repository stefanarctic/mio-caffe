import { useEffect, useState } from 'react'
import Menu from './Menu'
import MenuPopup from './MenuPopup'

export default function MenuPage() {
  const [filter, setFilter] = useState('toate')
  const [menuItem, setMenuItem] = useState(null)

  useEffect(() => {
    document.title = 'Meniu · Mio Caffè'
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && menuItem) setMenuItem(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuItem])

  useEffect(() => {
    document.body.style.overflow = menuItem ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuItem])

  return (
    <>
      <Menu active={filter} onFilter={setFilter} onItemClick={setMenuItem} standalone />
      <MenuPopup item={menuItem} onClose={() => setMenuItem(null)} />
    </>
  )
}
