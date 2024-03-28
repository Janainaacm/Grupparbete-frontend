/**
 * Konsultera Nick och Jonas om något behöver ändras
 */

import { create } from "zustand";
import { RecipeInterface } from "../Types";
import axios from "axios";
import { API_URL } from "../config";

// interface som definierar struktur och funktionerna för global state
interface APIState {
  recipeList: RecipeInterface[];

  fetchRecipeList: () => Promise<void>;
  postRecipe: (newRecipe: RecipeInterface) => Promise<number>;
  fetchRecipe: (recipeID: string) => Promise<RecipeInterface>;
  deleteRecipe: (recipeId: string) => Promise<void>;
  updateRecipe: (updatedRecipe: RecipeInterface);
}

// skapar global state och fyller 'recipes' med samtliga recept i databasen.
export const useAPIState = create<APIState>((set) => ({
  recipeList: [],

  fetchRecipeList: async () => {
    try {
      const response = await axios.get(`${API_URL}/recipes/`);
      if (response.status === 200) {
        set({ recipeList: response.data });
        console.log(response.data);
      }
    } catch (error) {
      console.log("Error fetching recipe list", error);
    }
  },

  postRecipe: async (newRecipe) => {
    try {
      const response = await axios.post(`${API_URL}/recipes`, newRecipe);
      if (response.status === 200) {
        set((state) => ({
          recipeList: [...state.recipeList, response.data],
        }));
        return response.status;
      } else {
        console.log("Error posting new recipe");
        return response.status;
      }
    } catch (error) {
      console.log("Error while posting new recipe", error);
      throw error;
    }
  },

  fetchRecipe: async (recipeID: string) => {
    try {
      const response = await axios.get(`${API_URL}/recipes/${recipeID}`);
      if (response.status === 200) {
        console.log(response.data);
        return response.data;
      }
    } catch (error) {
      console.log("Error while fetching recipe", error);
    }
  },

  deleteRecipe: async (recipeId: string) => {
    try {
      const response = await axios.delete(`${API_URL}/recipes/${recipeId}`);

      if (response.status === 200) {
        set((state) => ({
          recipeList: state.recipeList.filter(
            (recipe) => recipe._id !== recipeId
          ),
        }));
      }
    } catch (error) {
      console.log("Error while deleting recipe", error);
    }
  },
  //PATCH - /recipes/{recipeId} - Uppdaterar ett recept
  updateRecipe: async (updatedRecipe) => {
    try {
      const response = await axios.patch(`${API_URL}/recipes/${updatedRecipe._id}`,updatedRecipe)

      if (response.status === 200) {
        set((state) => ({
          recipeList: state.recipeList.map((recipe) =>
          recipe._id === updatedRecipe._id ? updatedRecipe : recipe)
        }))
      }

    } catch (error) {
      console.log("Error while updating recipe", error);
    }
  }

  
  // NICK
  //POST - /recipes/{recipeId}/ratings - Lägger till ett omdöme för ett recept
  
  //GET - /recipes/{recipeId}/comments - Hämtar alla kommentarer för ett recept
  
  //POST - /recipes/{recipeId}/comments - Lägger till en kommentar för ett recept
  

  //JONAS 
  //GET - /categories - Hämtar alla kategorier

  //GET - /categories/{categoryName}/recipes - Hämtar alla recept i en viss kategori
  
  //GET - /clear - Tömmer api:et på all data

}));
