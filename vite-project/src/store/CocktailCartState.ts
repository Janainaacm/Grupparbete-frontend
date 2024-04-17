import { create } from "zustand";
import { CocktailInterface } from "../Types";

interface CocktailCartState{
  cocktailCart: CocktailInterface[];

  AddToCocktailCart: (cocktail: CocktailInterface) => void;
  RemoveAllFromCocktailCart: (cocktailIdToRemove: string) => void;
  RemoveOneFromCocktailCart: (cocktailIdToRemove: string) => void;
  ClearCocktailCart: () => void;
}

export const useCocktailCartState = create<CocktailCartState>(
  (set) => ({
    cocktailCart: [],

    AddToCocktailCart: (cocktail) => {
      set((state) => ({
        cocktailCart: [...state.cocktailCart, cocktail],
      }));
    },

    RemoveAllFromCocktailCart: (cocktailIdToRemove) => {
      set((state) => ({
        cocktailCart: state.cocktailCart.filter(
          (cocktail) => cocktail.idDrink !== cocktailIdToRemove
        ),
      }));
    },

    RemoveOneFromCocktailCart(cocktailIdToRemove) {
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

    ClearCocktailCart: () => {
      set(() => ({
        cocktailCart: [],
      }));
    },
  })
);
