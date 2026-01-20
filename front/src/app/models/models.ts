export interface Guest {
  id: string;
  name: string;
  preferences: string[];
}


export interface DishIngredient {
  id: string;
  ingredientId: string;
  ingredientName: string;
  quantity: number;
  unit: string;
}


export interface MenuItem {
  dishId: string;
  dishName: string;
  notes?: string;
}
