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
