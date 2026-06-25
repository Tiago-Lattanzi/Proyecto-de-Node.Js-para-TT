import { db } from '../config/firebase.js';
import { collection, getDocs, getDoc, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';

const collectionName = 'products';

// El Modelo se encarga EXCLUSIVAMENTE de hablar con la base de datos (Firebase)
export const ProductModel = {
    getAll: async () => {
        const querySnapshot = await getDocs(collection(db, collectionName));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    
    getById: async (id) => {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
    },

    create: async (productData) => {
        const docRef = await addDoc(collection(db, collectionName), productData);
        return { id: docRef.id, ...productData };
    },

    update: async (id, productData) => {
        const docRef = doc(db, collectionName, id);
        await updateDoc(docRef, productData);
        return { id, ...productData };
    },

    delete: async (id) => {
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef);
        return { message: 'Producto eliminado exitosamente' };
    }
};