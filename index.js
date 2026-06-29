import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productsRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';

// Inicializar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middlewares Globales ---
app.use(cors()); // Habilita peticiones desde otras aplicaciones (Frontend)
app.use(bodyParser.json()); // Habilita la lectura de formato JSON en el body

// --- Rutas del Servidor ---
app.use('/auth', authRoutes);
app.use('/api/products', productsRoutes);

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('<h1>¡Bienvenido a la API de TechLab!</h1>');
});

// --- Manejo de Rutas Desconocidas (404) ---
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada (404)' });
});

// --- Manejo de Errores Globales (500) ---
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor (500)' });
});

// Encender el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

export default app;