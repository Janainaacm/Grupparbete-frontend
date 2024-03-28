export interface RecipeInterface {
  _id?: string;
  title: string;
  description: string;
  avgRating?: number[];
  ratings?: number[];
  imageUrl: string;
  price: number,
  timeInMins: number;
  categories: string[];
  instructions: string[];
  password?: string;
  ingredients: IngredientInterface[];
}

export interface IngredientInterface {
  name: string;
  amount: number;
  unit: string;
}

export interface CartInterface {
  recipe: RecipeInterface[]
}