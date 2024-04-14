import { CartInterface } from "../Types";
import { create } from "zustand";
import { RecipeInterface } from "../Types";

interface CartState {
    cart: RecipeInterface[]
  
    AddToCart: (recipe:RecipeInterface) => void
    RemoveFromCart: (recipeIdToRemove: string) => void
    clearCart: () => void
    RemoveAllFromCart: (recipeIdToRemove: string) => void
  }

  export const useCartState = create<CartState>((set) => ({

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
            cart: state.cart.filter(recipe => recipe._id !== recipeIdToRemove)
        }))
    },

    clearCart: () => {
        set(() => ({
            cart: []
        }))
    }

  })) 