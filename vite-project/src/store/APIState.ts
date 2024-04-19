/**
 * Konsultera Nick och Jonas om något behöver ändras
 */

import { create } from "zustand";
import {
  RecipeInterface,
  CategorieInterface,
  reviewInterface,
  ratingInterface,
} from "../Types";
import axios from "axios";
import { API_URL } from "../config";

// interface som definierar struktur och funktionerna för global state
interface APIState {
  recipeList: RecipeInterface[];
  allCategories: CategorieInterface[];
  reviewList: reviewInterface[];
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
  
}

// skapar global state och fyller 'recipes' med samtliga recept i databasen.
export const useAPIState = create<APIState>((set) => ({
  recipeList: [],
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

  //  setCurrentRecipe: (recipe: RecipeInterface) => {
  //    set({
  //      currentRecipe: recipe,
  //    });
  //  },

  setRecipeIDState: (recipeID: string) => {
    localStorage.setItem('recipeID', recipeID)
    set({
      recipeID: recipeID
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
        //console.log(response.data);
        //console.log("Fetch all recipes");
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
        return response.data;
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
        set({
          currentRecipe: response.data,
        });
      }
    } catch (error) {
      console.log("Error while fetching recipe", error);
    }
  },

  // LÅT KOMENTAR VARA!!! JONAS BYGGER OM LITE!!!
  // fetchRecipe: async (recipeID: string) => {
  //   try {
  //     const response = await axios.get(`${API_URL}/recipes/${recipeID}`);
  //     if (response.status === 200) {
  //       console.log("Success loading recipe");
  //       console.log(response.data);
  //       set({
  //           currentRecipe: response.data
  //       });
  //       return response.data;
  //     }
  //   } catch (error) {
  //     console.log("Error while fetching recipe", error);
  //   }
  // },

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
    const ratingObject: ratingInterface = { rating: newRating };
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
    const reviewObject: reviewInterface = { name: name, comment: comment };
    try {
      const response = await axios.post(
        `${API_URL}/recipes/${recipeId}/comments`,
        reviewObject
      );

      if (response.status === 200) {
        set((state) => ({
          reviewList: [...state.reviewList, response.data],
        }));
        //console.log("Sucessfully posted comment");
        alert("Successfully posted comment");
      }
    } catch (error) {
      console.log("Error while posting comment", error);
    }
  },

  fetchReviews: async (recipeId) => {
    //const {reviewList} = useAPIState()

    try {
      const response = await axios.get(
        `${API_URL}/recipes/${recipeId}/comments`
      );

      if (response.status === 200) {
        set({
          reviewList: response.data,
        });

        // set((state) => {
        //   const currentReviewsLength = state.reviewList.length;
        //   const fetchedReviewsLength = response.data.length;

        //   if (currentReviewsLength < fetchedReviewsLength) {
        //     return { reviewList: response.data };
        //   }
        //   return {};
        // });
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

  //GET - /categories - Hämtar alla kategorier
  fetchCategories: async () => {
    try {
      const response = await axios.get(`${API_URL}/categories`);
      if (response.status === 200) {
        //console.log("success fetching categories");
        set({
          allCategories: response.data,
        });
        //console.log(response.data);
      }
    } catch (error) {
      console.log("error fetching categories", error);
    }
  },

  //GET - /categories/{categoryName}/recipes - Hämtar alla recept i en viss kategori
  fetchRecipesByCategoryName: async (categoryName: string) => {
    try {
      const response = await axios.get(
        `${API_URL}/categories/${categoryName}/recipes`
      );
      if (response.status === 200) {
        //console.log("success fetching recipes by category name");
        //console.log(response.data);
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
