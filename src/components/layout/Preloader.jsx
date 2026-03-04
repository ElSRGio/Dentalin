import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-white to-fuchsia-500/5"></div>

      {/* Contenedor centrado */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo animado */}
        <div className="relative w-24 h-24">
          {/* Círculos rotativos */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-fuchsia-500 border-r-cyan-400 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-lime-500 border-r-orange-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
          
          {/* Contenido central */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-500 bg-clip-text text-transparent">D</span>
          </div>
        </div>

        {/* Texto con animación */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-fadeIn">Dentalin</h2>
          <p className="text-gray-600 text-sm animate-slideUp">Clínica Odontológica</p>
        </div>

        {/* Barras de carga */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-lime-500 animate-pulse"></div>
        </div>

        {/* Puntos animados (como en el logo) */}
        <div className="flex gap-3 mt-4">
          <div className="w-3 h-3 rounded-full bg-fuchsia-500 animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 rounded-full bg-lime-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          <div className="w-3 h-3 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: '0.6s' }}></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-bounce" style={{ animationDelay: '0.8s' }}></div>
        </div>
      </div>
    </div>
  );
}
