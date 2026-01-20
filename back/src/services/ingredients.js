const { getTable } = require('../apiClient');

// GET /ingredients/list?season=estate
exports.listIngredients = async (req, res) => {
    const { season } = req.query;

    const ingredients = await getTable('ingredients');

    const filtered = ingredients.filter(i =>
        i.quantity > 0 &&
        (i.season === season || i.season === 'all')
    );

    res.json(filtered);
};
