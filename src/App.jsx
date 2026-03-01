import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import CasosExito from './components/CasosExito'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

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
