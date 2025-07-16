# Proyecto React: Servicios de Seguridad Informática

Este proyecto es una SPA (Single Page Application) creada con React que simula una página web dedicada a ofrecer **servicios de seguridad informática**, como análisis de vulnerabilidades, pruebas de penetración, asesorías y soluciones especializadas. 

Está dividida en múltiples secciones: Inicio, Nosotros, Servicios, Contacto, Extra y un nuevo componente de **Noticias** que se conecta a una API local.

Utiliza componentes reutilizables, React Hooks (`useState`, `useEffect`) y un diseño visual con CSS y Bootstrap.

---

## 🌐 Test WEB  
https://perserver.netlify.app/

---

## 🧩 Estructura de Componentes

### 🔹 Navbar (`Navbar.js`)
- Barra de navegación fija para cambiar de sección sin recargar.
- Controla la sección activa mediante `useState`.

---

### 🔹 Inicio (`Inicio.js`)
- Página principal con mensaje de bienvenida.
- Tarjetas con imágenes y descripción de servicios de ciberseguridad.

---

### 🔹 Nosotros (`Nosotros.js`)
- Presenta la misión, visión y valores de la empresa.
- Uso de íconos e información estática.

---

### 🔹 Servicios (`Servicios.js`)
- Lista de servicios ofrecidos como:
  - Análisis de vulnerabilidades
  - Pentesting
  - Auditorías
  - Asesoría normativa

---

### 🔹 Contacto (`Contacto.js`)
- Formulario funcional con validación en cliente.
- Uso de checkbox, select, date y otros inputs.
- Guarda los datos en consola al enviar.

---

### 🔹 Extra (`Extra.js`)
- Sistema CRUD para tareas o notas.
- Utiliza `localStorage` para persistencia de datos.

---

### 🔹 Noticias (`Noticias.jsx`)
- Componente dinámico que se conecta a una API REST simulada en `http://localhost:5000/api/noticias`.
- Carga y muestra noticias sobre vulnerabilidades con detalles como título, descripción, severidad y fecha.

#### Funcionalidades:
- Fetch a la API usando `useEffect`.
- Manejo de estado con `useState`.
- Renderizado de tarjetas con datos dinámicos.
- Manejo de errores de red con `.catch()`.

#### Estructura esperada desde la API:
```json
[
  {
    "id": 1,
    "titulo": "Vulnerabilidad crítica en Apache",
    "descripcion": "Se detectó una vulnerabilidad crítica que permite ejecución remota de código.",
    "severidad": "Alta",
    "fecha": "2025-07-14",
    "imagen": "https://ejemplo.com/imagen.jpg"
  }
]
