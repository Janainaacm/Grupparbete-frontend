export interface RecipeInterface {
  _id?: string;
  title: string;
  description: string;
  avgRating?: number[];
  ratings: number[];
  imageUrl: string;
  timeInMins: number;
  price: number;
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
  recipe: RecipeInterface[];
}

export interface CategorieInterface {
  name: string;
  count: number;
}

export interface reviewInterface {
  name: string;
  comment: string;
  createdAt?: string;
}

export interface ratingInterface {
  rating: number;
}
