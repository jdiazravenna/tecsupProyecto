const admin = require('firebase-admin');
const fs = require('fs');

// Inicializa la aplicación de Firebase
const serviceAccount = require('./proyectotecsup-ef51e-firebase-adminsdk-5hydi-4c66c51c7f.json'); // Reemplaza con la ruta a tu archivo de credenciales
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Lee el archivo JSON de productos
const products = JSON.parse(fs.readFileSync('./unique_mock_products.json', 'utf8'));

// Función para subir productos a Firestore
async function uploadProducts() {
  const batch = db.batch(); // Usamos un batch para subir varios documentos a la vez

  products.forEach((product) => {
    const docRef = db.collection('products').doc(); // Crea un nuevo documento en la colección 'products'
    batch.set(docRef, product);
  });

  try {
    await batch.commit(); // Ejecuta el batch para subir todos los documentos
    console.log('Productos subidos exitosamente a Firestore.');
  } catch (error) {
    console.error('Error al subir los productos:', error);
  }
}

uploadProducts();
