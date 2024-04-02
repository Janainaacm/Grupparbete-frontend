/**
 * Konsultera Nick och Jonas om något behöver ändras
 */

import { create } from "zustand";
import { RecipeInterface, CategorieInterface } from "../Types";
import axios from "axios";
import { API_URL } from "../config";
import { error } from "console";

// interface som definierar struktur och funktionerna för global state
interface APIState {
  recipeList: RecipeInterface[];
  allCategories: CategorieInterface[];

  fetchRecipe: (recipeID: string) => Promise<RecipeInterface>;
  fetchRecipeList: () => Promise<void>;
  postRecipe: (newRecipe: RecipeInterface) => Promise<number>;
  deleteRecipe: (recipeId: string) => Promise<void>;
}

// skapar global state och fyller 'recipes' med samtliga recept i databasen.
export const useAPIState = create<APIState>((set) => ({
  
  recipeList: [],
  allCategories: [],
  

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

  postRecipe: async (newRecipe) => {
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

  fetchRecipe: async (recipeID: string) => {
    try {
      const response = await axios.get(`${API_URL}/recipes/${recipeID}`);
      if (response.status === 200) {
        console.log("Successfully loaded recipe");
        console.log(response.data);
        return response.data;
      }
    } catch (error) {
      console.log("error", error);
    }
  },

  deleteRecipe: async (recipeId: string) => {
    try {
      const response = await axios.delete(`${API_URL}/recipes/${recipeId}`);

      if (response.status === 200) {
        console.log("successfully deleted ID: ", recipeId );
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


  // NICK
  //POST - /recipes/{recipeId}/ratings - Lägger till ett omdöme för ett recept
  
  //GET - /recipes/{recipeId}/comments - Hämtar alla kommentarer för ett recept
  
  //POST - /recipes/{recipeId}/comments - Lägger till en kommentar för ett recept
  

  //JONAS 
  //GET - /categories - Hämtar alla kategorier

  fetchCategories: async () => {
    try {
      const response = await axios.get(`${API_URL}/categories`);

      if (response.status === 200) {
        
        set((state)) => ({
          
        })
      }
    } catch (error) {
      console.log("error", error);
    }
  },

  //GET - /categories/{categoryName}/recipes - Hämtar alla recept i en viss kategori
  
  //GET - /clear - Tömmer api:et på all data
  
}));
