import { useEffect, useState } from 'react';
import { clinicConfig } from '../../config/clinic';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="w-full py-20 md:py-32 bg-gradient-to-br from-white via-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Texto */}
          <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">
              🦷 Clínica Odontológica Dentalin
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-500 bg-clip-text text-transparent">
                Desbloquea la Confianza
              </span>
              <br />
              <span className="text-gray-900">de una Sonrisa Sana y Brillante</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              En Clínica Odontológica Dentalin, transformamos sonrisas con tecnología de punta y atención de calidad.
              <span className="block mt-2 font-semibold text-cyan-600">Con más de 8 años de experiencia, somos sus aliados en salud dental.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={`https://wa.me/${clinicConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-center">
                Tu Primera Consulta Gratis
              </a>
              <button onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all text-center">
                Ver Tratamientos
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div><p className="text-3xl font-bold text-fuchsia-500">500+</p><p className="text-sm text-gray-600">Sonrisas Felices</p></div>
              <div><p className="text-3xl font-bold text-fuchsia-500">8+</p><p className="text-sm text-gray-600">Años Exp.</p></div>
              <div><p className="text-3xl font-bold text-fuchsia-500">100%</p><p className="text-sm text-gray-600">Satisfacción</p></div>
            </div>
          </div>

          {/* Imagen */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-xl w-full aspect-square md:aspect-auto md:h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-lime-500 opacity-30" />
                <div className="relative z-10 text-white text-center">
                  <svg className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 opacity-90" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <p className="text-lg md:text-xl font-bold">Dra. Linares</p>
                  <p className="text-sm md:text-base opacity-90">Odontóloga General</p>
                  <p className="text-xs md:text-sm mt-2 opacity-80">Especialista en Estética Dental</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="text-xs font-semibold text-cyan-600">Certificada</p>
                  <p className="text-sm font-bold text-gray-900">COOE</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="text-xs font-semibold text-fuchsia-600">Especialista en</p>
                  <p className="text-sm font-bold text-gray-900">Estética</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-12 md:mt-20">
        <div className="animate-bounce text-cyan-600">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
