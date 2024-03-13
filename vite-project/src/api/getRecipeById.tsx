import axios from 'axios';
import { API_URL } from '../config';
import { RecipeInterface } from '../Types';


async function getRecipeById(recipeId: string): Promise<RecipeInterface[]> {
    //recipe._id Viktigt med _ när man kallar på funktionen
  try {
    const response = await axios.get<RecipeInterface[]>(`${API_URL}/recipes/${recipeId}`);
    return response.data;
  } catch (error) {
    
    throw new Error(`Error fetching recipe with ID ${recipeId}:`);
  }
}

export default getRecipeById;