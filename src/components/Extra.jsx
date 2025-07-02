import React, { useEffect, useState } from 'react';

//useState: permite guardar y actualizar valores que cambian (como el formulario o la lista de elementos).

//useEffect: ejecuta acciones cuando el componente se monta o cuando cambian ciertos datos (en este caso, para cargar y guardar en localStorage).

function Extra() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ titulo: '', descripcion: '' });
  const [modoEdicion, setModoEdicion] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

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

  const handleEdit = (index) => {
    setModoEdicion(true);
    setEditIndex(index);
    setForm(items[index]);
  };

  const handleDelete = (index) => {
    const confirm = window.confirm('¿Estás seguro de eliminar este elemento?');
    if (!confirm) return;
    const nuevosItems = items.filter((_, i) => i !== index);
    setItems(nuevosItems);
  };

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
        {items.length === 0 ? (
          <p>No hay notas aún.</p>
        ) : (
          <ul>
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
