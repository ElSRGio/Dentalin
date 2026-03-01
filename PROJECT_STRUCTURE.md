# 🗂️ Estructura Visual del Proyecto Dentalin

## Árbol de Directorios Completo

```
Dentalin/
│
├── 📄 README.md                          # Documentación principal
├── 📄 COPYWRITING_UX_GUIDE.md            # Guía de copywriting y UX
├── 📄 INSTALLATION_GUIDE.md              # Guía de instalación y deployment
├── 📄 EXECUTIVE_SUMMARY.md               # Resumen ejecutivo del proyecto
├── 📄 PROJECT_STRUCTURE.md               # Este archivo
│
├── 📦 package.json                       # Dependencias y scripts
├── 📦 package-lock.json                  # Lock file
│
├── 🎨 vite.config.js                     # Configuración de Vite
├── 🎨 tailwind.config.js                 # Configuración de Tailwind
├── 🎨 postcss.config.js                  # Configuración de PostCSS
├── 🎨 eslint.config.js                   # Configuración de ESLint
│
├── 📂 public/                            # Archivos estáticos públicos
│   └── favicon.ico                       # Icono del sitio
│
├── 📂 src/                               # Código fuente principal
│   │
│   ├── 📄 main.jsx                       # Entry point React
│   ├── 📄 App.jsx                        # Componente raíz
│   ├── 📄 config.js                      # Configuración centralizada
│   │
│   ├── 🎨 index.css                      # Tailwind imports + utilidades
│   ├── 🎨 App.css                        # Vacío (usar Tailwind)
│   │
│   ├── 📂 components/                    # Componentes React
│   │   ├── Navbar.jsx                    # Navegación superior
│   │   ├── Hero.jsx                      # Sección principal hero
│   │   ├── Servicios.jsx                 # Grid de 3 servicios
│   │   ├── CasosExito.jsx                # Testimonios y casos
│   │   ├── Contacto.jsx                  # Formulario + info contacto
│   │   └── Footer.jsx                    # Pie con 4 columnas
│   │
│   ├── 📂 assets/                        # Recursos multimedia
│   │   ├── img/                          # Imágenes
│   │   │   ├── logo.svg
│   │   │   ├── clinic-photo.jpg
│   │   │   └── [más imágenes]
│   │   └── icons/                        # Iconos (reservado para futuros SVG)
│   │
│   └── 📂 utils/                         # Funciones utilitarias (si es necesario)
│
├── 📂 dist/                              # Build de producción (generado)
│   ├── index.html
│   └── assets/
│       ├── index-[hash].js
│       └── style-[hash].css
│
├── 📂 node_modules/                      # Dependencias (ignorar en Git)
│
└── 📄 .gitignore                         # Archivos a ignorar en Git
```

---

## 📊 Componentes y sus Responsabilidades

### 1. **Navbar.jsx**
```
┌─────────────────────────────────────────────────────────────┐
│  Logo  │  Inicio  │  Servicios  │  Casos  │  Contacto  │ 📱 │
└─────────────────────────────────────────────────────────────┘

Características:
✓ Sticky (siempre visible)
✓ Logo + Nombre clínica
✓ Links de navegación
✓ WhatsApp CTA
✓ Menú hamburguesa en móvil
✓ Scroll suave a secciones

Tamaño: ~120 líneas
Estado: useState para menú móvil
```

### 2. **Hero.jsx**
```
┌─────────────────────────────────────────────────────────────┐
│  Tu Sonrisa, Tu Confianza                                   │
│  [Descripción inspiradora]                                  │
│                                                             │
│  [Botón Cita Gratis]  [Botón WhatsApp]                     │
│                                                             │
│  📊 15+ años │ 5000+ pacientes │ 98% satisfacción         │
│                                                             │
│  [Modal de cita gratis cuando clickea]                     │
└─────────────────────────────────────────────────────────────┘

Características:
✓ Gradiente moderno (cyan → teal)
✓ Headline emocional
✓ Animaciones (fadeIn, slideUp)
✓ Modal interactivo
✓ Estadísticas de confianza
✓ 100% responsive

Tamaño: ~180 líneas
Estado: useState para modal
Animaciones: fadeIn, slideUp
```

