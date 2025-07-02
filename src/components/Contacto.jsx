import React, { useState } from 'react';

function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    servicio: '',
    presupuesto: '',
    domicilio: false,
    urgente: false,
    terminos: false
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevosErrores = {};
    if (!form.nombre) nuevosErrores.nombre = 'El nombre es requerido';
    if (!form.email.includes('@')) nuevosErrores.email = 'Email inválido';
    if (!form.telefono) nuevosErrores.telefono = 'El teléfono es requerido';
    if (!form.fecha) nuevosErrores.fecha = 'La fecha es requerida';
    if (!form.servicio) nuevosErrores.servicio = 'Debes seleccionar un servicio';
    if (!form.terminos) nuevosErrores.terminos = 'Debes aceptar los términos';

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      // Crear el JSON y disparar la descarga
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(form, null, 2));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "formulario.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();

      alert('Archivo JSON descargado correctamente');

      // Limpiar formulario
      setForm({
        nombre: '',
        email: '',
        telefono: '',
        fecha: '',
        servicio: '',
        presupuesto: '',
        domicilio: false,
        urgente: false,
        terminos: false
      });
      setErrores({});
    }
  };

  return (
    <section id="contacto" className="seccion">
      <div className="tarjeta bg-transparent">
        <h2>Formulario de Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="nombre">Nombre *</label>
            <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} />
            <div className="error">{errores.nombre}</div>
          </div>

          <div className="campo">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
            <div className="error">{errores.email}</div>
          </div>

          <div className="campo">
            <label htmlFor="telefono">Teléfono *</label>
            <input type="tel" id="telefono" name="telefono" value={form.telefono} onChange={handleChange} />
            <div className="error">{errores.telefono}</div>
          </div>

          <div className="campo">
            <label htmlFor="fecha">Fecha Preferida *</label>
            <input type="date" id="fecha" name="fecha" value={form.fecha} onChange={handleChange} />
            <div className="error">{errores.fecha}</div>
          </div>

          <div className="campo">
            <label htmlFor="servicio">Servicio *</label>
            <select id="servicio" name="servicio" value={form.servicio} onChange={handleChange}>
              <option value="">Selecciona</option>
              <option value="diagnostico">Diagnóstico</option>
              <option value="reparacion">Reparación</option>
              <option value="mantenimiento">Mantenimiento</option>
              <option value="instalacion">Instalación</option>
              <option value="recuperacion">Recuperación</option>
            </select>
            <div className="error">{errores.servicio}</div>
          </div>

          <div className="campo">
            <label htmlFor="presupuesto">Presupuesto</label>
            <input type="number" id="presupuesto" name="presupuesto" value={form.presupuesto} onChange={handleChange} />
          </div>

          <div className="checkbox">
            <input type="checkbox" id="domicilio" name="domicilio" checked={form.domicilio} onChange={handleChange} />
            <label htmlFor="domicilio">Servicio a domicilio</label>
          </div>

          <div className="checkbox">
            <input type="checkbox" id="urgente" name="urgente" checked={form.urgente} onChange={handleChange} />
            <label htmlFor="urgente">Servicio urgente</label>
          </div>

          <div className="checkbox">
            <input type="checkbox" id="terminos" name="terminos" checked={form.terminos} onChange={handleChange} />
            <label htmlFor="terminos">Acepto términos *</label>
            <div className="error">{errores.terminos}</div>
          </div>

          <button type="submit" className="boton">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;
