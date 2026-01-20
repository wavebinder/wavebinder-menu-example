const express = require('express');
const app = express();

app.use(express.json());

const ingredients = require('./services/ingredients');
const guests = require('./services/guests');
const dishes = require('./services/dishes');

app.get('/ingredients', ingredients.listIngredients);
app.get('/guests', guests.listGuests);

app.post('/dishes/compatible', dishes.compatibleDishes);

app.listen(3000, () => {
    console.log('Demo backend running on http://localhost:3000');
});
