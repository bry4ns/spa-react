const express = require('express');
const app = express();
const cors = require('cors');

const path = require('path');
app.use('/img', express.static(path.join(__dirname, 'img')));

const noticiasVulnerabilidades = [
  {
    id: 1,
    titulo: "Zero-Day en Windows 11 permite ejecución remota",
    descripcion: "Una nueva vulnerabilidad crítica afecta a todos los sistemas con Windows 11 sin parchear. Microsoft ha reconocido el problema y promete un parche en los próximos días.",
    severidad: "Crítica",
    fecha: "2025-07-15",
    imagen: "http://localhost:5000/img/w11.jpg"
  },
  {
    id: 2,
    titulo: "Falla en Apache Struts vuelve a ser explotada",
    descripcion: "Se han reportado múltiples incidentes donde actores maliciosos aprovechan una antigua vulnerabilidad en Apache Struts.",
    severidad: "Alta",
    fecha: "2025-07-14",
    imagen: "http://localhost:5000/img/strut.png"
  },
  {
    id: 3,
    titulo: "Nueva vulnerabilidad en Docker expone contenedores",
    descripcion: "Investigadores descubren una brecha que permite escape del contenedor en ciertos entornos con configuraciones específicas.",
    severidad: "Media",
    fecha: "2025-07-13",
    imagen: "http://localhost:5000/img/dk.png"
  },
  {
    id: 4,
    titulo: "Ataque a servidores VPN de Fortinet compromete datos corporativos",
    descripcion: "Una nueva campaña dirigida explota un fallo en FortiOS, permitiendo el acceso no autorizado a redes internas.",
    severidad: "Alta",
    fecha: "2025-07-12",
    imagen: "http://localhost:5000/img/ft.png"
  },
  {
    id: 5,
    titulo: "Exploit en librería JavaScript permite XSS en múltiples frameworks",
    descripcion: "Un paquete NPM popular usado por varios frameworks front-end contiene una función maliciosa que permite inyecciones XSS.",
    severidad: "Crítica",
    fecha: "2025-07-11",
    imagen: "http://localhost:5000/img/js.png"
  }
];

app.get('/api/noticias', (req, res) => {
  res.json(noticiasVulnerabilidades);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
