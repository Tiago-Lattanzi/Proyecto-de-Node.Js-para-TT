/**
 * Este programa interactúa con FakeStore API mediante comandos de terminal.
 */

// URL base de la API
const API_URL = 'https://fakestoreapi.com';

/**
 * Función principal para procesar los comandos de la terminal
 */
async function main() {
    // Obtenemos los argumentos (ignoramos los primeros dos: node e index.js)
    const [method, resource, ...extras] = process.argv.slice(2);

    if (!method || !resource) {
        console.error('❌ Error: Faltan argumentos. Uso: npm run start <METODO> <RECURSO> [DATOS]');
        return;
    }

    try {
        // Lógica según el método HTTP solicitado
        switch (method.toUpperCase()) {
            case 'GET':
                await handleGet(resource);
                break;
            case 'POST':
                await handlePost(resource, extras);
                break;
            case 'DELETE':
                await handleDelete(resource);
                break;
            default:
                console.log(`⚠️ Método ${method} no soportado.`);
        }
    } catch (error) {
        console.error('❌ Hubo un error en la operación:', error.message);
    }
}

/**
 * Maneja las peticiones GET (Todos o un producto específico)
 */
async function handleGet(resource) {
    const response = await fetch(`${API_URL}/${resource}`);
    if (!response.ok) throw new Error('No se pudo obtener la información');
    
    const data = await response.json();
    console.log('📦 Resultado de la consulta:');
    
    // Si es un array (lista de productos) usamos table, si es objeto usamos log
    if (Array.isArray(data)) {
        console.table(data.map(p => ({ id: p.id, title: p.title, price: p.price, category: p.category })));
    } else {
        console.log(data);
    }
}

/**
 * Maneja la creación de productos (POST)
 */
async function handlePost(resource, extras) {
    if (extras.length < 3) {
        throw new Error('Para POST se requiere: <title> <price> <category>');
    }

    const [title, price, category] = extras;

    const newProduct = {
        title,
        price: parseFloat(price),
        description: 'Producto creado desde TechLab CLI',
        image: 'https://i.pravatar.cc',
        category
    };

    const response = await fetch(`${API_URL}/${resource}`, {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    console.log('✅ Producto creado exitosamente (Simulado):');
    console.log(data);
}

/**
 * Maneja la eliminación de productos (DELETE)
 */
async function handleDelete(resource) {
    if (!resource.includes('/')) {
        throw new Error('Debes especificar un ID. Ejemplo: products/7');
    }

    const response = await fetch(`${API_URL}/${resource}`, {
        method: 'DELETE'
    });

    // Verificamos si la respuesta tiene contenido antes de intentar parsear JSON
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (response.ok) {
        console.log(`🗑️ Operación de eliminación en ${resource} exitosa.`);
        if (data) {
            console.log('Objeto eliminado:', data);
        } else {
            console.log('El servidor confirmó la eliminación (sin datos de retorno).');
        }
    } else {
        console.log(`⚠️ El servidor respondió con error ${response.status} para ${resource}`);
    }
}

// Ejecutar la lógica principal
main();