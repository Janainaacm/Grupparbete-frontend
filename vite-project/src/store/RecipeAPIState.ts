import {
  RecipeInterface,
  CategorieInterface,
  ReviewInterface,
  RatingInterface,
} from "../Types";
import { create } from "zustand";
import axios from "axios";
import { API_URL } from "../config";

interface RecipeAPIState {
  recipeList: RecipeInterface[];
  allCategories: CategorieInterface[];
  randomRecipeList: RecipeInterface[];
  reviewList: ReviewInterface[];
  filteredRecipeList: RecipeInterface[];
  currentRecipe: RecipeInterface;
  recipeID: string;

  setRecipeIDState: (recipeID: string) => void;
  fetchRecipeList: () => Promise<void>;
  postRecipe: (newRecipe: RecipeInterface) => Promise<number>;
  fetchRecipe: (recipeID: string) => Promise<void>;
  deleteRecipe: (recipeId: string) => Promise<void>;
  fetchCategories: () => Promise<void>;
  fetchRecipesByCategoryName: (
    categoryName: string
  ) => Promise<RecipeInterface[]>;
  clearDB: (key: string) => Promise<void>;
  updateRecipe: (updatedRecipe: RecipeInterface) => Promise<void>;
  postRating: (recipeId: string, recipeRating: number) => Promise<void>;
  postReview: (
    recipeId: string,
    name: string,
    comment: string
  ) => Promise<void>;
  fetchReviews: (recipeId: string) => Promise<void>;
  clearReviewState: () => void;
  setFilteredRecipeList: (filteredList: RecipeInterface[]) => void;
  setRandomRecipeList: (recipesToShow: RecipeInterface[]) => void;
}

export const useRecipeAPIState = create<RecipeAPIState>((set) => ({
  recipeList: [],
  randomRecipeList: [],
  allCategories: [],
  reviewList: [],
  filteredRecipeList: [],
  recipeID: "",
  currentRecipe: {
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

  setRandomRecipeList: (recipesToShow: RecipeInterface[]) => {
    set({
      randomRecipeList: recipesToShow,
    });
  },

  setRecipeIDState: (recipeID: string) => {
    localStorage.setItem("recipeID", recipeID);
    set({
      recipeID: recipeID,
    });
  },

  setFilteredRecipeList: (filteredList: RecipeInterface[]) => {
    set({
      filteredRecipeList: filteredList,
    });
  },

  fetchRecipeList: async () => {
    try {
      const response = await axios.get(`${API_URL}/recipes/`);
      if (response.status === 200) {
        set({
          recipeList: response.data,
        });
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
        set({
          currentRecipe: response.data,
        });
      }
    } catch (error) {
      console.log("Error while fetching recipe", error);
    }
  },

  deleteRecipe: async (recipeId: string) => {
    try {
      const response = await axios.delete(`${API_URL}/recipes/${recipeId}`);

      if (response.status === 200) {
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

  updateRecipe: async (updatedRecipe: RecipeInterface) => {
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
    const ratingObject: RatingInterface = { rating: newRating };
    try {
      const response = await axios.post(
        `${API_URL}/recipes/${recipeId}/ratings`,
        ratingObject
      );
      if (response.status === 200) {
        alert("Rating submitted!");
      }
    } catch (error) {
      console.log("Error while posting rating", error);
    }
  },

  postReview: async (recipeId, name, comment) => {
    const reviewObject: ReviewInterface = { name: name, comment: comment };
    try {
      const response = await axios.post(
        `${API_URL}/recipes/${recipeId}/comments`,
        reviewObject
      );

      if (response.status === 200) {
        set((state) => ({
          reviewList: [...state.reviewList, response.data],
        }));
        alert("Successfully posted comment");
      }
    } catch (error) {
      console.log("Error while posting comment", error);
    }
  },

  fetchReviews: async (recipeId) => {
    try {
      const response = await axios.get(
        `${API_URL}/recipes/${recipeId}/comments`
      );

      if (response.status === 200) {
        set({
          reviewList: response.data,
        });
      }
    } catch (error) {
      console.log("Error fetching comments", error);
    }
  },

  clearReviewState: () => {
    set({
      reviewList: [],
    });
  },

  fetchCategories: async () => {
    try {
      const response = await axios.get(`${API_URL}/categories`);
      if (response.status === 200) {
        set({
          allCategories: response.data,
        });
      }
    } catch (error) {
      console.log("error fetching categories", error);
    }
  },

  fetchRecipesByCategoryName: async (categoryName: string) => {
    try {
      const response = await axios.get(
        `${API_URL}/categories/${categoryName}/recipes`
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log("error fetching category by ID", error);
    }
  },

  clearDB: async (key: string) => {
    if (key === "ClearThisShitHole") {
      try {
        const response = await axios.get(`${API_URL}/clear`);
        if (response.status === 200) {
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
