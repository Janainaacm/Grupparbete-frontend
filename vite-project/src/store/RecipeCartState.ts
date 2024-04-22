import { create } from "zustand";
import { RecipeInterface } from "../Types";

interface RecipeCartState {
  recipeCart: RecipeInterface[];

  addToCart: (recipe: RecipeInterface) => void;
  removeFromCart: (recipeIdToRemove: string) => void;
  clearCart: () => void;
  removeAllFromCart: (recipeIdToRemove: string) => void;
}

export const useRecipeCartState = create<RecipeCartState>((set) => ({
  recipeCart: [],

  addToCart: (recipe) => {
    set((state) => ({
      recipeCart: [...state.recipeCart, recipe],
    }));
  },

  removeFromCart: (recipeIdToRemove) => {
    set((state) => {
      const indexToRemove = state.recipeCart.findIndex(
        (recipe) => recipe._id === recipeIdToRemove
      );
      if (indexToRemove !== -1) {
        const updatedCart = [...state.recipeCart];
        updatedCart.splice(indexToRemove, 1);
        return { recipeCart: updatedCart };
      }
      return state;
    });
  },

  removeAllFromCart: (recipeIdToRemove) => {
    set((state) => ({
      recipeCart: state.recipeCart.filter(
        (recipe) => recipe._id !== recipeIdToRemove
      ),
    }));
  },

  clearCart: () => {
    set(() => ({
      recipeCart: [],
    }));
  },
}));
