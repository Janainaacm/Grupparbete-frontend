import { ChangeEvent } from "react";
import { create } from "zustand";
import { RecipeInterface } from "../Types";

interface EditRecipeState {
  recipeToEdit: RecipeInterface;
  newInstruction: string;
  newIngredient: string;
  getCurrentRecipeToEdit: (currentRecipe: RecipeInterface) => void;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleInstructionsChange: (
    e: ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => void;
  setNewInstruction: (newInstruction: string) => void;
  addNewInstruction: () => void;
  deleteInstruction: (index: number) => void;
  handleIngredientChange: (
    e: ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => void;
  setNewIngredient: (newIngredient: string) => void;
  addNewIngredient: () => void;
  deleteIngrediens: (index: number) => void;
  handleCategoriesChange: (category: string) => void;
}

export const useEditRecipeState = create<EditRecipeState>((set) => ({
  recipeToEdit: {
    _id: "",
    title: "",
    description: "",
    avgRating: 0,
    ratings: [],
    imageUrl: "",
    timeInMins: 0,
    price: 0,
    categories: [],
    instructions: [],
    password: "",
    ingredients: [],
  },
  newInstruction: "",
  newIngredient: "",

  getCurrentRecipeToEdit: (currentRecipe: RecipeInterface) => {
    set({
      recipeToEdit: currentRecipe,
    });
  },

  handleInputChange: (e) => {
    const { name, value } = e.target;
    set((state) => ({
      recipeToEdit: {
        ...state.recipeToEdit,
        [name]: value,
      },
    }));
  },

  handleInstructionsChange: (e, index) => {
    const { value } = e.target;
    set((state) => {
      const updatedInstructions = [...state.recipeToEdit.instructions];
      updatedInstructions[index] = value;
      return {
        recipeToEdit: {
          ...state.recipeToEdit,
          instructions: updatedInstructions,
        },
      };
    });
  },

  setNewInstruction: (newInstruction: string) => {
    set({
      newInstruction: newInstruction,
    });
  },

  addNewInstruction: () => {
    set((state) => {
      const newInstruction = state.newInstruction.trim();
      if (newInstruction !== "") {
        const updatedInstructions = [
          ...state.recipeToEdit.instructions,
          newInstruction,
        ];
        return {
          recipeToEdit: {
            ...state.recipeToEdit,
            instructions: updatedInstructions,
          },
          newInstruction: "",
        };
      }
      return state;
    });
  },

  deleteInstruction: (index: number) => {
    set((state) => {
      const updatedInstructions = [...state.recipeToEdit.instructions];
      updatedInstructions.splice(index, 1);
      return {
        ...state,
        recipeToEdit: {
          ...state.recipeToEdit,
          instructions: updatedInstructions,
        },
      };
    });
  },

  handleIngredientChange: (e, index) => {
    const { value } = e.target;
    set((state) => {
      const updatedIngredients = [...state.recipeToEdit.ingredients];
      const [stringAmount, unit, name] = value.split(" ");
      const amount = parseInt(stringAmount);
      updatedIngredients[index] = { amount, unit, name };
      return {
        recipeToEdit: {
          ...state.recipeToEdit,
          ingredients: updatedIngredients,
        },
      };
    });
  },

  setNewIngredient: (newIngredient: string) => {
    set({
      newIngredient: newIngredient,
    });
  },

  addNewIngredient: () => {
    set((state) => {
      if (state.newIngredient.trim() !== "") {
        const [stringAmount, unit, name] = state.newIngredient.split(" ");
        const amount = parseInt(stringAmount);
        const updatedIngredients = [
          ...state.recipeToEdit.ingredients,
          { amount, unit, name },
        ];
        return {
          recipeToEdit: {
            ...state.recipeToEdit,
            ingredients: updatedIngredients,
          },
          newIngredient: "",
        };
      }
      return state;
    });
  },

  deleteIngrediens: (index: number) => {
    set((state) => {
      const updatedIngredients = [...state.recipeToEdit.ingredients];
      updatedIngredients.splice(index, 1);
      return {
        ...state,
        recipeToEdit: {
          ...state.recipeToEdit,
          ingredients: updatedIngredients,
        },
      };
    });
  },

  handleCategoriesChange: (category: string) => {
    set((state) => ({
      ...state,
      recipeToEdit: {
        ...state.recipeToEdit,
        categories: [category],
      },
    }));
  },
}));