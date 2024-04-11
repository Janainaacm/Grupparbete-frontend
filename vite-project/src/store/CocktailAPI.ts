import { create } from "zustand";
import { CocktailInterface } from "../Types";
import { COCKTAIL_API_URL } from "../config";
import axios from "axios";
import CocktailDetails from "../pages/cocktailDetails/components/CocktailDetails";

interface CocktailAPIState {
  cocktailList: CocktailInterface[];

  fetchCocktails: () => Promise<void>;
  fetchCockailByID: (cocktailID: string) => Promise<CocktailInterface>;
}

export const useCocktailAPIState = create<CocktailAPIState>((set) => ({
  cocktailList: [],

  fetchCocktails: async () => {
    try {
      const response = await axios.get(`${COCKTAIL_API_URL}/search.php?f=a`);

      if (response.status === 200) {
        console.log("fetchCockails SUCCSESS");
        //console.log(response.data.drinks);

        set({
          cocktailList: response.data.drinks,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  },

  fetchCockailByID: async (cocktailID: string) => {
    try {
      const response = await axios.get(
        `${COCKTAIL_API_URL}/lookup.php?i=${cocktailID}`
      );

      if (response.status === 200) {
        console.log("fetchCocktailByID SUCCSESS");

        return response.data.drinks[0];
      }
    } catch (error) {
      console.log("error", error);
    }
  },
}));
