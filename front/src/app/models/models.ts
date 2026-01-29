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
