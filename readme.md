﻿# Proyecto React: Servicios Técnicos

Este proyecto es una SPA (Single Page Application) creada con React que simula una página web de servicios técnicos, como reparaciones, mantenimientos y soporte. Está dividida en múltiples secciones: Inicio, Nosotros, Servicios, Contacto y Extra. Utiliza componentes reutilizables y un diseño limpio con estilos CSS y bootstrap.

---

## 🌐 Test WEB
https://perserver.netlify.app/

## 🧩 Estructura de Componentes

### 🔹 Navbar (`Navbar.js`)
- Barra de navegación fija que permite cambiar de sección sin recargar.
- Controla la sección activa mediante `useState`.
- Utiliza botones `<li>` que cambian dinámicamente el DOM con React.

---

### 🔹 Inicio (`Inicio.js`)
- Página principal con un mensaje de bienvenida.
- Muestra tarjetas con imágenes y descripciones de los servicios.
- No contiene lógica, solo presentación.

---

### 🔹 Nosotros (`Nosotros.js`)
- Componente estático que explica la misión, visión y valores de la empresa.
- Contiene una lista con íconos representativos y párrafos explicativos.

---

### 🔹 Servicios (`Servicios.js`)
- Lista de servicios disponibles (reparaciones, mantenimiento, etc).
- Presentación simple dentro de una tarjeta.

---

### 🔹 Contacto (`Contacto.js`)
- Formulario funcional controlado con `useState`.
- Validación en el cliente (React) para todos los campos requeridos.
- Controles tipo checkbox, select, date, input.
- Muestra errores personalizados debajo de cada campo.
- Al enviarse, muestra un mensaje y guarda los datos en consola.

#### Estados utilizados:
- `form`: para manejar los datos del formulario.
- `errores`: para mostrar validaciones en pantalla.

#### Lógica clave:
- `handleChange`: actualiza el formulario.
- `handleSubmit`: valida y procesa los datos.

---

###  Extra (`Extra.js`)
- Sistema de **CRUD** (Crear, Leer, Actualizar, Eliminar) de notas o tareas.
- Utiliza `localStorage` para persistencia de datos.
- Se puede editar o eliminar cualquier elemento.

#### Estados utilizados:
- `items`: lista de elementos.
- `form`: campos del formulario.
- `modoEdicion` y `editIndex`: controlan la edición.

---

##  Hooks utilizados

- `useState`: manejar formularios, secciones activas y CRUD.
- `useEffect`: cargar y guardar datos en localStorage.

---

## 📁 Archivos importantes

- `App.js`: contiene la estructura principal y renderiza las secciones.
- `Navbar.js`: navegación.
- `Contacto.js`, `Extra.js`, `Nosotros.js`, `Servicios.js`, `Inicio.js`: cada sección.
- `style.css`: estilos globales.
- `informe_extra.md`: informe detallado del componente 


##
agradecimiento a uiverse.io por ahorrarme como 10 horas de diseño 
