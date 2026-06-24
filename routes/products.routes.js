import express from 'express';

const router = express.Router();

// GET /api/products (Ruta de prueba temporal)
router.get('/', (req, res) => {
    res.json({ message: "Aquí devolveremos todos los productos desde Firebase" });
});

export default router;