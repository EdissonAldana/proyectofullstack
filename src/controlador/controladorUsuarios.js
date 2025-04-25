import bcrypt from 'bcryptjs';
import ModeloUsuario from '../modelo/modeloUsuarios.js';

const ControladorUsuarios = {
  crearUsuario: async (solicitud, respuesta) => {
    try {
      const { nombre, correoElectronico, contrasenia } = solicitud.body;
      const contraseniaProtegida = await bcrypt.hash(contrasenia, 10);
      const nuevoUsuario = new ModeloUsuario({
        nombre,
        correoElectronico,
        contrasenia: contraseniaProtegida,
      });
      const usuarioCreado = await nuevoUsuario.save();
      if (usuarioCreado._id) {
        respuesta.json({
          resultado: 'bien',
          mensaje: 'usuario creado',
          datos: usuarioCreado._id,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al crear usuario',
        datos: error,
      });
    }
  },

  obtenerUsuario: async (solicitud, respuesta) => {
    try {
      const { id } = solicitud.params; // Suponiendo que el ID del usuario se pasa como parámetro en la URL
      const usuario = await ModeloUsuario.findById(id);
      if (usuario) {
        respuesta.json({
          resultado: 'bien',
          mensaje: 'usuario encontrado',
          datos: usuario,
        });
      } else {
        respuesta.status(404).json({ // Código de estado 404 para "No encontrado"
          resultado: 'mal',
          mensaje: 'usuario no encontrado',
        });
      }
    } catch (error) {
      respuesta.status(500).json({ // Código de estado 500 para "Error interno del servidor"
        resultado: 'mal',
        mensaje: 'ocurrió un error al obtener el usuario',
        datos: error,
      });
    }
  },

  actualizarUsuario: async (solicitud, respuesta) => {
    try {
      const { id } = solicitud.params; // Suponiendo que el ID del usuario se pasa como parámetro en la URL
      const { nombre, correoElectronico, contrasenia } = solicitud.body;
      let actualizaciones = { nombre, correoElectronico };
      if (contrasenia) {
        const contraseniaProtegida = await bcrypt.hash(contrasenia, 10);
        actualizaciones.contrasenia = contraseniaProtegida;
      }
      const usuarioActualizado = await ModeloUsuario.findByIdAndUpdate(id, actualizaciones, { new: true }); // { new: true } devuelve el documento modificado
      if (usuarioActualizado) {
        respuesta.json({
          resultado: 'bien',
          mensaje: 'usuario actualizado',
          datos: usuarioActualizado,
        });
      } else {
        respuesta.status(404).json({
          resultado: 'mal',
          mensaje: 'usuario no encontrado',
        });
      }
    } catch (error) {
      respuesta.status(500).json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al actualizar el usuario',
        datos: error,
      });
    }
  },

  eliminarUsuario: async (solicitud, respuesta) => {
    try {
      const { id } = solicitud.params; // Suponiendo que el ID del usuario se pasa como parámetro en la URL
      const usuarioEliminado = await ModeloUsuario.findByIdAndDelete(id);
      if (usuarioEliminado) {
        respuesta.json({
          resultado: 'bien',
          mensaje: 'usuario eliminado',
          datos: usuarioEliminado,
        });
      } else {
        respuesta.status(404).json({
          resultado: 'mal',
          mensaje: 'usuario no encontrado',
        });
      }
    } catch (error) {
      respuesta.status(500).json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al eliminar el usuario',
        datos: error,
      });
    }
  },
};

export default ControladorUsuarios;