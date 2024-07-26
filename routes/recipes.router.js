const express = require('express');

const RecipesService = require('./../services/recipes.service')

// Crear Router propio
const router = express.Router();

// Crear instancia de RecipeService
const service = new RecipesService();

// Obtener todas las recetas
router.get('/', async (req, res) => {
    const recipes = await service.find();
    res.status(200).json(recipes);
});

// Obtener una receta por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const recipe = await service.findOne(id);
    res.status(200).json(recipe);
});

// Crear receta
router.post('/', async (req, res) => {
    const body = req.body;
    const newRecipe = await service.create(body);
    res.status(201).json(newRecipe);
});

// Actualización parcial
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const recipe = await service.update(id, body);
        res.status(200).json(recipe)   
    } catch (error) {
        res.status(404).json({message: error.message})
    }

});

// Eliminar receta
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const recipe = await service.delete(id);
    res.status(200).json(recipe);
});

module.exports = router;