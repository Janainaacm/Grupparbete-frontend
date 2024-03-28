import { CartInterface } from "../Types";
import { create } from "zustand";
import { RecipeInterface } from "../Types";

interface CartStateInterface {
    cart: RecipeInterface[]
  
    AddToCart: (recipe:RecipeInterface) => void
    RemoveFromCart: (recipeIdToRemove: string) => void
    ClearCart: () => void
    ChangeCart: (productId: string, count:number) => void
  }

  export const useCartStateInterface = create<CartStateInterface>((set) => ({

    cart: [],

    AddToCart: (recipe) => {
        set((state) => ({
            cart: [...state.cart, recipe]
        }))
    },

    RemoveFromCart9: (recipeIdToRemove) => {
        set((state) => ({
            cart: state.cart.filter(recipe => recipe._id !== recipeIdToRemove)
        }))
    },

    RemoveFromCart: (recipeIdToRemove) => { set((state) => { const indexToRemove = state.cart.findIndex(recipe => recipe._id === recipeIdToRemove); if (indexToRemove !== -1) { const updatedCart = [...state.cart]; updatedCart.splice(indexToRemove, 1); return { cart: updatedCart }; } return state; }); },


    ClearCart: () => {
        set(() => ({
            cart: []
        }))
    },

    ChangeCart: (productId, count) => {
        set((oldState) => {
            const productIndex = oldState.findIndex(
                (item) => item._id === productId
            );

            if (productIndex !== -1) {
                oldState[productIndex].count = count;
            }
            return [...oldState]
        })
    }

  })) 