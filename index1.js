const express = require('express');
const app = express();
const equiposRoutes = require('./routes/equiposRoutes');

// Configuración de conexión a la base de datos
// ...

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());

// Rutas
app.use('/api/equipos', equiposRoutes);

const PORT = 3000; // Cambia el puerto según tu configuración
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});


