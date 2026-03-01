# 🚀 Guía de Instalación y Deployment - Dentalin

## Índice
1. [Requisitos Previos](#requisitos-previos)
2. [Instalación Local](#instalación-local)
3. [Configuración](#configuración)
4. [Desarrollo](#desarrollo)
5. [Build y Production](#build-y-production)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

---

## 📋 Requisitos Previos

### Software Requerido
```
Node.js:    >= 16.0.0  (LTS)
npm:        >= 8.0.0
Git:        >= 2.0.0
```

### Verificar Instalación
```bash
node --version      # Debe ser v16.x.x o mayor
npm --version       # Debe ser 8.x.x o mayor
git --version       # Cualquier versión reciente
```

### Si no tienes Node.js
1. Descarga desde https://nodejs.org/
2. Elige LTS (Long Term Support)
3. Instala siguiendo el instalador
4. Reinicia tu terminal

---

## 📥 Instalación Local

### Paso 1: Clonar o descargar el proyecto
```bash
# Si tienes acceso a Git
cd c:\Users\heria\OneDrive\Documentos\Proyectos\GASCA

# Ya estás en Dentalin
```

### Paso 2: Instalar dependencias
```bash
# Navega a la carpeta del proyecto
cd Dentalin

# Instala todas las librerías
npm install

# Verificar que se instalaron correctamente
npm list
```

**Salida esperada**:
```
dentalin@0.0.0 C:\Users\...\Dentalin
├── react@19.2.0
├── react-dom@19.2.0
├── tailwindcss (dev)
├── vite (dev)
└── otras librerías...
```

### Paso 3: Instalar Tailwind CSS (si no está en package.json)
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Archivo que se crea**: `tailwind.config.js` y `postcss.config.js`

---

## ⚙️ Configuración

### 1. Actualizar Datos de Contacto

Editar **`src/config.js`**:
```javascript
export const clinicConfig = {
  phone: '+TU_NÚMERO_AQUÍ',
  email: 'tu-email@dentalin.com',
  whatsapp: 'TU_NÚMERO_SIN_SÍMBOLOS',
  
  address: 'Tu dirección real',
  city: 'Tu ciudad',
  // ... más datos
};
```

### 2. Actualizar Números en Componentes

Buscar y reemplazar en todos los componentes:
```javascript
// Buscar: +5491234567890
// Reemplazar con: +TU_NÚMERO_REAL
```

**Archivos afectados**:
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/Contacto.jsx`
- `src/components/CasosExito.jsx`
- `src/components/Footer.jsx`

### 3. Personalizar Contenido

**Servicios**: Editar `src/components/Servicios.jsx`
```javascript
const servicios = [
  {
    id: 1,
    categoria: 'Tu Especialidad',
    titulo: 'Tu Título',
    descripcion: 'Tu descripción',
    beneficios: ['Beneficio 1', 'Beneficio 2'],
  },
  // ...
];
```

**Testimonios**: Editar `src/components/CasosExito.jsx`
```javascript
const casos = [
  {
    nombre: 'Nombre Paciente',
    testimonio: 'Su testimonio aquí',
    caso: 'Tipo de tratamiento',
    // ...
  },
  // ...
];
```

### 4. Variables de Ambiente (Opcional - para Backend)

Si tienes backend, crear `.env.local`:
```env
VITE_API_URL=http://localhost:3000/api
VITE_WHATSAPP_NUMBER=5491234567890
VITE_FORM_ENDPOINT=https://formspree.io/f/YOUR_KEY
```

Usar en componentes:
```javascript
const API_URL = import.meta.env.VITE_API_URL;
```

---

## 💻 Desarrollo

### Iniciar Servidor de Desarrollo
```bash
npm run dev
```

**Salida esperada**:
```
VITE v8.0.0  ready in 234 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

### Acceder a la Aplicación
1. Abre el navegador
2. Ve a: http://localhost:5173/
3. Verás la página cargando en tiempo real

### Hot Module Replacement (HMR)
- Los cambios se reflejan automáticamente
- No necesitas recargar la página
- Los estilos se actualizan al instante

### Debugging
```bash
# En VS Code, abre la terminal integrada
# F12 → Abre Developer Tools
# Console → Tu navegador mostrará errores
```

---

## 🏗️ Build y Production

### Compilar para Producción
```bash
npm run build
```

**Salida esperada**:
```
vite v8.0.0 building for production...
✓ 125 modules transformed.
dist/index.html                    0.60 kB │ gzip:   0.30 kB
dist/assets/index-xxxxx.js     185.92 kB │ gzip:  58.30 kB

✓ built in 2.34s
```

**Archivos generados** (en carpeta `dist/`):
- `index.html` - Tu página principal
- `assets/index-[hash].js` - JavaScript minificado
- `assets/style-[hash].css` - CSS minificado

### Previsualizar Build Localmente
```bash
npm run preview
```

**Acceder a**: http://localhost:4173/

---

## 🚀 Deployment

### Opción 1: Vercel (Recomendado - Gratis)

**Ventajas**:
- Gratis para proyectos públicos
- Deploys automáticos desde Git
- Muy rápido (CDN global)
- Dominio personalizado

**Pasos**:
```bash
# 1. Ir a https://vercel.com
# 2. Conectar tu GitHub
# 3. Importar tu repositorio
# 4. Click en "Deploy"
# 5. Tu sitio estará en vercel.app

# Dominio personalizado:
# 1. En Vercel → Proyecto → Settings → Domains
# 2. Agregar tu dominio
# 3. Configurar DNS (instrucciones en Vercel)
```

**Comando CLI**:
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deployar
vercel
```

### Opción 2: Netlify

**Pasos**:
```bash
# 1. Ir a https://netlify.com
# 2. Login con GitHub
# 3. Crear sitio nuevo
# 4. Conectar tu repositorio
# 5. Build command: npm run build
# 6. Directorio: dist
# 7. Deploy
```

### Opción 3: GitHub Pages

```bash
# Editar vite.config.js
export default {
  base: '/Dentalin/', // Si es /username/repo-name
  // ...
}

# Instalar gh-pages
npm install --save-dev gh-pages

# Editar package.json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# Deploy
npm run deploy
```

### Opción 4: Servidor Propio (Advanced)

**Requiere hosting con Node.js/Node**

```bash
# 1. Compilar
npm run build

# 2. Transferir carpeta 'dist' a tu servidor
# 3. Configurar servidor web (Nginx/Apache)

# Nginx config ejemplo:
server {
    listen 80;
    server_name dentalin.com;
    
    root /var/www/dentalin/dist;
    
    location / {
        try_files $uri /index.html;
    }
}
```

---

## 🔒 Configuración de Producción

### Cosas Importantes Antes de Ir Live

1. **Google Analytics**
```html
<!-- Agregar a index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

2. **Meta Tags para Social Media**
```html
<!-- En index.html <head> -->
<meta property="og:title" content="Dentalin - Clínica Dental">
<meta property="og:description" content="Tu sonrisa, tu confianza">
<meta property="og:image" content="/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

3. **Favicon**
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

4. **Robots.txt** (crear en `public/robots.txt`)
```
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://dentalin.com/sitemap.xml
```

5. **Sitemap.xml** (herramienta: XML Sitemap Generator)

6. **SSL/HTTPS**
- Vercel/Netlify incluyen SSL gratis
- Servidor propio: usar Let's Encrypt

---

## 📧 Sistema de Formularios

### Opción 1: Formspree (No-code)

```javascript
// En Contacto.jsx
const handleSubmit = (e) => {
  e.preventDefault();
  
  // Enviar a Formspree
  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(res => {
    if (res.ok) alert('Mensaje enviado!');
  })
  .catch(err => alert('Error: ' + err));
};
```

1. Ir a https://formspree.io
2. Crear formulario
3. Obtener ID
4. Reemplazar en código

### Opción 2: EmailJS (Más control)

```bash
npm install @emailjs/browser
```

```javascript
import emailjs from '@emailjs/browser';

// Inicializar (agregar en main.jsx)
emailjs.init('YOUR_PUBLIC_KEY');

// En componente
const handleSubmit = async (e) => {
  e.preventDefault();
  
  await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
    to_email: 'info@dentalin.com',
    from_name: formData.nombre,
    message: formData.mensaje,
    // ...
  });
};
```

### Opción 3: Backend Personalizado

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    alert('Mensaje enviado!');
  }
};
```

---

## 🐛 Troubleshooting

### Problema: "npm: No se puede cargar el archivo PowerShell"

**Solución**:
```powershell
# En PowerShell como Admin
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Luego
npm install
```

### Problema: Puerto 5173 ya está en uso

**Solución**:
```bash
# Usar puerto diferente
npm run dev -- --port 5174

# O matar proceso
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F
```

### Problema: Tailwind CSS no se aplica

**Checklist**:
- [ ] `tailwind.config.js` existe
- [ ] `src/index.css` tiene `@tailwind` directives
- [ ] `App.jsx` importa `index.css`
- [ ] `main.jsx` importa `App`
- [ ] Reiniciaste dev server `npm run dev`

### Problema: Componentes no cargan

**Verificar**:
```javascript
// Uso incorrecto
import Navbar from './components/navbar' // ❌ Minúscula

// Uso correcto
import Navbar from './components/Navbar' // ✅ Mayúscula
```

### Problema: Errores de compilación

```bash
# Limpiar caché
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📊 Optimizaciones Finales

### Comprimir Imágenes
```bash
# Instalar herramienta
npm install -D sharp

# Comprimir automáticamente
# O usar: https://tinypng.com
```

### Minificar CSS/JS
```bash
# Ya está incluido en build de Vite
npm run build
# Genera archivos minificados automáticamente
```

### Lazy Loading de Imágenes
```html
<img src="..." loading="lazy" alt="...">
```

---

## 🔍 Testing

### Lighthouse (En navegador)
```
1. Abre DevTools (F12)
2. Pestaña "Lighthouse"
3. Click "Analyze page load"
4. Revisa Score
```

**Objetivo**: 90+ en todos los apartados

### Responsive Testing
```bash
# En DevTools
F12 → Click en device icon → Select device
```

---

## ✅ Checklist Pre-producción

- [ ] Todos los números de teléfono actualizados
- [ ] Testimonios reales agregados
- [ ] Fotos de clínica integradas
- [ ] Favicon personalizado
- [ ] Meta tags para redes sociales
- [ ] Robots.txt creado
- [ ] Sitemap generado
- [ ] Google Analytics configurado
- [ ] Formularios funcionando
- [ ] SSL/HTTPS activo
- [ ] Lighthouse score > 90
- [ ] Mobile testing completado
- [ ] Performance audit pasada
- [ ] Accesibilidad WCAG 2.1
- [ ] Dominio personalizado configurado

---

## 🚦 Próximos Pasos

1. **Instalar y ejecutar localmente** → `npm install && npm run dev`
2. **Personalizar contenido** → Datos, fotos, testimonios
3. **Configurar formularios** → Formspree, EmailJS o backend
4. **Hacer build** → `npm run build`
5. **Deployar** → Vercel, Netlify o servidor propio
6. **Monitorear** → Google Analytics, conversiones

---

## 📞 Soporte

Para reportar bugs o pedir ayuda:
1. Revisa los logs en console (F12)
2. Busca en Google si alguien tuvo el mismo problema
3. Si es específico del proyecto, contacta al equipo dev

---

**Última actualización: Feb 2026**
