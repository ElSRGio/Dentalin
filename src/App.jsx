import { useState, useEffect } from 'react'
import './styles/App.css'
import Preloader from './components/layout/Preloader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Servicios from './components/sections/Servicios'
import CasosExito from './components/sections/CasosExito'
import Contacto from './components/sections/Contacto'

function App() {
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showPreloader && <Preloader />}
      <main className="w-full">
        <Navbar />
        <Hero />
        <Servicios />
        <CasosExito />
        <Contacto />
        <Footer />
      </main>
    </>
  )
}

export default App
