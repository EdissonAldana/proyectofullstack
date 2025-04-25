import { Router } from 'express';
import ControladorUsuarios from '../controlador/controladorUsuarios.js';

const enrutadorUsuarios = Router();

// Ruta para crear un nuevo usuario (POST)
enrutadorUsuarios.post('/', ControladorUsuarios.crearUsuario);

// Ruta para obtener un usuario por su ID (GET)
enrutadorUsuarios.get('/:id', ControladorUsuarios.obtenerUsuario);

// Ruta para actualizar un usuario por su ID (PUT)
enrutadorUsuarios.put('/:id', ControladorUsuarios.actualizarUsuario);

// Ruta para eliminar un usuario por su ID (DELETE)
enrutadorUsuarios.delete('/:id', ControladorUsuarios.eliminarUsuario);

export default enrutadorUsuarios;
enrutadorUsuarios.get('/', async (solicitud, respuesta) => {
    try {
      const usuarios = await ModeloUsuario.find();
      respuesta.json({ resultado: 'bien', datos: usuarios });
    } catch (error) {
      respuesta.status(500).json({ resultado: 'mal', mensaje: 'error al obtener usuarios', datos: error });
    }
  });