1. Instalar Dependencias
2.Asegúrate de estar en la carpeta raíz del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

bash
 
npm install
3. Configurar las Credenciales de Firebase
Para interactuar con Firebase desde Node.js, necesitas un archivo de credenciales de Firebase.

Accede a la Consola de Firebase: Dirígete a Firebase Console.
Selecciona tu Proyecto: Selecciona el proyecto en el que deseas subir los productos.
Generar Credenciales:
Haz clic en el icono de engranaje (Configuración del proyecto) en la esquina superior izquierda.
Dirígete a la sección Cuentas de servicio.
Haz clic en Generar nueva clave privada. Esto descargará un archivo JSON con las credenciales.
Guardar el Archivo: Renombra este archivo a firebase-credentials.json y colócalo en la misma carpeta donde se encuentra el script uploadProducts.js.
Nota: Este archivo contiene información sensible. Nunca lo subas a un repositorio público.

4. Configurar el Archivo JSON de Productos
Asegúrate de tener un archivo JSON llamado unique_mock_products.json en la carpeta del proyecto. Este archivo debe contener la lista de productos que deseas subir a Firebase, con un formato similar a este:

json
 
[
  {
    "title": "Laptop Pro X",
    "description": "A high-end laptop for professionals.",
    "category": "laptop",
    "price": "1500",
    "productImageUrl": "https://example.com/laptop-image.png",
    "quantity": 10,
    "date": "Nov 05, 2024",
    "time": "November 5, 2024 at 8:33:42 PM UTC-5"
  },
  ...
]
5. Ejecutar el Script de Subida de Productos
Para subir los productos a Firebase, ejecuta el siguiente comando:

bash
 
node uploadProducts.js
6. Verificar la Subida
Una vez que el script se ejecute, deberías ver un mensaje en la consola confirmando la subida exitosa:

css
 
Productos subidos exitosamente a Firestore.
Si ocurre un error, revisa los mensajes en la consola para entender el problema y asegúrate de que el archivo de credenciales firebase-credentials.json y el archivo de productos unique_mock_products.json están correctamente configurados.

Notas Adicionales
Seguridad: Asegúrate de agregar firebase-credentials.json a .gitignore para evitar subir tus credenciales a un repositorio público.
Modificación de Productos: Puedes editar el archivo unique_mock_products.json para añadir o modificar productos antes de ejecutarlo nuevamente.
Uso de Batches: Este script utiliza batches de Firebase para una subida eficiente.
