import path from "path";
import express from "express";  
import morgan from"morgan";
import cors from "cors";
import enrutadorUsuarios from "./rutas/rutaUsuarios.js";
const servidor = express(); 

servidor.use(cors());
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use('/usuarios',enrutadorUsuarios);
servidor.get('/', (solicitud, respuesta) => {
    respuesta.status(404).send("No encontrado");
  })
  
  export default servidor;