import { create } from "zustand";
import { RecipeInterface } from "../Types";
import axios from "axios";
import { API_URL } from "../config";

// interface som definierar struktur och funktionerna för global state
interface RecipeState {
  recipeList: RecipeInterface[];
  fetchRecipeList: () => Promise<void>;
  postRecipe: (newRecipe: RecipeInterface) => Promise<number>;
}

// skapar global state och fyller 'recipes' med samtliga recept i databasen.
export const useRecipeState = create<RecipeState>((set) => ({
  //exportera global state med funktioner och listan recipe

  recipeList: [], // deklarera tom lista

  fetchRecipeList: async () => {
    try {
      const response = await axios.get(`${API_URL}/recipes/`);
      if (response.status === 200) {
        set({ recipeList: response.data });
        console.log(response.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  },

  postRecipe: async (newRecipe: RecipeInterface) => {
    
    try {
      const response = await axios.post(`${API_URL}/recipes`, newRecipe);
      if (response.status === 200) {
        console.log("Success!");
        await set((state) => (
          { ...state, 
            fetchRecipeList: state.fetchRecipeList }
          ));
        return response.status;
      } else {
        console.log("Error fetching");
        return response.status;
      }
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  },
}));
