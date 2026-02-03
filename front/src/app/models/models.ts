export interface Guest {
  id: string;
  name: string;
  diet: string,
  allergies: string,
  dislikes: string,
  budget: number;
}

export interface Ingredient {
  id: string;
  name: string;
  season: string;
  quantity: number;
  tags: string[];
}

export interface Dish {
  id: string,
  name: string,
  category: string,
  cost: number
  ingredients: string[]
}

export interface Analysis {
  cost_total: number,
  weight_total_g: number,
  calories_total_kcal: number,
  macros_g: {
    protein: number,
    carbs: number,
    fat: number
  },
  macros_percentage: {
    protein: number,
    carbs: number,
    fat: number
  }
}
