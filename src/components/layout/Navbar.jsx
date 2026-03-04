import { useState } from 'react';
import { clinicConfig } from '../../config/clinic';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-lg border-b-4 border-fuchsia-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('inicio')}>
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-fuchsia-500">Dentalin</h1>
              <p className="text-xs text-gray-600">Clínica Odontológica</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {['Inicio', 'Servicios', 'Equipo', 'Casos', 'Contacto'].map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-cyan-400 font-medium transition-colors"
              >
                {item}
              </button>
            ))}
            
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              Agendar Cita
            </button>

            <a href={`https://wa.me/${clinicConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.719.738 5.371 2.138 7.697l-2.262 8.254 8.477-2.224c2.267 1.231 4.83 1.881 7.517 1.881 5.424 0 9.845-4.421 9.845-9.845 0-2.631-.997-5.109-2.813-7.013a9.798 9.798 0 00-6.952-2.748z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t bg-gray-50 px-4 py-4 space-y-3">
            {['Inicio', 'Servicios', 'Equipo', 'Casos', 'Contacto'].map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left p-3 rounded hover:bg-cyan-400 hover:text-white text-gray-700 font-medium transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="w-full px-6 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white font-semibold rounded-lg">
              Agendar Cita
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
