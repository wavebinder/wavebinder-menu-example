const {getTable} = require('../apiClient');

// POST /menu/analysis
exports.analyzeMenu = async (req, res) => {
    const dishes = req.body;
    const nutrition = await getTable('dish_nutrition');

    res.json(doTheAnalysis(dishes, nutrition));
};

function doTheAnalysis(dishes, nutritionList) {
    let totalCost = 0;
    let totalWeight = 0;
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    for (const dish of dishes) {
        const nutrition = nutritionList.find(n => n.dish_id === dish.id);
        if (!nutrition) continue; // piatto senza info nutrizionali → ignorato

        totalCost += dish.cost;
        totalWeight += nutrition.portion_g;
        totalCalories += nutrition.calories_kcal;
        totalProtein += nutrition.protein_g;
        totalCarbs += nutrition.carbs_g;
        totalFat += nutrition.fat_g;
    }

    const totalMacros = totalProtein + totalCarbs + totalFat;

    const macroPercentages = totalMacros > 0
        ? {
            protein: +(totalProtein / totalMacros * 100).toFixed(1),
            carbs: +(totalCarbs / totalMacros * 100).toFixed(1),
            fat: +(totalFat / totalMacros * 100).toFixed(1)
        }
        : {protein: 0, carbs: 0, fat: 0};

    return {
        cost_total: +totalCost.toFixed(2),
        weight_total_g: Math.round(totalWeight),
        calories_total_kcal: Math.round(totalCalories),
        macros_g: {
            protein: +totalProtein.toFixed(1),
            carbs: +totalCarbs.toFixed(1),
            fat: +totalFat.toFixed(1)
        },
        macros_percentage: macroPercentages
    };
}
