const conectarDB = require('../models/db');

async function listarEquipos() {
  try {
    const connection = await conectarDB();
    const [rows, fields] = await connection.execute('SELECT * FROM practica');
    connection.end();
    return rows;
  } catch (error) {
    throw error;
  }
}

async function crearEquipos(req) {
  try {
    const { Nombre, Precio, Cantidad, Marca, Almacen } = req.body; // Obtener datos del cuerpo de la solicitud
    const connection = await conectarDB();
    const [result, fields] = await connection.execute(
      'INSERT INTO practica (Nombre, Precio, Cantidad, Marca, Almacen) VALUES (?, ?, ?, ?, ?)',
      [Nombre, Precio, Cantidad, Marca, Almacen]
    );
    connection.end();
    return result;
  } catch (error) {
    throw error;
  }
}


async function actualizarEquipos(req) {
  try {
    const { Nombre, Precio, Cantidad, Marca, Almacen } = req.body; // Obtener datos del cuerpo de la solicitud
    const { id } = req.params; // Obtener el ID de la URL

    // Comprobar si todos los campos están presentes
    if (!Nombre || !Precio || !Cantidad || !Marca || !Almacen) {
      throw new Error('Todos los campos son requeridos para actualizar un equipo.');
    }

    const connection = await conectarDB();
    const [result, fields] = await connection.execute(
      `UPDATE practica SET Nombre=?, Precio=?, Cantidad=?, Marca=?, Almacen=? WHERE ID=?;`,
      [Nombre, Precio, Cantidad, Marca, Almacen, id]
    );
    connection.end();
    return result;
  } catch (error) {
    throw error;
  }
}

async function borrarEquipos(req) {
  try {
    const { id } = req.params; // Obtener el ID de la URL

    // Comprobar si el ID está presente
    if (!id) {
      throw new Error('El campo "id" es requerido para eliminar un equipo.');
    }

    const connection = await conectarDB();
    const [result, fields] = await connection.execute('DELETE FROM practica WHERE ID = ?', [id]);
    connection.end();

    return result;
  } catch (error) {
    throw error;
  }
}




module.exports = {
  listarEquipos,
  crearEquipos,
  actualizarEquipos, 
  borrarEquipos,
};


/* 
http://localhost:3000/api/equipos/listaequipos  */

/*
http://localhost:3000/api/equipos/crearequipos
*/

/* http://localhost:3000/api/equipos/actualizarequipos/12   */

/*  http://localhost:3000/api/equipos/borrarequipos/14  */