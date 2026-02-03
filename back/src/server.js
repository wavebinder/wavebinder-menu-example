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
const menu = require('./services/menu');

app.get('/api/ingredients', ingredients.listIngredients);
app.get('/api/guests', guests.listGuests);
app.post('/api/dishes', dishes.compatibleDishes);
app.post('/api/menu/analysis', menu.analyzeMenu);

app.get('/', (req, res) => res.send('Hello! My endpoints starts with /api'));
app.get('/api', (req, res) => res.send('Hello again! My endpoints are: ' +
    '(GET) /api/ingredients, ' +
    '(GET) /api/guests, ' +
    '(POST) /api/dishes/compatible and ' +
    '(POST) /api/menu/analysis '));

app.listen(3000, () => {
    console.log('Demo backend running on http://localhost:3000');
});
