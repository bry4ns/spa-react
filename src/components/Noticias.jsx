import React, { useEffect, useState } from 'react';

function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/noticias')
      .then(res => res.json())
      .then(data => setNoticias(data))
      .catch(error => console.error('Error al cargar las noticias:', error));
  }, []);

  return (
    <section id="noticias" className="seccion">
      <h2>Noticias de Vulnerabilidades</h2>
      <div className="tarjetas-fotos">
        {noticias.map(noticia => (
          <div key={noticia.id} className="tarjeta bg-transparent bg-black bg-gradient">
            {noticia.imagen && (
              <img
                src={noticia.imagen}
                alt={noticia.titulo}
                style={{ width: '100%', borderRadius: '5px', marginBottom: '1rem' }}
              />
            )}
            <h3>{noticia.titulo}</h3>
            <p>{noticia.descripcion}</p>
            <p><strong>Severidad:</strong> {noticia.severidad}</p>
            <p><strong>Fecha:</strong> {noticia.fecha}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Noticias;
