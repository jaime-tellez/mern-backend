# mern-backend

Proyecto STACK MERN backend - tutorial

Siguiendo el curso:
[MERN STACK & Typescript - Backend](https://www.youtube.com/watch?v=_RZ-T6TxP7w&t=372s).

Ejecutar el siguiente comando para instalar todas las dependencias:

### `npm i`

Ejecutar el siguiente comando para despliegue local:

### `npm run dev`

# Despliegue en Heroku

1. Consultar la versión de node que se está utilizando con el comando `node --version`
2. Agregar la siguiente opción en el archivo package.json:

```json
"engines": {
    "node": "10.x"
  }
```

3. Configurar script para iniciar la app con node, package.json

```json
"start": "node dist/index.js",
```

## Variable de entorno mongodb en Heroku

MongoDB Atlas: [MongoDB Atlas](https://cloud.mongodb.com)

1. Ingresar al proyecto en la pestaña de `settings` ir a la opción de `Config Vars` y dar clic en el botón de `Reveal Config Vars` y allí agregar la variable `MONGO_DATABASE_URL`.
2. Si la base de datos está en MongoDB Atlas, debería tener una estructura similar a esta:
   `mongodb+srv://user:<password>@cluster0.v333.mongodb.net/<database_name>?retryWrites=true&w=majority`
