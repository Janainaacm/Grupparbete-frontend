import { create } from "zustand";
import { RecipeInterface } from "../Types";
import axios from "axios";
import { API_URL } from "../config";

// interface som definierar struktur och funktionerna för global state
interface APIState {
  recipeList: RecipeInterface[];
  fetchRecipeList: () => Promise<void>;
  postRecipe: (newRecipe: RecipeInterface) => Promise<number>;
  deleteRecipe: (recipeId: string) => Promise<void>;
}

// skapar global state och fyller 'recipes' med samtliga recept i databasen.
export const useAPIState = create<APIState>((set) => ({
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
        set((state) => ({
          recipeList: [...state.recipeList, response.data],
        }));
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

  deleteRecipe: async (recipeId: string) => {
    try {
      const response = await axios.delete(`${API_URL}/recipes/${recipeId}`);

      if (response.status === 200) {
        console.log("success");
        set((state) => ({
          recipeList: state.recipeList.filter(
            (recipe) => recipe._id !== recipeId
          ),
        }));
      }
    } catch (error) {
      console.log("error", error);
    }
  },

  
}));
