/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Dentalin - Colores del logotipo (nivel superior)
        fuchsia: {
          500: '#CF1A87',
          600: '#b01570',
        },
        cyan: {
          400: '#00A7E7',
          500: '#0091c9',
        },
        lime: {
          500: '#A4C639',
          600: '#8ba62a',
        },
        orange: {
          400: '#F28F20',
          500: '#d97d0a',
        },
        yellow: {
          400: '#F3CF1B',
          500: '#d4b10a',
        },
        navy: {
          700: '#1F3A66',
          800: '#162a4d',
        },
        celeste: {
          300: '#60BDDE',
          400: '#3aa3c7',
        },
        darkgray: {
          700: '#333333',
        },
        lightgray: {
          100: '#F5F5F5',
        },
      },
      animation: {
        // Animaciones de entrada
        fadeIn: 'fadeIn 0.8s ease-in',
        slideUp: 'slideUp 0.8s ease-out',
        slideDown: 'slideDown 0.8s ease-out',
        slideInLeft: 'slideInLeft 0.8s ease-out',
        slideInRight: 'slideInRight 0.8s ease-out',
        
        // Animaciones continuas
        floatUp: 'floatUp 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s infinite',
        bounce: 'bounce 1s infinite',
        
        // Animaciones de interacción
        scaleUp: 'scaleUp 0.3s ease-out',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(207, 26, 135, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(207, 26, 135, 0.6)' },
        },
      },
      
      // Transiciones personalizadas
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
        'box-shadow': 'box-shadow',
        'opacity': 'opacity',
        'transform': 'transform',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
