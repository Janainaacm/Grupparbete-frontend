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
  /* fetchCocktails2: () => Promise<void>; */
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
      const response2 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=f`);
      const response3 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=o`);
      const response4 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=q`);
      const response5 = await axios.get(`${COCKTAIL_API_URL}/filter.php?a=Alcoholic`);
      const response6 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=b`);
      const response7 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=c`);
      const response8 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=d`);
      const response9 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=e`);
      const response10 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=f`);
      const response11 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=g`);
      const response12= await axios.get(`${COCKTAIL_API_URL}/search.php?f=h`);
      const response13 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=i`);
      const response14 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=j`);
      const response15 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=k`);
      const response16 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=l`);
      const response17 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=m`);
      const response18 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=n`);
      const response19 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=p`);
      const response20 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=r`);
      const response21 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=s`);
      const response22 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=t`);
      /* const response23 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=u`); */
      const response24 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=v`);
      const response25 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=w`);
      /* const response26 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=x`); */
      const response27 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=y`);
      const response28 = await axios.get(`${COCKTAIL_API_URL}/search.php?f=z`);


      if (response.status === 200) {
        console.log("fetchCockails SUCCSESS");
        //console.log(response.data.drinks);

        let responseAll = []
        responseAll.push(
          response.data.drinks,
          response2.data.drinks,
          response3.data.drinks,
          response4.data.drinks,
          response5.data.drinks,
          response6.data.drinks,
          response7.data.drinks,
          response8.data.drinks,
          response9.data.drinks,
          response10.data.drinks,
          response11.data.drinks,
          response12.data.drinks,
          response13.data.drinks,
          response14.data.drinks,
          response15.data.drinks,
          response16.data.drinks,
          response17.data.drinks,
          response18.data.drinks,
          response19.data.drinks,
          response20.data.drinks,
          response21.data.drinks,
          response22.data.drinks,
          /* response23.data.drinks, */
          response24.data.drinks,
          response25.data.drinks,
          /* response26.data.drinks, */
          response27.data.drinks,
          response28.data.drinks,
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

  /* fetchCocktails2: async () => {
    try {
      const response = await axios.get(`${COCKTAIL_API_URL}/search.php?f=q`);

      if (response.status === 200) {
        console.log("fetchCockails2 SUCCSESS");
        //console.log(response.data.drinks);

        set((state) => ({
          cocktailList: [...state.cocktailList, response.data.drinks],
        }));
      }
    } catch (error) {
      console.log("error", error);
    }
  }, */

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