### 3. **Servicios.jsx**
```
┌────────┐  ┌────────┐  ┌────────┐
│   ✨   │  │   👶   │  │   🏥   │
│ ESTÉTICA│  │ ODONTO-│  │ CIRUGÍA│
│ DENTAL │  │ PED.   │  │ ORAL   │
│        │  │        │  │        │
│ [Bene] │  │ [Bene] │  │ [Bene] │
└────────┘  └────────┘  └────────┘

Características:
✓ Grid 3 columnas (responsive)
✓ Hover effects (elevación + sombra)
✓ Iconos emoji
✓ Etiquetas de categoría
✓ Lista de beneficios
✓ SEO keywords integradas

Tamaño: ~120 líneas
Cards: 3 servicios (estático)
Responsive: 1 col (móvil) → 3 cols (desktop)
```

### 4. **CasosExito.jsx**
```
┌──────────────────────────────────────────────┐
│  Historias que Inspiran                      │
├──────────────────────────────────────────────┤
│ 👩‍🦰 María García        👨‍💼 Juan Pérez        │
│ "Mi sonrisa cambió"    "Volví a sonreír"    │
│ ⭐⭐⭐⭐⭐              ⭐⭐⭐⭐⭐            │
│                                              │
│ 👩‍🦱 Laura Rodríguez   👨‍🦳 Carlos López      │
│ "Resultados extraordinarios"                │
│ "Volví a confiar"                           │
├──────────────────────────────────────────────┤
│ ESTADÍSTICAS:                                │
│ 5000+ | 98% | 15+ años | 24/7              │
└──────────────────────────────────────────────┘

Características:
✓ Grid 4 columnas (responsive)
✓ Testimonios con emojis
✓ Rating stars (⭐)
✓ Historia breve
✓ Estadísticas globales
✓ Hover effects

Tamaño: ~140 líneas
Casos: 4 testimonios (estático)
Responsive: 1 col → 4 cols
```

### 5. **Contacto.jsx**
```
┌─────────────────────────────────────────────────┐
│  OPCIONES DE CONTACTO                           │
├───────────────┬─────────────┬─────────────────┤
│ 💬 WhatsApp   │ ☎️ Teléfono  │ 📧 Email       │
│ Chat Directo  │ +5491234567 │ info@dentalin  │
├─────────────────────────────────────────────────┤
│  FORMULARIO DE CONTACTO                         │
│  [Nombre] [Email]                              │
│  [Teléfono]                                    │
│  [Asunto] [Mensaje...]                        │
│  [Enviar]                                      │
├─────────────────────────────────────────────────┤
│ HORARIOS              │ UBICACIÓN              │
│ Lun-Vie: 8-18       │ Calle Principal 123    │
│ Sáb: 9-14           │ Estacionamiento ✓      │
│ Urgencias: 24/7     │ Accesibilidad ♿       │
└─────────────────────────────────────────────────┘

Características:
✓ 3 canales de contacto
✓ Formulario completo
✓ Validación HTML5
✓ Información práctica
✓ Horarios y ubicación
✓ Información de emergencia

Tamaño: ~180 líneas
Estado: useState para formulario
Campos: Nombre, Email, Tel, Asunto, Mensaje
```

### 6. **Footer.jsx**
```
┌────────────────────────────────────────────────────────────┐
│ 🔗 SERVICIOS   🏢 EMPRESA   ⚖️ LEGAL   📧 NEWSLETTER      │
│ • Estética     • Inicio     • Privacy  [Email] [Suscribir]│
│ • Odonto Ped   • Casos      • Terms    Actualiz. tips     │
│ • Cirugía      • Equipo     • GDPR                        │
│ • Implantes    • Blog       • Datos                       │
│ • Blanq.       • Contacto                                 │
├────────────────────────────────────────────────────────────┤
│ © 2026 Dentalin │ 📍 Ubicación │ [Redes Sociales]       │
└────────────────────────────────────────────────────────────┘

Características:
✓ 4 columnas de enlaces
✓ Newsletter signup
✓ Redes sociales
✓ Información legal
✓ Copyright
✓ Responsive (stack en móvil)

Tamaño: ~160 líneas
Columnas: Servicios, Empresa, Legal
Responsive: Stack (móvil) → 4 cols (desktop)
```

