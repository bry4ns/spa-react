import React, { useEffect, useState } from 'react';

function Extra() {
  // Lista de notas
  const [items, setItems] = useState([]);
  // Formulario de nota
  const [form, setForm] = useState({ titulo: '', descripcion: '' });
  // Modo edición y el índice a editar
  const [modoEdicion, setModoEdicion] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Cargar notas guardadas al iniciar
  useEffect(() => {
    const data = localStorage.getItem('extraItems');
    if (data) setItems(JSON.parse(data));
  }, []);

  // Guardar notas cada vez que cambian
  useEffect(() => {
    localStorage.setItem('extraItems', JSON.stringify(items));
  }, [items]);

  // Cambios en el formulario
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.titulo.trim() || !form.descripcion.trim()) return;

    if (modoEdicion) {
      const nuevos = [...items];
      nuevos[editIndex] = form;
      setItems(nuevos);
      setModoEdicion(false);
      setEditIndex(null);
    } else {
      setItems([...items, form]);
    }
    setForm({ titulo: '', descripcion: '' });
  };

  // Editar nota
  const handleEdit = (i) => {
    setModoEdicion(true);
    setEditIndex(i);
    setForm(items[i]);
  };

  // Eliminar nota
  const handleDelete = (i) => {
    if (!window.confirm('¿Eliminar?')) return;
    setItems(items.filter((_, idx) => idx !== i));
  };

  return (
    <section id="Extra" className="seccion">
      <div className="tarjeta bg-black bg-gradient">
        <h2>{modoEdicion ? 'Editar' : 'Agregar'} nota</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Título"
            required
          />
          <input
            type="text"
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            placeholder="Descripción"
            required
          />
          <button type="submit" className="boton">
            {modoEdicion ? 'Guardar' : 'Agregar'}
          </button>
        </form>
      </div>

      <div className="tarjeta bg-black bg-gradient">
        <h2>Notas</h2>
        {items.length === 0 ? (
          <p>No hay notas aún.</p>
        ) : (
          <ul>
            {items.map((item, i) => (
              <li key={i} style={{ marginBottom: '15px' }}>
                <strong>{item.titulo}</strong><br />
                <span>{item.descripcion}</span><br />
                <button className="boton" onClick={() => handleEdit(i)}>Editar</button>{' '}
                <button className="boton" onClick={() => handleDelete(i)} style={{ backgroundColor: '#ff4d4d' }}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Extra;
