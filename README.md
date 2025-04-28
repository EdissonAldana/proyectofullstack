# proyectofullstack
# Proyecto Full Stack del Diplomado

Este proyecto integra un frontend moderno con Angular y un backend robusto construido con Node.js, Express y MongoDB, demostrando habilidades de desarrollo full stack.

## Estructura del Proyecto

* `/backend`: Contiene la API RESTful desarrollada con Node.js y Express, junto con la lógica de interacción con la base de datos MongoDB.
* `/frontend`: Alberga la interfaz de usuario dinámica y escalable creada con Angular.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

* [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada)
* [npm](https://www.npmjs.com/) (Viene con Node.js)
* [Angular CLI](https://angular.io/cli) (Instalar globalmente con `npm install -g @angular/cli`)
* [MongoDB](https://www.mongodb.com/) (Servidor en ejecución para probar el backend)

## Instalación

1.  **Clona el repositorio del proyecto:**
    ```bash
    git clone [URL_DEL_TU_REPOSITORIO]
    cd proyectofullstack
    ```
    *(Reemplaza `[URL_DEL_TU_REPOSITORIO]` con la URL de tu repositorio en GitHub u otro servicio).*

2.  **Instala las dependencias del Backend:**
    ```bash
    cd backend
    npm install
    ```

3.  **Instala las dependencias del Frontend:**
    ```bash
    cd frontend
    npm install
    ```

## Configuración

### Backend

1.  **Archivo `.env` (opcional):** Crea un archivo `.env` en la carpeta `/backend` para configurar variables de entorno como la URI de MongoDB y el puerto del servidor. Ejemplo:
    ```
    MONGODB_URI=mongodb://localhost:27017/tu_base_de_datos
    PORT=3000
    ```
    Ajusta la `MONGODB_URI` según tu configuración de MongoDB.

### Frontend

No se requiere configuración adicional más allá de la instalación de las dependencias. La aplicación Angular se comunicará con el backend en la URL configurada en tus servicios Angular (por defecto, suele ser `http://localhost:3000`).

## Ejecución

Abre dos terminales separadas para ejecutar el backend y el frontend simultáneamente.

### Backend

1.  Navega a la carpeta `/backend`:
    ```bash
    cd backend
    ```
2.  Inicia el servidor:
    ```bash
    npm start
    ```
    El servidor backend estará disponible en `http://localhost:3000` (o el puerto configurado).

### Frontend

1.  Navega a la carpeta `/frontend`:
    ```bash
    cd frontend
    ```
2.  Inicia la aplicación Angular:
    ```bash
    ng serve -o
    ```
    La aplicación frontend se abrirá en tu navegador en `http://localhost:4200`.

## Endpoints de la API (Ejemplos)

* `POST /usuarios`: Registrar un nuevo usuario.
* `POST /login`: Iniciar sesión de un usuario.
* `GET /dashboard`: (Ejemplo de una ruta protegida para usuarios autenticados).
    *(Añade aquí otros endpoints relevantes de tu API)*

## Autor

Edison Aldana

## ¡Gracias por revisar mi proyecto!