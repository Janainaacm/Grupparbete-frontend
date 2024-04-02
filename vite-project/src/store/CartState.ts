import { CartInterface } from "../Types";
import { create } from "zustand";
import { RecipeInterface } from "../Types";

interface CartState {
    cart: RecipeInterface[]
  
    AddToCart: (recipe:RecipeInterface) => void
    RemoveFromCart: (recipeIdToRemove: string) => void
    ClearCart: () => void
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
    ClearCart: () => {
        set(() => ({
            cart: []
        }))
    }

  })) 