import React from 'react';
import imagen1 from './images/aaa.png'
import imagen2 from './images/bbb.png'
import imagen3 from './images/ccc.png'
import Button from './Boton';

function Inicio({ setSeccionActiva }) {
  return (
    <section className="seccion activa" id="inicio">
      <div className="tarjeta bg-black bg-gradient">
        <h1>Bienvenido a SeguridadJG</h1>
        <p>Protegiendo la información y la infraestructura de pymes y empresas desde hace más de 10 años.</p>
        <div onClick={() => setSeccionActiva('contacto')}>
          <Button />
        </div>
      </div>

      <div className="tarjetas-fotos">
        <div className="tarjeta bg-transparent bg-black bg-gradient">
          <img src={imagen1} alt="Mentoría" style={{ width: '100%', maxWidth: '300px' }} />
          <p>Asesoría estratégica en ciberseguridad y buenas prácticas digitales.</p>
        </div>
        <div className="tarjeta bg-transparent bg-info bg-gradient">
          <img src={imagen3} alt="Seguridad" style={{ width: '100%', maxWidth: '300px' }} />
          <p>Protección integral ante amenazas digitales para empresas y pymes.</p>
        </div>
        <div className="tarjeta bg-transparent bg-info bg-gradient">
          <img src={imagen2} alt="Mantenimiento" style={{ width: '100%', maxWidth: '300px' }} />
          <p>Auditoría, diagnóstico y mantenimiento de infraestructura tecnológica.</p>
        </div>
      </div>
    </section>
  );
}

export default Inicio;

