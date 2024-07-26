const express = require('express');
const { faker } = require('@faker-js/faker');

// Crear Router propio
const router = express.Router();

// Obtener todas las recetas
router.get('/', (req, res) => {
    const recetas = [];
    const { size } = req.query;
    const limit = size || 10;
    for (let index = 0; index < limit; index++) {
        recetas.push({
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.url()
        });
        
    }
    res.json(recetas);
});

// Filtrar recetas
router.get('/filter', (req, res) => {
    res.send('I am a filter');
});

// Obtener una receta por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id
    });
});

// Crear receta
router.post('/', (req, res) => {
    const body = req.body;
    res.status(201).json({
        message: 'Created',
        data: body
    });
});

// Actualización parcial
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Updated',
        data: body,
        id,
    });
});

// Eliminar receta
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'Deleted',
        id
    });
});

module.exports = router;