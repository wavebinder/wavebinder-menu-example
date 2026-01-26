const express = require('express');
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({
    origin: "*",
}));

const ingredients = require('./services/ingredients');
const guests = require('./services/guests');
const dishes = require('./services/dishes');

app.get('/api/ingredients', ingredients.listIngredients);
app.get('/api/guests', guests.listGuests);
app.post('/api/dishes', dishes.compatibleDishes);

app.get('/', (req, res) => res.send('Hello! My endpoints starts with /api'));
app.get('/api', (req, res) => res.send('Hello again! My endpoints are: /api/ingredients, /api/guests and /api/dishes/compatible'));

app.listen(3000, () => {
    console.log('Demo backend running on http://localhost:3000');
});