---

## 🔄 Flujo de Datos

```
App.jsx (raíz)
│
├── Navbar
│   └── Botón WhatsApp
│
├── Hero
│   ├── Btn "Primera Cita"
│   │   └── Modal (useState)
│   │       ├── Input Nombre
│   │       ├── Input Email
│   │       ├── Input Teléfono
│   │       ├── Select Tipo
│   │       ├── Btn Solicitar
│   │       └── Btn Cerrar
│   └── Btn "WhatsApp"
│
├── Servicios
│   ├── Array de servicios
│   │   ├── Servicio 1 (Estética)
│   │   ├── Servicio 2 (Odonto Ped)
│   │   └── Servicio 3 (Cirugía)
│   └── SEO info section
│
├── CasosExito
│   ├── Array de casos
│   │   ├── Caso 1
│   │   ├── Caso 2
│   │   ├── Caso 3
│   │   └── Caso 4
│   └── Estadísticas
│
├── Contacto
│   ├── Botones de contacto (WhatsApp, Tel, Email)
│   ├── Formulario (useState)
│   │   ├── Input Nombre
│   │   ├── Input Email
│   │   ├── Input Teléfono
│   │   ├── Select Asunto
│   │   ├── Textarea Mensaje
│   │   └── Btn Enviar
│   ├── Horarios
│   └── Ubicación
│
└── Footer
    ├── Links de servicios
    ├── Links de empresa
    ├── Links legales
    ├── Form newsletter
    └── Redes sociales
```

---

## 📐 Dimensiones y Breakpoints

### Contenedor Principal
```
Móvil (< 640px):     100% width (con padding 16px)
Tablet (640-1024px): max-width 90%
Desktop (1024px+):   max-width 1280px (max-w-7xl)
```

### Componentes Responsive

**Navbar**:
```
Móvil:    Logo + Hamburger
Tablet+:  Logo + Links + WhatsApp
```

**Hero**:
```
Móvil:    1 columna (texto solo)
Tablet+:  2 columnas (texto + imagen)
```

**Servicios**:
```
Móvil:    1 columna
Tablet:   2 columnas
Desktop:  3 columnas
```

**Contacto**:
```
Móvil:    Stack vertical
Tablet+:  2 columnas (téléfono, ubicación)
```

**Footer**:
```
Móvil:    1 columna (scroll)
Tablet:   2 columnas
Desktop:  4 columnas
```

---

## 🎨 Sistema de Colores - Uso por Componente

```
Navbar:               Background blanco, text gris, hover cyan
Hero:                Gradiente cyan→teal, texto blanco
Servicios:           Fondo light gray, cards blancas, borders cyan
Casos de Éxito:      Fondo blanco, badges yellow, stars yellow
Contacto:            Fondo light, cajas cyan y teal
Footer:              Fondo gray-900 (oscuro), text white
```

---

## 🎬 Animaciones Implementadas

### Global
```css
fadeIn (600ms)   - Entrada de secciones
slideUp (600ms)  - Elementos que "suben"
pulse            - CTA para llamar atención
```

### Hover States
```
Navbar links:     Color change + underline
Botones:          Elevation + color change + transform
Cards:            Elevación (translateY -8px) + sombra
Links:            Color gradual + underline animation
```

---

## 📦 Tamaño de Archivos

```
Navbar.jsx:      ~120 líneas
Hero.jsx:        ~180 líneas
Servicios.jsx:   ~120 líneas
CasosExito.jsx:  ~140 líneas
Contacto.jsx:    ~180 líneas
Footer.jsx:      ~160 líneas
─────────────────────────
TOTAL:           ~900 líneas de componentes

App.jsx:         ~20 líneas
config.js:       ~40 líneas
index.css:       ~70 líneas
─────────────────────────
TOTAL PROYECTO:  ~1,030 líneas
```

