/**
 * Konsultera Nick och Jonas om något behöver ändras
 */

import { create } from "zustand";
import { RecipeInterface, CategorieInterface } from "../Types";
import axios from "axios";
import { API_URL } from "../config";
import { commentInterface } from "../Types";

// interface som definierar struktur och funktionerna för global state
interface APIState {
  recipeList: RecipeInterface[];
  allCategories: CategorieInterface[];

  fetchRecipeList: () => Promise<void>;
  postRecipe: (newRecipe: RecipeInterface) => Promise<number>;
  fetchRecipe: (recipeID: string) => Promise<RecipeInterface>;
  deleteRecipe: (recipeId: string) => Promise<void>;
  fetchCategories: () => Promise<void>;
  fetchCategoryByID: (categoryName: string) => Promise<RecipeInterface[]>;
  clearDB: (key: string) => Promise<void>;
  updateRecipe: (updatedRecipe: RecipeInterface) => Promise<void>;
  postRating: (recipeId: string, recipeRating: number) => Promise<void>;
  postComment: (recipeId: string, comment: commentInterface) => Promise<void>;
  fetchComment: (recipeId: string) => Promise<commentInterface>;
}

// skapar global state och fyller 'recipes' med samtliga recept i databasen.
export const useAPIState = create<APIState>((set) => ({
  recipeList: [],
  allCategories: [],

  fetchRecipeList: async () => {
    try {
      const response = await axios.get(`${API_URL}/recipes/`);
      if (response.status === 200) {
        set({
          recipeList: response.data,
        });
        console.log(response.data);
      }
    } catch (error) {
      console.log("Error fetching recipe list", error);
    }
  },

  postRecipe: async (newRecipe) => {
    try {
      const response = await axios.post(`${API_URL}/recipes`, newRecipe);
      if (response.status === 200) {
        set((state) => ({
          recipeList: [...state.recipeList, response.data],
        }));
        return response.status;
      } else {
        console.log("Error posting new recipe");
        return response.status;
      }
    } catch (error) {
      console.log("Error while posting new recipe", error);
      throw error;
    }
  },

  fetchRecipe: async (recipeID: string) => {
    try {
      const response = await axios.get(`${API_URL}/recipes/${recipeID}`);
      if (response.status === 200) {
        console.log("Success loading recipe");
        console.log(response.data);
        return response.data;
      }
    } catch (error) {
      console.log("Error while fetching recipe", error);
    }
  },

  deleteRecipe: async (recipeId: string) => {
    try {
      const response = await axios.delete(`${API_URL}/recipes/${recipeId}`);

      if (response.status === 200) {
        console.log("successfully deleted ID: ", recipeId);
        set((state) => ({
          recipeList: state.recipeList.filter(
            (recipe) => recipe._id !== recipeId
          ),
        }));
      }
    } catch (error) {
      console.log("Error while deleting recipe", error);
    }
  },

  //PATCH - /recipes/{recipeId} - Uppdaterar ett recept
  updateRecipe: async (updatedRecipe) => {
    try {
      const response = await axios.patch(
        `${API_URL}/recipes/${updatedRecipe._id}`,
        updatedRecipe
      );

      if (response.status === 200) {
        set((state) => ({
          recipeList: state.recipeList.map((recipe) =>
            recipe._id === updatedRecipe._id ? updatedRecipe : recipe
          ),
        }));
      }
    } catch (error) {
      console.log("Error while updating recipe", error);
    }
  },

  postRating: async (recipeId, newRating) => {
    try {
      const response = await axios.post(
        `${API_URL}/recipes/${recipeId}/ratings`,
        newRating
      );

      if (response.status === 200) {
        set((state) => ({
          recipeList: state.recipeList.map((recipe) =>
            recipe._id === recipeId
              ? { ...recipe, ratings: [...recipe.ratings, newRating] }
              : recipe
          ),
        }));
      }
    } catch (error) {
      console.log("Error while posting rating", error);
    }
  },

  postComment: async (recipeId, comment) => {
    try {
      const response = await axios.post(
        `${API_URL}/recipes/${recipeId}/comments`,
        comment
      );

      if (response.status === 200) {
        console.log("Sucessfully posted comment");
      }
    } catch (error) {
      console.log("Error while posting comment", error);
    }
  },

  fetchComment: async (recipeId) => {
    try {
      const response = await axios.get(`${API_URL}/recipes/${recipeId}`);

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log("Error fetching comments", error);
    }
  },

  //GET - /categories - Hämtar alla kategorier
  fetchCategories: async () => {
    try {
      const response = await axios.get(`${API_URL}/categories`);
      if (response.status === 200) {
        console.log("success fetching categories");
        set({
          allCategories: response.data,
        });
        console.log(response.data);
      }
    } catch (error) {
      console.log("error fetching categories", error);
    }
  },

  //GET - /categories/{categoryName}/recipes - Hämtar alla recept i en viss kategori
  fetchCategoryByID: async (categoryName: string) => {
    try {
      const response = await axios.get(
        `${API_URL}/categories/${categoryName}/recipes`
      );
      if (response.status === 200) {
        console.log("success fetching category by ID");
        console.log(response.data);
        return response.data;
      }
    } catch (error) {
      console.log("error fetching category by ID", error);
    }
  },

  //GET - /clear - Tömmer api:et på all data
  clearDB: async (key: string) => {
    if (key === "ClearThisShitHole") {
      try {
        const response = await axios.get(`${API_URL}/clear`);
        if (response.status === 200) {
          console.log("successfully cleared database");
          set({
            recipeList: [],
          });
        }
      } catch (error) {
        console.log("error clearing database", error);
      }
    } else {
      console.log("Requesting deletion failed!");
      console.log("Contact Global-State support!");
    }
  },
}));
