import { create } from "zustand";
import { CocktailInterface } from "../Types";

interface CocktailCartState {
  cocktailCart: CocktailInterface[];

  addToCocktailCart: (cocktail: CocktailInterface) => void;
  removeAllFromCocktailCart: (cocktailIdToRemove: string) => void;
  removeOneFromCocktailCart: (cocktailIdToRemove: string) => void;
  clearCocktailCart: () => void;
}

export const useCocktailCartState = create<CocktailCartState>((set) => ({
  cocktailCart: [],

  addToCocktailCart: (cocktail) => {
    set((state) => ({
      cocktailCart: [...state.cocktailCart, cocktail],
    }));
  },

  removeAllFromCocktailCart: (cocktailIdToRemove) => {
    set((state) => ({
      cocktailCart: state.cocktailCart.filter(
        (cocktail) => cocktail.idDrink !== cocktailIdToRemove
      ),
    }));
  },

  removeOneFromCocktailCart(cocktailIdToRemove) {
    set((state) => {
      const indexToRemove = state.cocktailCart.findIndex(
        (cocktail) => cocktail.idDrink === cocktailIdToRemove
      );

      if (indexToRemove !== -1) {
        const updatedCart = [...state.cocktailCart];
        updatedCart.splice(indexToRemove, 1);

        return { cocktailCart: updatedCart };
      }
      return state;
    });
  },

  clearCocktailCart: () => {
    set(() => ({
      cocktailCart: [],
    }));
  },
}));