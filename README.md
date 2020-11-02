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

3. Configurar script para iniciar la app con ts-node, package.json

```json
"start": "ts-node src/index.ts",
```
