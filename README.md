# To-Do List Application

Este proyecto es una aplicación de lista de tareas que permite a los usuarios gestionar sus tareas de manera eficiente. Está dividido en dos partes principales: un cliente desarrollado con React y Vite, y un servidor backend construido con Node.js y Express.

## Estructura del Proyecto

```
.
├── Client/   # Frontend de la aplicación
│   ├── src/  # Código fuente del cliente
│   ├── public/  # Archivos estáticos
│   ├── index.html  # Archivo HTML principal
│   ├── vite.config.js  # Configuración de Vite
│   └── package.json  # Dependencias y scripts del cliente
├── Server/   # Backend de la aplicación
│   ├── src/  # Código fuente del servidor
│   ├── index.js  # Punto de entrada del servidor
│   ├── package.json  # Dependencias y scripts del servidor
│   └── src/config/estructura.sql  # Script SQL para la base de datos
└── .gitignore  # Archivos y carpetas ignorados por Git
```

## Características

### Cliente
- **Framework:** React con Vite.
- **Estilos:** CSS.
- **Componentes:** Incluye componentes reutilizables como `Navbar`.

### Servidor
- **Framework:** Node.js con Express.
- **Base de Datos:** MySQL.
- **Modelos:** Gestión de usuarios y tareas.
- **Rutas:** Endpoints para usuarios y tareas.

### Base de Datos
El esquema de la base de datos incluye dos tablas principales:
- **usuarios:** Almacena información de los usuarios.
- **tareas:** Almacena las tareas asociadas a los usuarios.

## Instalación

### Requisitos Previos
- Node.js
- MySQL

### Configuración del Cliente
1. Navega a la carpeta `Client/`:
   ```bash
   cd Client
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Configuración del Servidor
1. Navega a la carpeta `Server/`:
   ```bash
   cd Server
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura la base de datos:
   - Crea una base de datos en MySQL utilizando el script `estructura.sql` ubicado en `Server/src/config/estructura.sql`.
4. Inicia el servidor:
   ```bash
   node index.js
   ```

## Uso

1. Accede al cliente en tu navegador en `http://localhost:5173`.
2. El servidor estará disponible en `http://localhost:3000`.

## Endpoints del Servidor

### Usuarios
- `GET /usuarios`: Obtiene todos los usuarios.
- `GET /usuarios/:id`: Obtiene un usuario por ID.
- `POST /usuarios`: Crea un nuevo usuario.
- `PUT /usuarios/:id`: Actualiza un usuario por ID.
- `DELETE /usuarios/:id`: Elimina un usuario por ID.

### Tareas
- `GET /tareas`: Obtiene todas las tareas.

## Autores

- **Valentin Arroyo**
- **Lautaro Guerrero**

## Licencia

Este proyecto está licenciado bajo la licencia ISC.