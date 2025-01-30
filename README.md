# 📦 Ecommerce Frontend

Este documento explica la configuración y uso del frontend del Ecommerce.

## 🚀 **Instalación y Configuración**

### 📌 **1. Clonar el Repositorio**
```sh
git clone https://github.com/jdiazravenna/tecsupProyecto
cd proyect-front-tecsup
```

### 📌 **2. Instalar Dependencias**
```sh
npm install
```

### 📌 **3. Configurar Variables de Entorno**
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```
REACT_APP_API_URL=http://127.0.0.1:8000/api/
```

### 📌 **4. Ejecutar el Proyecto**
```sh
npm start
```
El frontend se ejecutará en `http://localhost:3000`

---

## 🌐 **Rutas del Proyecto**

| Ruta | Descripción |
|------|------------|
| `/` | Página principal |
| `/login` | Iniciar sesión |
| `/register` | Registro de usuario |
| `/products` | Lista de productos |
| `/product/:id` | Detalle de un producto |
| `/cart` | Carrito de compras |
| `/checkout` | Finalizar compra |
| `/admin-dashboard` | Panel de administración (requiere permisos) |

---

## 🔐 **Autenticación y Protección de Rutas**
- El sistema usa **JWT** para autenticación.
- Los tokens se almacenan en `localStorage`.
- Las rutas protegidas requieren inicio de sesión y permisos adecuados.

---

## 🛍 **Gestión de Productos**
- Los productos se obtienen desde `GET /products/`.
- Se pueden **agregar, editar y eliminar** desde el panel de administración.

---

## 🛒 **Carrito de Compras**
- Se maneja con Redux.
- Los datos se guardan en `localStorage` para persistencia.
- Se pueden agregar y eliminar productos en la página del carrito.

---

## 📦 **Órdenes**
- Al hacer checkout, se envía una petición `POST /orders/`.
- Los usuarios pueden ver sus órdenes en `GET /orders/`.
- Los administradores pueden gestionar todas las órdenes.

---

## 🛠 **Tecnologías Usadas**
✅ React.js
✅ Redux (para estado global)
✅ React Router (para navegación)
✅ Tailwind CSS (para estilos)
✅ Firebase (para almacenamiento si es necesario)
✅ React Hot Toast (para notificaciones)

---

## 📝 **Notas Finales**
- El proyecto está en desarrollo, puedes contribuir mejorando el código.
- Asegúrate de que el backend esté ejecutándose antes de probar el frontend.
- Para errores o mejoras, abre un issue en el repositorio.

📌 **¡Listo para usar! 🚀**

