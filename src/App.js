import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Extra from './components/Extra';
import Bajo from './components/Bajo';
import './styles.css'



function App() {
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar seccionActiva={seccionActiva} setSeccionActiva={setSeccionActiva} />
      
      <main className="contenedor flex-fill">
        {seccionActiva === 'inicio' && <Inicio setSeccionActiva={setSeccionActiva} />}
        {seccionActiva === 'nosotros' && <Nosotros />}
        {seccionActiva === 'servicios' && <Servicios />}
        {seccionActiva === 'contacto' && <Contacto />}
        {seccionActiva === 'Extra' && <Extra />}
      </main>

      <Bajo />
    </div>
  );
}

export default App;
