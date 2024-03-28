import { CartInterface } from "../Types";
import { create } from "zustand";
import { RecipeInterface } from "../Types";
import { CocktailInterface } from "../api/getCocktails";

interface CartStateInterface {
    cart: RecipeInterface[]

    AddToCart: (recipe: RecipeInterface) => void
    RemoveFromCart: (recipeIdToRemove: string) => void
    ClearCart: () => void
    
}

export const useCartStateInterface = create<CartStateInterface>((set) => ({

    cart: [],

    AddToCart: (recipe) => {
        set((state) => ({
            cart: [...state.cart, recipe]
        }))
    },

    RemoveFromCart: (recipeIdToRemove) => {
        set((state) => {

            const indexToRemove = state.cart.findIndex(recipe => recipe._id === recipeIdToRemove);

            if (indexToRemove !== -1) {
                const updatedCart = [...state.cart];
                updatedCart.splice(indexToRemove, 1);

                return { cart: updatedCart };
            }
            return state;
        });
    },


    ClearCart: () => {
        set(() => ({
            cart: []
        }))
    }

})) 