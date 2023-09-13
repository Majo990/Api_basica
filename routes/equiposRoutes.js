const express = require('express');
const router = express.Router();
const equiposController = require('../controllers/equiposController');

router.get('/listaequipos', async (req, res) => {
  try {
    const equipos = await equiposController.listarEquipos();
    res.status(200).json(equipos);
  } catch (error) {
    console.error('Error al mostrar los datos :', error);
    res.status(500).json({ error: 'Error al conectar a la base de datos' });
  }
});


router.post('/crearequipos', async (req, res) => {
    try {
      const equipos = await equiposController.crearEquipos(req);
      res.status(200).json(equipos);
    } catch (error) {
      console.error('Error al crear equipos:', error);
      res.status(500).json({ error: 'Error al crear equipos' });
    }
  });
  

  router.put('/actualizarequipos/:id', async (req, res) => {
    try {
      const equipos = await equiposController.actualizarEquipos(req);
      res.status(200).json(equipos);
    } catch (error) {
      console.error('Error al actualizar equipos:', error);
      res.status(500).json({ error: 'Error al actualizar equipos' });
    }
  });
  

  router.delete('/borrarequipos/:id', async (req, res) => {
    try {
      const equipos = await equiposController.borrarEquipos(req);
      res.status(200).json(equipos);
    } catch (error) {
      console.error('Error al borrar equipos:', error);
      res.status(500).json({ error: 'Error al borrar equipos' });
    }
  });


module.exports = router;
