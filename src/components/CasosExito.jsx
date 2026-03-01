export default function CasosExito() {
  const casos = [
    {
      id: 1,
      nombre: 'María García',
      edad: '34 años',
      caso: 'Estética Dental',
      testimonio: 'Mi sonrisa cambió completamente. No solo mejoré mi estética, sino también mi autoconfianza. Los doctores son increíbles.',
      calificacion: 5,
      imagen: '👩‍💼',
    },
    {
      id: 2,
      nombre: 'Juan Pérez',
      edad: '45 años',
      caso: 'Implantes Dentales',
      testimonio: 'Después de 3 años sin sonreír, volví a ser yo. Los implantes se ven completamente naturales y la recuperación fue rápida.',
      calificacion: 5,
      imagen: '👨‍💼',
    },
    {
      id: 3,
      nombre: 'Laura Rodríguez',
      edad: '28 años',
      caso: 'Blanqueamiento',
      testimonio: 'Resultados extraordinarios en poco tiempo. Mi sonrisa brilla ahora y me siento mucho más segura en mis fotos.',
      calificacion: 5,
      imagen: '👩‍🦰',
    },
    {
      id: 4,
      nombre: 'Carlos López',
      edad: '55 años',
      caso: 'Rehabilitación Oral',
      testimonio: 'Creía que había perdido la batalla. El equipo de Dentalin me devolvió la confianza y la capacidad de disfrutar la comida.',
      calificacion: 5,
      imagen: '👨‍🦳',
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400">⭐</span>
        ))}
      </div>
    );
  };

  return (
    <section id="casos" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">✨ CASOS DE ÉXITO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-500 bg-clip-text text-transparent">Historias que Transforman</span>
            <br />
            <span className="text-gray-900">Sonrisas que Inspiran</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conoce las experiencias reales de nuestros pacientes. Tu sonrisa podría ser la próxima.
          </p>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {casos.map((caso) => (
            <div key={caso.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow border-t-4 border-fuchsia-500 group">
              {/* Encabezado del caso */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{caso.imagen}</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{caso.nombre}</h4>
                  <p className="text-xs text-gray-600">{caso.edad}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-3">
                {renderStars(caso.calificacion)}
              </div>

              {/* Badge de caso */}
              <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full mb-4">
                {caso.caso}
              </span>

              {/* Testimonio */}
              <p className="text-gray-700 italic leading-relaxed text-sm">
                "{caso.testimonio}"
              </p>
            </div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="grid md:grid-cols-4 gap-8 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-500 rounded-2xl p-12 text-white mb-20">
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">500+</p>
            <p className="text-white/90 font-semibold">Pacientes Felices</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">100%</p>
            <p className="text-white/90 font-semibold">Satisfacción</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">8+</p>
            <p className="text-white/90 font-semibold">Años Experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">10</p>
            <p className="text-white/90 font-semibold">Especialidades</p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center space-y-6 bg-white rounded-2xl p-12 border border-cyan-100 shadow-lg">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-500 bg-clip-text text-transparent">
            ¿Tu Historia Será la Próxima?
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Únete a cientos de pacientes transformados que encontraron su sonrisa perfecta con nosotros en Huejotzolgo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="https://wa.me/5222120275320" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.719.738 5.371 2.138 7.697l-2.262 8.254 8.477-2.224c2.267 1.231 4.83 1.881 7.517 1.881 5.424 0 9.845-4.421 9.845-9.845 0-2.631-.997-5.109-2.813-7.013a9.798 9.798 0 00-6.952-2.748z"/>
              </svg>
              Agendar Cita Gratis
            </a>
            <button 
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all inline-flex items-center justify-center gap-2"
            >
              Ver Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
