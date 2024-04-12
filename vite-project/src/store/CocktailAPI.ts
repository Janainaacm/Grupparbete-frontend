import { create } from "zustand";
import { CocktailInterface } from "../Types";
import { COCKTAIL_API_URL } from "../config";
import axios from "axios";


interface CocktailAPIState {
  cocktailList: CocktailInterface[];
  cocktailID: string;
  cocktailToRender: CocktailInterface;

  updateCocktailID: (cocktailID: string) => void;
  clearCocktailID: () => void;
  fetchCocktails: () => Promise<void>;
  fetchCocktailByID: (cocktailID: string) => Promise<void>;
}



export const useCocktailAPIState = create<CocktailAPIState>((set) => ({
  cocktailList: [],
  cocktailID: "",

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

  // fetchCocktailByID: () => {
    
  // },

  clearCocktailID: () => {
    set({
      cocktailID: ""
    })
  },

  fetchCocktails: async () => {
    try {
      const response = await axios.get(`${COCKTAIL_API_URL}/search.php?f=a`);

      if (response.status === 200) {
        //console.log("fetchCockails SUCCSESS");
        //console.log(response.data.drinks);

        set({
          cocktailList: response.data.drinks,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  },

  fetchCocktailByID: async (cocktailID: string) => {
    try {
      const response = await axios.get(
        `${COCKTAIL_API_URL}/lookup.php?i=${cocktailID}`
      );

      if (response.status === 200) {
        //console.log("fetchCocktailByID SUCCSESS");

        set({
          cocktailToRender: response.data.drinks[0],
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  },
}));
