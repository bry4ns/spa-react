import React, { useEffect, useState } from 'react';

// useState: permite guardar y actualizar valores que cambian (como el formulario o la lista de elementos).
// useEffect: ejecuta acciones cuando el componente se monta o cuando cambian ciertos datos (en este caso, para cargar y guardar en localStorage).

function Extra() {
  // Estado para la lista de notas
  const [items, setItems] = useState([]);
  // Estado para el formulario de nota
  const [form, setForm] = useState({ titulo: '', descripcion: '' });
  // Estado para saber si se está editando
  const [modoEdicion, setModoEdicion] = useState(false);
  // Índice del elemento que se está editando
  const [editIndex, setEditIndex] = useState(null);

  // Cargar datos desde localStorage al iniciar
  useEffect(() => {
    const data = localStorage.getItem('extraItems');
    if (data) setItems(JSON.parse(data));
  }, []);

  // Guardar en localStorage cada vez que cambia items
  useEffect(() => {
    localStorage.setItem('extraItems', JSON.stringify(items));
  }, [items]);

  // Maneja cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Maneja el envío del formulario para agregar o editar
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.titulo.trim() || !form.descripcion.trim()) return;

    if (modoEdicion) {
      const nuevosItems = [...items];
      nuevosItems[editIndex] = form;
      setItems(nuevosItems);
      setModoEdicion(false);
      setEditIndex(null);
    } else {
      setItems([...items, form]);
    }

    setForm({ titulo: '', descripcion: '' });
  };

  // Activa el modo edición y carga los datos en el formulario
  const handleEdit = (index) => {
    setModoEdicion(true);
    setEditIndex(index);
    setForm(items[index]);
  };

  // Elimina una nota de la lista
  const handleDelete = (index) => {
    const confirm = window.confirm('¿Estás seguro de eliminar este elemento?');
    if (!confirm) return;
    const nuevosItems = items.filter((_, i) => i !== index);
    setItems(nuevosItems);
  };

  // Renderiza el formulario y la lista de notas
  return (
    <section id="Extra" className="seccion">
      <div className="tarjeta bg-black bg-gradient">
        <h2>{modoEdicion ? 'Editar elemento' : 'Agregar nuevo elemento'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label>Título</label>
            <input
              type="text"
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="campo">
            <label>Descripción</label>
            <input
              type="text"
              name="descripcion"
              value={form.descripcion}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="boton">
            {modoEdicion ? 'Guardar cambios' : 'Agregar'}
          </button>
        </form>
      </div>

      <div className="tarjeta bg-black bg-gradient">
        <h2>Notas</h2>
        {/* Si no hay notas, muestra un mensaje */}
        {items.length === 0 ? (
          <p>No hay notas aún.</p>
        ) : (
          <ul>
            {/* Muestra cada nota con botones para editar y eliminar */}
            {items.map((item, index) => (
              <li key={index} style={{ marginBottom: '15px' }}>
                <strong>{item.titulo}</strong><br />
                <span>{item.descripcion}</span><br />
                <button className="boton" onClick={() => handleEdit(index)}>Editar</button>{' '}
                <button className="boton" onClick={() => handleDelete(index)} style={{ backgroundColor: '#ff4d4d' }}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Extra;
