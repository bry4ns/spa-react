import React from 'react';
import imagen1 from './images/aaa.webp'
import imagen2 from './images/bbb.jpg'
import imagen3 from './images/ccc.jpg'

function Inicio({ setSeccionActiva }) {
  return (
    <section className="seccion activa " id="inicio">
      <div className="tarjeta bg-black bg-gradient">
        <h1>Bienvenido a ServiciosJG</h1>
        <p>Servicio técnico con más de 10 años de experiencia.</p>
        <a  className="boton" onClick={() => setSeccionActiva('contacto')}>
          Contáctanos
        </a>
      </div>

      <div className="tarjetas-fotos ">
        <div className="tarjeta bg-transparent bg-black bg-gradient">
          <img src={imagen1} alt="Ejemplo 1" style={{ width: '100%', maxWidth: '300px' }} />
          <p>Reparación de notebooks y PCs.</p>
        </div>
        <div className="tarjeta bg-transparent bg-info bg-gradient">
          <img src={imagen2} alt="Ejemplo 2" style={{ width: '100%', maxWidth: '300px' }} />
          <p>Instalación y mantenimiento de racks</p>
        </div>
        <div className="tarjeta bg-transparent bg-info bg-gradient">
          <img src={imagen3} alt="Ejemplo 3" style={{ width: '100%', maxWidth: '300px' }} />
          <p>Diagnóstico y Mantenimiento</p>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
