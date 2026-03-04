import { clinicConfig } from '../../config/clinic';

export default function Servicios() {
  const servicios = [
    { id: 1, titulo: 'Estética Dental', icon: '✨', desc: 'Blanqueamiento, carillas y diseño de sonrisa' },
    { id: 2, titulo: 'Pediatría', icon: '👶', desc: 'Cuidado dental especializado para niños' },
    { id: 3, titulo: 'Rehabilitación Oral', icon: '🦷', desc: 'Restauraciones completas y avanzadas' },
    { id: 4, titulo: 'Limpieza Dental', icon: '🧹', desc: 'Profilaxis profesional y remoción de sarro' },
    { id: 5, titulo: 'Blanqueamiento', icon: '💎', desc: 'Tratamiento profesional de blanqueamiento' },
    { id: 6, titulo: 'Ortodoncia', icon: '📌', desc: 'Correctores y alineadores de dientes' },
    { id: 7, titulo: 'Cirugía Oral', icon: '🏥', desc: 'Extracciones e implantes con tecnología 3D' },
    { id: 8, titulo: 'Periodoncia', icon: '🫧', desc: 'Tratamiento de encías y enfermedades' },
    { id: 9, titulo: 'Prótesis Dental', icon: '🦴', desc: 'Prótesis completas y parciales' },
    { id: 10, titulo: 'Endodoncia', icon: '⚕️', desc: 'Tratamiento de conductos radiculares' },
  ];

  return (
    <section id="servicios" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">
            💼 NUESTROS SERVICIOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            10 Especialidades Dentales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos servicios odontológicos completos con tecnología de punta.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {servicios.map((s) => (
            <div key={s.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-fuchsia-500">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{s.titulo}</h3>
              <p className="text-sm text-gray-600 mb-4">{s.desc}</p>
              <a href={`https://wa.me/${clinicConfig.whatsapp}`} className="text-cyan-400 hover:text-fuchsia-500 font-semibold text-sm">
                Consultar →
              </a>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-white rounded-xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Por Qué Elegir Dentalin?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-bold text-gray-900">Mejor Clínica</h4>
              <p className="text-sm text-gray-600">Reconocida por excelencia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📍</div>
              <h4 className="font-bold text-gray-900">Ubicación Céntrica</h4>
              <p className="text-sm text-gray-600">Huejotzolgo, Puebla</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚑</div>
              <h4 className="font-bold text-gray-900">Atención Rápida</h4>
              <p className="text-sm text-gray-600">Citas sin esperas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💎</div>
              <h4 className="font-bold text-gray-900">Tecnología Avanzada</h4>
              <p className="text-sm text-gray-600">Equipos modernos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
