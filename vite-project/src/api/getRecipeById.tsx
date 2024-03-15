import axios from 'axios';
import { API_URL } from '../config';
import { RecipeInterface } from '../Types';

export interface SelectedRecipeData {
  [recipeId: string]: RecipeInterface;
}

async function getRecipeById(recipeId: string): Promise<SelectedRecipeData> {
  try {  
    const response = await axios.get<RecipeInterface>(`${API_URL}/recipes/${recipeId}`);
    const recipe: RecipeInterface = response.data;
    const selectedRecipeById: SelectedRecipeData = {
      [recipeId]: recipe
    };
    return selectedRecipeById;
  } catch (error) {

    throw new Error(`Error fetching recipe with ID ${recipeId}: ${error.message}`);
  }
}

export default getRecipeById;