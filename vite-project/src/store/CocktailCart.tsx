import { create } from "zustand"
import { CocktailInterface } from "../pages/cocktails/components/DisplayAllCocktails"

interface CocktailCartInterface {
    coctailCart: CocktailInterface[];

    AddToCocktailCart: (cocktail: CocktailInterface) => void
    RemoveAllFromCocktailCart: (cocktailIdToRemove: string) => void
    RemoveOneFromCocktailCart: (cocktailIdToRemove: string) => void
    ClearCocktailCart: () => void
}

export const useCocktailCartStateInterface = create<CocktailCartInterface>((set) => ({

    coctailCart: [],

    AddToCocktailCart: (cocktail) => {
        set((state) => ({
            coctailCart: [...state.coctailCart, cocktail]
        }))
    },

    RemoveAllFromCocktailCart: (cocktailIdToRemove) => {
        set((state) => ({
            coctailCart: state.coctailCart.filter(cocktail => cocktail.idDrink !== cocktailIdToRemove)
        }))
    },

    RemoveOneFromCocktailCart(cocktailIdToRemove) {
        set((state) => {

            const indexToRemove = state.coctailCart.findIndex(cocktail => cocktail.idDrink === cocktailIdToRemove);

            if (indexToRemove !== -1) {
                const updatedCart = [...state.coctailCart];
                updatedCart.splice(indexToRemove, 1);

                return { coctailCart: updatedCart };
            }
            return state;
        })

    },

    ClearCocktailCart: () => {
        set(() => ({
            coctailCart: []
        }))
    }

}))