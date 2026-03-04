import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">📞 CONTÁCTANOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-500 bg-clip-text text-transparent">Estamos Aquí para Ti</span>
            <br />
            <span className="text-gray-900">en Huejotzingo, Puebla</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Agendar tu cita es fácil. Elige el método que más te convenga.
          </p>
        </div>

        {/* Opciones de Contacto Rápido */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* WhatsApp */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-green-500 text-center group">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-6">Reserva directa y consultas rápidas</p>
            <a href="https://wa.me/522212027532" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-full px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.719.738 5.371 2.138 7.697l-2.262 8.254 8.477-2.224c2.267 1.231 4.83 1.881 7.517 1.881 5.424 0 9.845-4.421 9.845-9.845 0-2.631-.997-5.109-2.813-7.013a9.798 9.798 0 00-6.952-2.748z"/>
              </svg>
              Enviar
            </a>
          </div>

          {/* Teléfono */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-cyan-500 text-center group">
            <div className="text-5xl mb-4">☎️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
            <p className="text-gray-600 mb-6">Llámanos para agendar</p>
            <a href="tel:+5222120275320" className="w-full px-6 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all block">
              +52 221 202 7532
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-fuchsia-500 text-center group">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-6">Envíanos tus consultas</p>
            <a href="mailto:dentalin123@hotmail.com" className="w-full px-6 py-2 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all block">
              dentalin123@hotmail.com
            </a>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-500 bg-clip-text text-transparent mb-8 text-center">Envíanos un Mensaje</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Nombre Completo *</label>
                <input 
                  type="text" 
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Teléfono</label>
              <input 
                type="tel" 
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
                placeholder="+52 22 1202 7532"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Asunto</label>
              <select 
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
              >
                <option value="">Selecciona un asunto</option>
                <option value="cita">Agendar Cita</option>
                <option value="estetica">Estética Dental</option>
                <option value="ortodoncia">Ortodoncia</option>
                <option value="urgencia">Urgencia Dental</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Mensaje</label>
              <textarea 
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition resize-none"
                placeholder="Cuéntanos tu caso..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              Enviar Mensaje
            </button>

            <p className="text-xs text-gray-600 text-center">
              Nos comprometemos a responder dentro de 24 horas.
            </p>
          </form>
        </div>

        {/* Información de ubicación y horarios */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">⏰ Horarios de Atención</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between">
                <span className="font-semibold">Lunes a Viernes:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Sábados:</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Domingos:</span>
                <span>Cerrado</span>
              </li>
              <li className="flex items-center gap-2 pt-4 border-t border-gray-300 mt-4">
                <span className="text-xl">🚑</span>
                <span className="font-semibold text-fuchsia-500">Urgencias: 24/7</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📍 Ubicación</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-2xl flex-shrink-0">🏥</span>
                <div>
                  <p className="font-semibold text-gray-900">Av. 5 de Mayo #920</p>
                  <p className="text-sm">3RA SECCIÓN, HUEJOTZINGO</p>
                  <p className="text-sm">PUEBLA, MÉXICO</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl flex-shrink-0">🅿️</span>
                <p className="font-semibold text-gray-900">Estacionamiento gratuito</p>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl flex-shrink-0">♿</span>
                <p className="font-semibold text-gray-900">Acceso para personas con movilidad reducida</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ubícanos en Google Maps</h3>
          <div className="rounded-2xl overflow-hidden shadow-lg h-96 border-4 border-cyan-400">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.8249477935467!2d-98.32456092346558!3d19.141180082597293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdb67c6c6c2c2d%3A0x6c8f6f6c6c6c6c6c!2sAv.%205%20de%20Mayo%20920%2C%20Huejotzolgo%2C%2072700%20Puebla!5e0!3m2!1ses!2smx!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Dentalin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
