import { CartInterface } from "../Types";
import { create } from "zustand";
import { RecipeInterface } from "../Types";

interface RecipeCartState {
  recipeCart: RecipeInterface[];

  AddToCart: (recipe: RecipeInterface) => void;
  RemoveFromCart: (recipeIdToRemove: string) => void;
  clearCart: () => void;
  RemoveAllFromCart: (recipeIdToRemove: string) => void;
}

export const useRecipeCartState = create<RecipeCartState>((set) => ({
  recipeCart: [],

  AddToCart: (recipe) => {
    set((state) => ({
      recipeCart: [...state.recipeCart, recipe],
    }));
  },

  RemoveFromCart: (recipeIdToRemove) => {
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

  RemoveAllFromCart: (recipeIdToRemove) => {
    set((state) => ({
      recipeCart: state.recipeCart.filter((recipe) => recipe._id !== recipeIdToRemove),
    }));
  },

  clearCart: () => {
    set(() => ({
      recipeCart: [],
    }));
  },
}));
