# ⚡ Quick Start Guide - Dentalin

**¿Quieres ver tu página dental funcionando en 5 minutos?** Sigue esta guía rápida.

---

## 🚀 Los 5 Pasos Esenciales

### 1️⃣ Verificar Node.js (30 segundos)

Abre PowerShell y escribe:
```powershell
node --version
```

**Resultado esperado**: `v18.x.x` o superior

❌ **Si no ves versión**: Instala desde https://nodejs.org/ (LTS)

---

### 2️⃣ Instalar Dependencias (2 minutos)

```powershell
cd C:\Users\heria\OneDrive\Documentos\Proyectos\GASCA\Dentalin
npm install
```

⏳ Espera a que termine (verás muchas líneas)

---

### 3️⃣ Iniciar Servidor (10 segundos)

```powershell
npm run dev
```

🎉 **Ver resultado**: Abre en navegador → http://localhost:5173/

---

### 4️⃣ Personalizar tu Clínica (3 minutos)

**En VS Code**, abre `src/config.js` y reemplaza:
```javascript
phone: '+5491234567890'      // ← TU NÚMERO
whatsapp: '5491234567890'    // ← TU NÚMERO
email: 'info@dentalin.com'   // ← TU EMAIL
address: 'Tu dirección aquí'
```

**Guarda el archivo** (Ctrl+S) → Los cambios aparecen automáticamente

---

### 5️⃣ Hacer Build (1 minuto)

Cuando está listo para publicar:
```powershell
npm run build
```

✅ Tu página compilada estará en carpeta `dist/`

---

## 📝 Cambios Comunes (Copiar-Pegar)

### Agregar un Nuevo Testimonial

**Archivo**: `src/components/CasosExito.jsx`

Encuentra el array llamado `casos` y agrega:
```javascript
{
  id: 5,              // Número único
  nombre: 'Tu Nombre',
  edad: 'Tu edad',
  caso: 'Tipo de tratamiento',
  testimonio: 'Lo que pasó conmigo...',
  calificacion: 5,
  imagen: '👤',       // Emoji de persona
},
```

### Cambiar Colores Principales

**Archivo**: `tailwind.config.js`

Busca la sección `colors` y reemplaza los códigos hex:
```javascript
primary: {
  500: '#0ea5e9',  // ← Aquí cambias el azul cyan
}

dental: {
  DEFAULT: '#00bfa5',  // ← Aquí cambias el teal
}
```

### Actualizar Servicio

**Archivo**: `src/components/Servicios.jsx`

Encuentra el array `servicios` y edita lo que necesites:
```javascript
{
  titulo: 'Tu nuevo nombre',
  descripcion: 'Nueva descripción',
  beneficios: ['Nuevo beneficio 1', 'Nuevo beneficio 2'],
}
```

---

## 🔗 Enlaces Rápidos Importantes

| Recurso | Ubicación |
|---------|-----------|
| Cambiar números | `src/config.js` |
| Editar servicios | `src/components/Servicios.jsx` |
| Agregar testimonios | `src/components/CasosExito.jsx` |
| Cambiar colores | `tailwind.config.js` |
| Editar formulario | `src/components/Contacto.jsx` |

---

## 🆘 Problemas Comunes

### Problema: PowerShell no permite ejecutar comandos

**Solución**:
1. Abre PowerShell **como Administrador**
2. Ejecuta:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -CurrentUser
   ```
3. Escribe `Y` para sí

### Problema: `npm` no reconocido

**Solución**: Reinicia VS Code completamente (Ctrl+Shift+P → Reload Window)

### Problema: Los cambios no aparecer

**Solución**: 
1. Guarda el archivo (Ctrl+S)
2. Espera 2-3 segundos
3. Recarga navegador (F5)

### Problema: Error "Cannot find module"

**Solución**:
```powershell
rm -r node_modules
npm install
npm run dev
```

---

## 📱 Prueba tu Móvil

### Para verificar en tu teléfono:

1. Obtén tu IP local:
   ```powershell
   ipconfig
   ```
   Busca "IPv4 Address" (ej: 192.168.x.x)

2. En TV, desde otro dispositivo ve a:
   ```
   http://192.168.x.x:5173
   ```

3. Verifica que todo se ve bien en móvil

---

## 📤 Publicar tu Página

### Opción 1: Vercel (Gratis y Fácil)

```powershell
npm install -g vercel
vercel
```

Sigue las instrucciones → Tu página estará en vercel.app

### Opción 2: Netlify (También Gratis)

1. Ve a https://netlify.com
2. Haz login con GitHub
3. Conecta tu repositorio
4. ¡Listo!

### Opción 3: GitHub Pages

```powershell
npm run build
cd dist
git init
git add .
git commit -m "Deploy"
git branch -M gh-pages
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin gh-pages
```

---

## ✅ Checklist Antes de Publicar

- [ ] Cambié números de teléfono reales
- [ ] Actualicé email correcto
- [ ] Agregué testimonios de mis pacientes
- [ ] Puse dirección real
- [ ] Probé en móvil
- [ ] Probé todos los botones
- [ ] Formulario funciona
- [ ] WhatsApp abre correctamente

---

## 🎓 Siguientes Pasos

1. **Aprende Tailwind CSS** en 30 min: https://tailwindcss.com/docs
2. **Entiende React**: Video de 1 hora en YouTube "React para principiantes"
3. **Agrega Google Analytics**: https://analytics.google.com
4. **Mide resultados**: Seguimiento de clicks en WhatsApp

---

## 📞 Necesitas Ayuda?

### Documentación Completa del Proyecto

1. **README.md** - Todo sobre el proyecto
2. **COPYWRITING_UX_GUIDE.md** - Cómo escribir mejor
3. **INSTALLATION_GUIDE.md** - Instalación detallada
4. **PROJECT_STRUCTURE.md** - Estructura visual
5. **EXECUTIVE_SUMMARY.md** - Resumen de todo

**Busca en Google**: "[Tu problema] React Tailwind" → 99% lo encontrarás

---

## 🎉 ¡Listo!

Tu página web profesional de clínica dental está lista. 

**Puntos clave**:
✅ Moderna y profesional
✅ 100% responsive
✅ Rápida de cargar
✅ Optimizada para conversión
✅ SEO local integrado

---

**¡A transformar sonrisas digitalmente! 😁**
