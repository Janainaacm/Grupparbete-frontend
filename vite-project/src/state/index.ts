import axios from "axios";
import { create } from "zustand";
import { RecipeInterface } from "../Types";
import { API_URL } from "../config";

interface RecipeState {
  recipes: RecipeInterface[];
  fetchRecipes: () => Promise<void>;
}

const useRecipeState = create<RecipeState>((set) => ({
  recipes: [],

    fetchRecipes: async () => {
      try {
        const response = await axios.get<RecipeInterface[]>(
          `${API_URL}/recipes`
        );

        if (response.status === 200) {
          set((state) => ({
            ...state,
            recipes: response.data,
          }));
          console.log(response.data);
        }
      } catch (error) {
        console.error("Fel vid hämtning av recept:", error);
        // Lägg till lämplig felhantering här
      }
  },
}));

export default useRecipeState;