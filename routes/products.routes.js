import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Rutas Públicas (Cualquiera puede leer los productos)
router.get('/', getProducts);
router.get('/:id', getProductById);

// Rutas Protegidas (Solo el admin con Token puede crear, editar o borrar)
router.post('/create', verifyToken, createProduct);
router.put('/:id', verifyToken, updateProduct); 
router.delete('/:id', verifyToken, deleteProduct);

export default router;