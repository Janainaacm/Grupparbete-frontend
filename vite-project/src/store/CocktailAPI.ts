import { create } from "zustand";
import { CocktailInterface } from "../Types";
import { COCKTAIL_API_URL } from "../config";
import axios from "axios";


interface CocktailAPIState {
  cocktailList: CocktailInterface[];
  cocktailID: string;
  cocktailToRender: CocktailInterface;
  cocktailCategories: CocktailInterface[];
  filteredCocktailArray: CocktailInterface[];

  updateCocktailID: (cocktailID: string) => void;
  clearCocktailID: () => void;
  fetchCocktails: () => Promise<void>;
  fetchCocktailByID: (cocktailID: string) => Promise<void>;
  fetchCocktailCategories: () => Promise<void>;
  filterCocktailByCategory: (category: string) => Promise<void>;
  clearFilteredCocktailArray: () => void;
}



export const useCocktailAPIState = create<CocktailAPIState>((set) => ({
  cocktailList: [],
  cocktailID: "",
  cocktailCategories: [],
  filteredCocktailArray: [],

  cocktailToRender: {
    idDrink: "",
    strDrinkThumb: "",
    strDrink: "",
    strCategory: "",
    strAlcoholic: "",
    strGlass: "",
    strInstructions: "",

    strIngredient1: "",
    strIngredient2: "",
    strIngredient3: "",
    strIngredient4: "",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",

    strMeasure1: "",
    strMeasure2: "",
    strMeasure3: "",
    strMeasure4: "",
    strMeasure5: "",
    strMeasure6: "",
    strMeasure7: "",
    strMeasure8: "",
    strMeasure9: "",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
  },

  updateCocktailID: (cocktailID: string) => {
    localStorage.setItem('cocktailID', cocktailID);
    set({
      cocktailID: cocktailID,
    });
  },

  clearCocktailID: () => {
    set({
      cocktailID: ""
    })
  },

  fetchCocktails: async () => {
    try {
      const response = await axios.get(`${COCKTAIL_API_URL}/filter.php?a=Alcoholic`);
      const response2 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=a`);
      const response7 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=f`);
      const response16 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=o`);
      const response17 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=p`);
      const response18 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=q`);


      if (response.status === 200) {
        console.log("fetchCockails SUCCSESS");

        let responseAll = []
        responseAll.push(
          response.data.drinks,
          response2.data.drinks,
          response7.data.drinks,
          response16.data.drinks,
          response17.data.drinks,
          response18.data.drinks,
        );

        const flattenedResponse = responseAll.flatMap((num) => num);

        set({
          cocktailList: flattenedResponse,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  },


  fetchCocktailCategories: async () => {
    try {
      const response = await axios.get(`${COCKTAIL_API_URL}/list.php?c=list`);

      if (response.status === 200) {

        set({
          cocktailCategories: response.data.drinks,
        });
      }
    } catch (error) {
      console.log("error", error);
    }

  },

  filterCocktailByCategory: async (category: string) => {
    try {
      const response = await axios.get(`${COCKTAIL_API_URL}${category}`);

      if (response.status === 200) {

        set({
          cocktailList: response.data.drinks,
        });
      }

    } catch (error) {
      console.log("error", error);
    }

  },

  clearFilteredCocktailArray: () => {
    set({
      filteredCocktailArray: [],
    });
  },

  fetchCocktailByID: async (cocktailID: string) => {
    try {
      const response = await axios.get(
        `${COCKTAIL_API_URL}/lookup.php?i=${cocktailID}`
      );

      if (response.status === 200) {
        console.log("fetchCocktailByID SUCCSESS");

        set({
          cocktailToRender: response.data.drinks[0],
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  },

}));
