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
        set((state) => ({
            cart: state.cart.filter(recipe => recipe._id !== recipeIdToRemove)
        }))
    },
    ClearCart: () => {
        set(() => ({
            cart: []
        }))
    }

  })) 