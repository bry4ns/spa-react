// Importa React y el hook useState
import React, { useState } from 'react';
// Importa el componente de navegación
import Navbar from './components/Navbar';
// Importa el componente de la sección de inicio
import Inicio from './components/Inicio';
// Importa el componente de la sección nosotros
import Nosotros from './components/Nosotros';
// Importa el componente de la sección servicios
import Servicios from './components/Servicios';
// Importa el componente de la sección contacto
import Contacto from './components/Contacto';
// Importa el componente extra
import Extra from './components/Extra';
// Importa el componente del pie de página
import Bajo from './components/Bajo';
import Noticias from './components/Noticias';  
// Importa los estilos globales
import './styles.css'



// Componente principal de la aplicación
function App() {
  // Estado para controlar la sección activa
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  return (
    // Contenedor principal con estilos flex y altura mínima de la pantalla
    <div className="d-flex flex-column min-vh-100">
      {/* Barra de navegación, recibe la sección activa y la función para cambiarla */}
      <Navbar seccionActiva={seccionActiva} setSeccionActiva={setSeccionActiva} />
      
      {/* Contenido principal que cambia según la sección activa */}
      <main className="contenedor flex-fill">
        {/* Renderiza el componente correspondiente según la sección activa */}
        {seccionActiva === 'inicio' && <Inicio setSeccionActiva={setSeccionActiva} />}
        {seccionActiva === 'nosotros' && <Nosotros />}
        {seccionActiva === 'servicios' && <Servicios />}
        {seccionActiva === 'contacto' && <Contacto />}
        {seccionActiva === 'Extra' && <Extra />}
        {seccionActiva === 'noticias' && <Noticias />}
      </main>

      {/* Pie de página */}
      <Bajo />
    </div>
  );
}

export default App;

console.log(`⠀⠀⠀
  ⣴⣀⣤⣦⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢠⣴⠿⠛⣿⣿⠋⠻⣿⣟⠻⠿⠿⢿⣿⣿⣶⣶⡦⣤⣀⡀⠀
⢰⣿⣧⣴⣦⢿⣿⣷⡦⠘⣿⠀⠀⠀⠀⣹⠉⣿⣿⣿⣶⣬⣷⠀
⠘⠟⢻⣿⠋⠀⢿⣿⣷⣼⣿⣷⣤⣤⣴⣿⣿⣿⣿⣿⣿⣿⢿⠃
⠀⠀⢠⣿⣶⣶⣿⣿⣿⣿⠟⠉⠉⠙⠻⠟⡿⢻⢿⢻⡏⠏⠀⠀
⠀⣾⣿⣿⣿⣿⣿⣿⣿⣧⣤⣀⡀⠀⠀⠀⠁⠈⠘⠈⠀⠀⠀⠀
⠀⠈⠉⠳⣾⣿⣿⣿⣿⣿⣿⣿⣿⣦⣶⣄⢠⢰⣴⢠⠀⣄⠀⠀
⠀⠀⠀⠀⠈⠙⠿⣿⣝⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣷⡟⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⠛⠛⠛⠛⠛⠛⠻⠿⠟⠋⠀⠀⠀`);
