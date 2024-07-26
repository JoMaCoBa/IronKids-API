const express = require('express');

const recipeRouter = require('./recipes.router.js');
const userRouter = require('./users.router.js');

function routerApi (app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/recetas', recipeRouter);
    router.use('/perfil', userRouter);
}

module.exports = routerApi; 