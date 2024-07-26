const express = require('express');
const routerApi = require('./routes');

// Importación Middlewares
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

// Creación de instancia de express
const app = express();

// Definición del puerto en donde se ejecutará
const port = 3000;

// Middleware para recibir información en JSON
app.use(express.json());

// Implementando el routerAPI
routerApi(app)

// Decirle a la aplicación que use los Middleware
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Asignación del puerto a la App
app.listen(port, () => {
    console.log(`${port}`);
});