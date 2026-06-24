import express from 'express';

const router = express.Router();

// Ruta de prueba temporal para Auth
router.get('/', (req, res) => {
    res.json({ message: "Ruta de autenticación lista" });
});

export default router;