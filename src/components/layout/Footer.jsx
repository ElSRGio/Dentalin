import { clinicConfig } from '../../config/clinic';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Sección Principal */}
      <div className="py-20 md:py-32 border-t-4 border-cyan-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Información de Marca */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <div>
                  <h5 className="text-xl font-bold">Dentalin</h5>
                  <p className="text-xs text-gray-400">Clínica Odontológica</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Tu confianza es nuestra responsabilidad. Transformamos sonrisas y vidas desde 2015.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://www.facebook.com/clinicaodontologicadentalin" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition transform hover:scale-110" title="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/dentalin1" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition transform hover:scale-110" title="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.79.263-1.473.557-2.115 1.194-.643.643-.938 1.335-1.2 2.121-.266.789-.47 1.656-.53 2.946C.032 8.333.017 8.74 0 12s.015 3.667.072 4.947c.06 1.29.261 2.157.527 2.946.262.79.555 1.473 1.2 2.116.645.643 1.327.938 2.117 1.203.789.266 1.656.471 2.946.529C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.29-.06 2.157-.261 2.946-.527.79-.262 1.473-.555 2.116-1.2.643-.645.938-1.327 1.203-2.117.266-.789.471-1.656.529-2.946.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.29-.261-2.157-.527-2.946-.262-.79-.555-1.473-1.2-2.116C21.298 1.149 20.616.844 19.829.582c-.789-.262-1.656-.471-2.946-.529C15.667.032 15.26.017 12 0zm0 2.16c3.203 0 3.585.009 4.85.064 1.17.054 1.805.244 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.171.422.361 1.057.415 2.227.055 1.266.064 1.645.064 4.85s-.009 3.585-.064 4.85c-.054 1.17-.244 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.171-1.057.361-2.227.415-1.266.055-1.645.064-4.85.064s-3.585-.009-4.85-.064c-1.17-.054-1.805-.244-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.171-.422-.361-1.057-.415-2.227-.055-1.266-.064-1.645-.064-4.85s.009-3.585.064-4.85c.054-1.17.244-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.171 1.057-.361 2.227-.415 1.266-.055 1.645-.064 4.85-.064z"/>
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z"/>
                  </svg>
                </a>
                <a href={`https://wa.me/${clinicConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition transform hover:scale-110" title="WhatsApp">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.719.738 5.371 2.138 7.697l-2.262 8.254 8.477-2.224c2.267 1.231 4.83 1.881 7.517 1.881 5.424 0 9.845-4.421 9.845-9.845 0-2.631-.997-5.109-2.813-7.013a9.798 9.798 0 00-6.952-2.748z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-lg font-bold mb-6">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="#servicios" className="text-gray-400 hover:text-cyan-400 transition">Estética Dental</a></li>
                <li><a href="#servicios" className="text-gray-400 hover:text-cyan-400 transition">Pediatría</a></li>
                <li><a href="#servicios" className="text-gray-400 hover:text-cyan-400 transition">Cirugía Oral</a></li>
                <li><a href="#servicios" className="text-gray-400 hover:text-cyan-400 transition">Ortodoncia</a></li>
                <li><a href="#servicios" className="text-gray-400 hover:text-cyan-400 transition">Blanqueamiento</a></li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="text-lg font-bold mb-6">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-400 hover:text-cyan-400 transition">Inicio</a></li>
                <li><a href="#casos" className="text-gray-400 hover:text-cyan-400 transition">Casos de Éxito</a></li>
                <li><a href="#equipo" className="text-gray-400 hover:text-cyan-400 transition">Equipo</a></li>
                <li><a href="#servicios" className="text-gray-400 hover:text-cyan-400 transition">Tratamientos</a></li>
                <li><a href="#contacto" className="text-gray-400 hover:text-cyan-400 transition">Contacto</a></li>
              </ul>
            </div>

            {/* Contacto Rápido */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contacto</h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span>📍</span>
                  <div className="text-sm text-gray-400">
                    <p className="font-semibold text-white">Av. 5 de Mayo #920</p>
                    <p>{clinicConfig.city}</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span>📞</span>
                  <a href={`tel:${clinicConfig.phone}`} className="text-gray-400 hover:text-cyan-400 transition font-semibold">{clinicConfig.phoneDisplay}</a>
                </li>
                <li className="flex gap-2">
                  <span>📧</span>
                  <a href="mailto:dentalin123@hotmail.com" className="text-gray-400 hover:text-cyan-400 transition text-sm">dentalin123@hotmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Suscríbete a Nuestro Blog</h3>
                <p className="text-white/90">Tips de salud dental y promociones exclusivas</p>
              </div>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-3 rounded-lg outline-none text-gray-900"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-white text-fuchsia-600 font-semibold rounded-lg hover:bg-gray-100 transition"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Barra final */}
      <div className="border-t border-gray-800 py-6 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Clínica Odontológica Dentalin. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Hecho con <span className="text-fuchsia-500">❤️</span> por tus dentistas de confianza
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition">Privacidad</a>
              <a href="#" className="hover:text-cyan-400 transition">Términos</a>
              <a href="#contacto" className="hover:text-cyan-400 transition">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
