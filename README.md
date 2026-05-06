Proyecto de Node.Js para Talento Tech

Este proyecto es una herramienta de línea de comandos (CLI) construida con Node.js que permite gestionar productos de una tienda virtual consumiendo la API de FakeStore.

🚀 Requerimientos cumplidos

Configuración Profesional: Uso de ESModules ("type": "module") y scripts personalizados en package.json.

Interacción Asíncrona: Implementación de fetch para operaciones GET, POST y DELETE.

Lógica Dinámica: Procesamiento de argumentos de terminal mediante process.argv.

Formateo de Datos: Visualización profesional en consola mediante console.table.

🛠️ Instalación y Uso

Clona este repositorio.

Asegúrate de tener Node.js (v18 o superior recomendado).

Ejecuta el comando de inicio según lo que necesites:

Consultar todos los productos

npm run start GET products


Consultar un producto por ID

npm run start GET products/15


Crear un nuevo producto (Simulado)

npm run start POST products "Título del producto" 100 "categoría"


Eliminar un producto

npm run start DELETE products/7


📝 Notas

La API de FakeStore es de solo lectura para cambios permanentes, por lo que las operaciones POST y DELETE son simulaciones exitosas retornadas por el servidor.