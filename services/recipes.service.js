const { faker } = require('@faker-js/faker');

class RecipesService {

    constructor() {
        this.recipes = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.recipes.push({
                id: faker.string.uuid(),
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                image: faker.image.url()
            });
        }
    }

    async create(data) {
        const newRecipe = {
            id: faker.string.uuid(),
            ...data
        }
        this.recipes.push(newRecipe);
        return newRecipe;
    }

    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.recipes);
            }, 5000);
        })

    }

    async findOne(id) {
        return this.recipes.find(item => item.id === id);
    }

    async update(id, changes) {
        const index = this.recipes.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('recipe not found');
        }
        const recipe = this.recipes[index];
        this.recipes[index] = {
            ...recipe,
            ...changes
        }
        return this.recipes[index];
    }

    async delete(id) {
        const index = this.recipes.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('recipe not found');
        }
        this.recipes.splice(index, 1);
        return { id };
    }

}

module.exports = RecipesService;