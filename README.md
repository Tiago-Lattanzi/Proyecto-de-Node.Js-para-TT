🚀 API REST E-commerce - Proyecto Final Node.js

Este repositorio contiene el código fuente de una API RESTful completa y segura desarrollada con Node.js y Express, utilizando Firebase (Firestore) como base de datos NoSQL en la nube. El proyecto incluye un sistema de autenticación basado en JSON Web Tokens (JWT) para proteger las rutas críticas.

Desarrollado para el bootcamp de Talento Tech (TT).

🛠️ Tecnologías y Herramientas

* Entorno de Ejecución: Node.js

* Framework Web: Express.js

* Base de Datos: Firebase Firestore (NoSQL)

* Seguridad: JWT (JsonWebToken) para autenticación, CORS.

* Arquitectura: Diseño en capas (Rutas, Controladores, Servicios y Modelos).

🏗️ Arquitectura del Proyecto

El proyecto está estructurado utilizando un patrón de diseño en capas para garantizar un código limpio, mantenible y escalable:

* 📂 config/: Configuración de la conexión a la base de datos (Firebase).

* 📂 routes/: Definición de los endpoints de la API web.

* 📂 middlewares/: Filtros de seguridad (verificación de tokens JWT).

* 📂 controllers/: Manejo de las peticiones HTTP (req, res) y códigos de estado.

* 📂 services/: Lógica de negocio y validaciones.

* 📂 models/: Interacción directa con la base de datos Firestore.

⚙️ Instalación y Configuración Local

Para correr este proyecto en tu propia máquina, sigue estos pasos:

1. Clonar el repositorio:

git clone https://github.com/Tiago-Lattanzi/Proyecto-de-Node.Js-para-TT.git
cd Proyecto-de-Node.Js-para-TT


2. Instalar las dependencias:

npm install


3. Configurar las Variables de Entorno (.env):
Por razones de seguridad, las credenciales no están incluidas en el repositorio. Debes crear un archivo llamado .env en la raíz del proyecto y agregar tus propias variables siguiendo este formato:

PORT=3000
JWT_SECRET=Tu_Secreto_JWT_Super_Seguro
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
FIREBASE_APP_ID=tu_app_id


4. Iniciar el servidor:

npm run start


El servidor estará corriendo en http://localhost:3000.

📡 Endpoints de la API

La API cuenta con rutas públicas (lectura) y rutas protegidas (escritura). Las rutas protegidas requieren enviar un token JWT en el Header de la petición (Authorization: Bearer <token>).

Autenticación

* POST /auth/login: Iniciar sesión y obtener el token JWT (Devuelve estado 200).

Productos (Públicas)

* GET /api/products: Obtener todos los productos (Devuelve estado 200).

* GET /api/products/:id: Obtener un producto por su ID (Devuelve estado 200 o 404).

Productos (Protegidas con JWT)

* POST /api/products/create: Crear un nuevo producto (Devuelve estado 201).

* PUT /api/products/:id: Actualizar un producto existente (Devuelve estado 200).

* DELETE /api/products/:id: Eliminar un producto (Devuelve estado 200).

🧪 Pruebas (Testing)

Se recomienda utilizar herramientas como Postman, Insomnia o Thunder Client (VS Code) para interactuar con la API.

1. Primero, realiza una petición POST a /auth/login con el email y contraseña de administrador para obtener tu token.

2. Luego, utiliza ese token en la pestaña Headers (como Authorization: Bearer <tu_token>) para probar las rutas de creación, edición y eliminación de productos.

Desarrollado por Tiago Lattanzi - 2026