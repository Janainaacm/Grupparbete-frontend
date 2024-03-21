import axios from "axios";
import { create } from "zustand";
import { RecipeInterface } from "../Types";
import { API_URL } from "../config";

interface RecipeState {
  recipes: RecipeInterface[];
  fetchRecipes: () => Promise<void>;
  postRecipe: (newRecipe: RecipeInterface) => Promise<number>;
}

export const useRecipeState = create<RecipeState>((set) => ({
  
  recipes: [],

  fetchRecipes: async () => {
    try {
      const response = await axios.get<RecipeInterface[]>(`${API_URL}/recipes`);

      if (response.status === 200) {
        set((state) => ({
          recipes: response.data,
        }));
        console.log(response.data);
      }
    } catch (error) {
      console.error("Fel vid hämtning av recept:", error);
    }
  },

  postRecipe: async (newRecipe: RecipeInterface) => {
    const {fetchRecipes} = useRecipeState()
    
    try {
      const response = await axios.post(`${API_URL}/recipes`, newRecipe);

      if (response.status === 200) {
        console.log('Post Success')
        fetchRecipes()
        return response.status 
      }else{
        return response.status
      }
    } catch (error) {
      console.log();
    }
  },
}));


