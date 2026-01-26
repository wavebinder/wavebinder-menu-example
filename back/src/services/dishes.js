const { getTable } = require('../apiClient');

function splitCsv(value) {
    return value ? value.split(',').map(v => v.trim()) : [];
}

function isDishCompatible(dish, guests) {
    const dishTags = splitCsv(dish.tags);

    return guests.every(g => {
        if (g.diet === 'vegan' && (dishTags.includes('meat') || dishTags.includes('vegetarian'))) return false;
        if (g.diet === 'vegetarian' && dishTags.includes('meat')) return false;

        const allergies = splitCsv(g.allergies);
        return !allergies.some(a => dishTags.includes(a));
    });
}

// POST /dishes/compatible
exports.compatibleDishes = async (req, res) => {
    const { ingredients, guests } = req.body;

    if (ingredients == null || guests == null) {
        res.json([]);
        return;
    }

    const availableIngredients = new Set(
        ingredients.map(i => i.id)
    );

    const [dishes, dishIngredients] = await Promise.all([
        getTable('dishes'),
        getTable('dish_ingredients')
    ]);

    const compatible = dishes.filter(dish => {
        const needed = dishIngredients
            .filter(di => di.dish_id === dish.id)
            .map(di => di.ingredient_id);

        const hasAllIngredients = needed.every(id =>
            availableIngredients.has(id)
        );

        return hasAllIngredients && isDishCompatible(dish, guests);
    });

    res.json(
        compatible.map(d => ({
            id: d.id,
            name: d.name,
            category: d.category,
            cost: d.cost
        }))
    );
};