---

## 🚀 Orden de Carga

```
1. main.jsx
   └── App.jsx
       ├── Navbar (rendered first)
       ├── Hero (with animations)
       ├── Servicios (grid layout)
       ├── CasosExito (testimonials)
       ├── Contacto (forms)
       └── Footer (last)

2. index.css (Tailwind globals)
3. Tailwind utilities (on-demand)
```

---

## 🔗 Navegación Entre Secciones

```
Navbar              (ID: #inicio, #servicios, #casos, #contacto)
   ↓
Hero                (ID: #inicio)
   ├→ "Primera Cita" (Modal)
   └→ "WhatsApp"
   ↓
Servicios           (ID: #servicios)
   └→ Click "Consultar"
   ↓
Casos de Éxito      (ID: #casos)
   └→ Click "Agendar"
   ↓
Contacto            (ID: #contacto)
   ├→ WhatsApp direct
   ├→ Formulario
   ├→ Teléfono
   └→ Email
   ↓
Footer
   ├→ Links a servicios
   └→ Redes sociales
```

---

## 🛠️ Archivos de Configuración

### package.json
```json
{
  "scripts": {
    "dev": "vite",           // Inicia dev server
    "build": "vite build",   // Compila para producción
    "preview": "vite preview", // Previsualiza build
    "lint": "eslint ."       // Chequea errores
  },
  "dependencies": {
    "react": "^19.2.0",      // Core React
    "react-dom": "^19.2.0"   // React para DOM
  },
  "devDependencies": {
    "tailwindcss": "latest", // Estilos
    "vite": "^8.0.0",        // Build tool
    "@vitejs/plugin-react": "latest" // React plugin
  }
}
```

### tailwind.config.js
```javascript
{
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary, dental, accent // Colores custom
      },
      animation: {
        fadeIn, slideUp, pulse  // Animaciones custom
      }
    }
  }
}
```

---

## 📊 Estado de Componente

### Componentes con Estado Local
```
Hero.jsx          - showModal (useState)
Navbar.jsx        - isOpen (useState) 
Contacto.jsx      - formData (useState)
```

### Datos Estáticos
```
config.js         - Configuración clínica
Servicios.jsx     - Array de servicios
CasosExito.jsx    - Array de testimonios
```

---

## 🔍 SEO Structure

```html
<head>
  <title>Dentalin - Tu Sonrisa...</title>
  <meta name="description" content="Clínica dental...">
  <meta name="keywords" content="dentista, implantes...">
  <meta property="og:title" content="Dentalin">
  <meta property="og:image" content="/og.jpg">
</head>
<body>
  <header>                <!-- Navbar -->
  <main>
    <section id="inicio">  <!-- Hero -->
    <section id="servicios"><!-- Servicios -->
    <section id="casos">   <!-- Casos -->
    <section id="contacto"><!-- Contacto -->
  </main>
  <footer>                 <!-- Footer -->
</body>
```

---

## 📱 Mobile-First Approach

```
Desarrollo:
1. Diseñar para móvil primero
2. Expandir para tablet (md:)
3. Expandir para desktop (lg:)

Implementado en:
- Grid responsivos
- Menú hamburguesa
- Tamaños de fuente escalables
- Espacios flexibles
```

---

## 🎯 Puntos de Entrada de Usuario

```
1. Búsqueda Google (SEO)
   ↓
2. Landing en Hero
   ↓
3. Scroll → Servicios → Casos → Contacto
   ↓
4. Conversión (WhatsApp, Formulario, Email)
```

---

## 📋 Checklist de Componentes

- [x] Navbar (navegación sticky)
- [x] Hero (sección hero con CTAs)
- [x] Servicios (3 categorías)
- [x] Casos de Éxito (testimonios)
- [x] Contacto (múltiples canales)
- [x] Footer (información legal)
- [x] Configuración (datos centralizados)
- [x] Estilos (Tailwind completo)

---

**Documentación visual del proyecto Dentalin**
**Última actualización: Febrero 2026**
