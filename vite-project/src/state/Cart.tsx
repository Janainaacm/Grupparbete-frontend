import { CartInterface } from "../Types";
import { create } from "zustand";
import { RecipeInterface } from "../Types";

interface CartStateInterface {
    cart: RecipeInterface[]

    AddToCart: (recipe: RecipeInterface) => void
    RemoveFromCart: (recipeIdToRemove: string) => void
    RemoveAllFromCart: (recipIdToRemove: string) => void
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

    RemoveAllFromCart: (recipeIdToRemove) => {
        set((state) => ({
            cart: state.cart.filter(cocktail => cocktail._id !== recipeIdToRemove)
        }))
    },


    ClearCart: () => {
        set(() => ({
            cart: []
        }))
    }

})) 