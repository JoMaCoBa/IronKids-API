const express = require('express');
const routerApi = require('./routes');

// Creación de instancia de express
const app = express();

// Definición del puerto en donde se ejecutará
const port = 3000;

// Middleware para recibir información en JSON
app.use(express.json());

// Implementando el routerAPI
routerApi(app)

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Asignación del puerto a la App
app.listen(port, () => {
    console.log(`${port}`);
});