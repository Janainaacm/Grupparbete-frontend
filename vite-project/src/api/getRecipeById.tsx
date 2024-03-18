import axios from 'axios';
import { API_URL } from '../config';
import { RecipeInterface } from '../Types';

async function getRecipeById(recipeId: string): Promise<RecipeInterface[]> {
  try {  
    const response = await axios.get<RecipeInterface>(`${API_URL}/recipes/${recipeId}`);
    const recipe: RecipeInterface = response.data;
    return [recipe]; // Return as an array
  } catch (error) {
    throw new Error(`Error fetching recipe with ID ${recipeId}: ${(error as Error).message}`);
  }
}

export default getRecipeById;