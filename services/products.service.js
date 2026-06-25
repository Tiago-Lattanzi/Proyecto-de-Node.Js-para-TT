import { ProductModel } from '../models/products.model.js';

export const ProductService = {
    getAllProducts: async () => {
        return await ProductModel.getAll();
    },

    getProductById: async (id) => {
        const product = await ProductModel.getById(id);
        if (!product) throw new Error('Producto no encontrado');
        return product;
    },

    createProduct: async (data) => {
        if (!data.title || !data.price) {
            throw new Error('Faltan datos obligatorios (title, price)');
        }
        return await ProductModel.create(data);
    },

    updateProduct: async (id, data) => {
        const product = await ProductModel.getById(id);
        if (!product) throw new Error('Producto no encontrado para actualizar');
        return await ProductModel.update(id, data);
    },

    deleteProduct: async (id) => {
        const product = await ProductModel.getById(id);
        if (!product) throw new Error('Producto no encontrado para eliminar');
        return await ProductModel.delete(id);
    }
};