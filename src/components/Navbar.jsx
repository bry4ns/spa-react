import React from 'react';

function Navbar({ setSeccionActiva, seccionActiva }) {
  const items = ['inicio', 'nosotros', 'servicios', 'contacto', 'Extra'];

  return (
    <nav className="contenedor">
      <img className='logo' src="./logo.png" alt="xd" />
      <ul className="menu">
        {items.map(item => (
          <li key={item}>
            <a
              href="#a"
              onClick={(e) => {
                e.preventDefault(); // Evita que recargue la página
                setSeccionActiva(item); // Cambia sección usando React
              }}
              className={seccionActiva === item ? 'activo' : ''}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
