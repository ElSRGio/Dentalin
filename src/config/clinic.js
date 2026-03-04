// ============================================================
// CONFIGURACIÓN CENTRAL DE LA CLÍNICA
// ✏️  Para cambiar el teléfono solo modifica los campos
//     phone, whatsapp y phoneDisplay de esta sección.
//     El cambio se reflejará automáticamente en toda la web.
// ============================================================
export const clinicConfig = {
  name: 'Dentalin',
  tagline: 'Tu Sonrisa, Tu Confianza',

  // ── CONTACTO ────────────────────────────────────────────
  // whatsapp  → número sin "+", sin espacios (formato internacional)
  // phone     → mismo número con "+" para el href tel:
  // phoneDisplay → formato visual que se muestra al usuario
  whatsapp: '522212027532',
  phone: '+522212027532',
  phoneDisplay: '+52 221 202 7532',
  email: 'info@dentalin.com',

  // ── UBICACIÓN ───────────────────────────────────────────
  address: 'Av. 5 de Mayo #920, 3ra Sección',
  city: 'Huejotzingo, Puebla',
  
  // Horarios
  hours: {
    weekday: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Cerrado',
    emergency: '24/7'
  },
  
  // Redes sociales
  social: {
    facebook: 'https://facebook.com/dentalin',
    instagram: 'https://instagram.com/dentalin',
    linkedin: 'https://linkedin.com/company/dentalin',
    twitter: 'https://twitter.com/dentalin',
    tiktok: 'https://tiktok.com/@dentalin'
  },
  
  // SEO
  seoKeywords: [
    'Dentista en [Ciudad]',
    'Mejor clínica dental',
    'Odontología profesional',
    'Implantes dentales',
    'Blanqueamiento dental',
    'Ortodoncia',
    'Urgencias dentales',
    'Servicios dentales',
    'Clínica dental moderna',
    'Sonrisa perfecta'
  ],
  
  // Información general
  foundedYear: 2009,
  testimonials: 5000,
  satisfactionRate: 98,
  experience: 15,
};

export default clinicConfig;
