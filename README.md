# Portafolio — Emiliano Montoya Velázquez

Portafolio personal en **React + Vite**. Listo para deploy en Vercel, Netlify o GitHub Pages.

## 🚀 Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

## 📦 Build para producción

```bash
npm run build
```

## 🌐 Deploy en Vercel (solución al error anterior)

Este proyecto usa **Vite** en lugar de react-scripts, lo que resuelve el error
`Permission denied` que aparecía en Vercel.

### Pasos:
1. Sube este proyecto a un repositorio en GitHub
2. Ve a [vercel.com](https://vercel.com) → New Project → importa el repo
3. Vercel detecta Vite automáticamente — no necesitas cambiar nada
4. Haz clic en **Deploy** ✅

### Configuración de Vercel (ya detectada automáticamente):
- **Framework**: Vite
- **Build command**: `npm run build`
- **Output directory**: `dist`

## ✏️ Personalizar contenido

Todo está en `src/data.js`. Edita ese archivo para:
- Agregar proyectos nuevos
- Actualizar habilidades
- Cambiar datos de contacto

## 📁 Estructura

```
├── index.html              ← Vite entry point (raíz del proyecto)
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data.js             ← EDITA AQUÍ tu info
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Contact.jsx
        └── Footer.jsx
```
