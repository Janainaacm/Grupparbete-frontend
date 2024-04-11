import { useState, useEffect } from "react";
import axios from "axios";
//import { useNavigate } from "react-router";
import { useNavigate } from "react-router-dom";


export interface CocktailInterface {
  idDrink: string,
  strDrinkThumb: string,
  strDrink: string,
  strCategory: string,
  strAlcoholic: string,
  strGlass: string,
  strInstructions: string,

  strIngredient1: string,
  strIngredient2: string,
  strIngredient3: string,
  strIngredient4: string,
  strIngredient5: string,
  strIngredient6: string,
  strIngredient7: string,
  strIngredient8: string,
  strIngredient9: string,
  strIngredient10: string,
  strIngredient11: string,
  strIngredient12: string,
  strIngredient13: string,
  strIngredient14: string,
  strIngredient15: string,

  strMeasure1: string,
  strMeasure2: string,
  strMeasure3: string,
  strMeasure4: string,
  strMeasure5: string,
  strMeasure6: string,
  strMeasure7: string,
  strMeasure8: string,
  strMeasure9: string,
  strMeasure10: string,
  strMeasure11: string,
  strMeasure12: string,
  strMeasure13: string,
  strMeasure14: string,
  strMeasure15: string,

};



const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const URL2 = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
const URL3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const URL4 = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

const URL5 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
const URL6 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b";
const URL7 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c";
const URL8 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d";
const URL9 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=e";
const URL10 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=f";
const URL11 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g";
const URL12 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=h";
const URL13 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=i";
const URL14 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=j";
const URL15 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=k";
const URL16 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=l";
const URL17 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m";
const URL18 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=n";
const URL19 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=o";
const URL20 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p";
const URL21 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q";
const URL22 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=r";
const URL23 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s";
const URL24 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=t";
const URL25 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=u";
const URL26 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v";
const URL27 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=w";
const URL28 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=x";
const URL29 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=y";
const URL30 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z";


const AllCocktails = () => {

  const navigate = useNavigate();

  const seeCocktailDetails = async (idDrink: string) => {

    const response = await axios.get(`${URL3+idDrink}`);

    if (response.status === 200) {
      
      const cocktail = response.data.drinks;
      const selectedCocktail = cocktail[0];
      const encodedCocktail = encodeURIComponent(selectedCocktail.strDrink);
        
      navigate(`/Cocktails/${encodedCocktail}`, {
        state: { cocktail: selectedCocktail},
      });

      console.log("cocktails", cocktails);
      console.log("selectedCocktail.strDrink",selectedCocktail.strDrink);

    };

    

  };
  
  const [cocktails1, setCocktails] = useState<CocktailInterface[]>([]);
  const [cocktails2, setCocktails2] = useState<CocktailInterface[]>([]);
  const [cocktails3, setCocktails3] = useState<CocktailInterface[]>([]);

 /*  const [cocktails5, setCocktails5] = useState<CocktailInterface[]>([]);
  const [cocktails6, setCocktails6] = useState<CocktailInterface[]>([]);
  const [cocktails7, setCocktails7] = useState<CocktailInterface[]>([]);
  const [cocktails8, setCocktails8] = useState<CocktailInterface[]>([]);
  const [cocktails9, setCocktails9] = useState<CocktailInterface[]>([]);
  const [cocktails10, setCocktails10] = useState<CocktailInterface[]>([]);
  const [cocktails11, setCocktails11] = useState<CocktailInterface[]>([]);
  const [cocktails12, setCocktails12] = useState<CocktailInterface[]>([]);
  const [cocktails13, setCocktails13] = useState<CocktailInterface[]>([]);
  const [cocktails14, setCocktails14] = useState<CocktailInterface[]>([]);
  const [cocktails15, setCocktails15] = useState<CocktailInterface[]>([]);
  const [cocktails16, setCocktails16] = useState<CocktailInterface[]>([]);
  const [cocktails17, setCocktails17] = useState<CocktailInterface[]>([]);
  const [cocktails18, setCocktails18] = useState<CocktailInterface[]>([]);
  const [cocktails19, setCocktails19] = useState<CocktailInterface[]>([]);
  const [cocktails20, setCocktails20] = useState<CocktailInterface[]>([]);
  const [cocktails21, setCocktails21] = useState<CocktailInterface[]>([]);
  const [cocktails22, setCocktails22] = useState<CocktailInterface[]>([]);
  const [cocktails23, setCocktails23] = useState<CocktailInterface[]>([]);
  const [cocktails24, setCocktails24] = useState<CocktailInterface[]>([]);
  const [cocktails25, setCocktails25] = useState<CocktailInterface[]>([]);
  const [cocktails26, setCocktails26] = useState<CocktailInterface[]>([]);
  const [cocktails27, setCocktails27] = useState<CocktailInterface[]>([]);
  const [cocktails28, setCocktails28] = useState<CocktailInterface[]>([]);
  const [cocktails29, setCocktails29] = useState<CocktailInterface[]>([]);
  const [cocktails30, setCocktails30] = useState<CocktailInterface[]>([]); */

  const cocktailsList = [];

  
  

  const getCocktails = async () => {

    const response = await axios.get(URL);

    /* const response2 = await axios.get(URL2);

    const response3 = await axios.get(URL4); */

    /* const response5 = await axios.get(URL6);
    const response6 = await axios.get(URL7);
    const response7 = await axios.get(URL8);
    const response8 = await axios.get(URL9);
    const response9 = await axios.get(URL10);
    const response10 = await axios.get(URL11);
    const response11 = await axios.get(URL12);
    const response12 = await axios.get(URL13);
    const response13 = await axios.get(URL14);
    const response14 = await axios.get(URL15);
    const response16 = await axios.get(URL16);
    const response17 = await axios.get(URL17);
    const response18 = await axios.get(URL18);
    const response19 = await axios.get(URL19);
    const response20 = await axios.get(URL20);
    const response21 = await axios.get(URL21);
    const response22 = await axios.get(URL22);
    const response23 = await axios.get(URL23);
    const response24 = await axios.get(URL24);
    const response25 = await axios.get(URL25);
    const response26 = await axios.get(URL26);
    const response27 = await axios.get(URL27);
    const response28 = await axios.get(URL28);
    const response29 = await axios.get(URL29);
    const response30 = await axios.get(URL30); */


      

    if (response.status === 200) {

      setCocktails(response.data.drinks);
      /* setCocktails2(response2.data.drinks);
      setCocktails3(response3.data.drinks); */

      /* setCocktails5(response5.data.drinks)
      setCocktails6(response6.data.drinks)
      setCocktails7(response7.data.drinks)
      setCocktails8(response8.data.drinks)
      setCocktails9(response9.data.drinks)
      setCocktails10(response10.data.drinks)
      setCocktails11(response11.data.drinks)
      setCocktails12(response12.data.drinks)
      setCocktails13(response13.data.drinks)
      setCocktails14(response14.data.drinks)
      setCocktails15(response.data.drinks)
      setCocktails16(response16.data.drinks)
      setCocktails17(response17.data.drinks)
      setCocktails18(response18.data.drinks)
      setCocktails19(response19.data.drinks)
      setCocktails20(response20.data.drinks)
      setCocktails21(response21.data.drinks)
      setCocktails22(response22.data.drinks)
      setCocktails23(response23.data.drinks)
      setCocktails24(response24.data.drinks) */
    /*   setCocktails25(response5.data.drinks)
      setCocktails26(response5.data.drinks)
      setCocktails27(response5.data.drinks)
      setCocktails28(response5.data.drinks)
      setCocktails29(response5.data.drinks)
      setCocktails30(response5.data.drinks) */

      console.log("response2.data.drinks",response.data.drinks)
      console.log("cocktails",cocktails)
      
    };

  };
  

  useEffect(() => {
    if(cocktails.length===0){
      getCocktails();
    }

    
    
  }, []);

  cocktailsList.push(cocktails1, cocktails2, cocktails3, /* cocktails5, cocktails6, cocktails6, cocktails7, cocktails8, cocktails9, cocktails10, cocktails11, cocktails12, cocktails13, cocktails14, cocktails15, cocktails16, cocktails17, cocktails18, cocktails19, cocktails20, cocktails21, cocktails22, cocktails23, cocktails24, cocktails25, cocktails26, cocktails27, cocktails28, cocktails29, cocktails30 */);

  const cocktails = cocktailsList.flatMap((num) => num);

  // console.log("cocktails", cocktails);
  

  // console.log("cocktailsbeforeReturn", cocktails)

  return (


    <div style={{ display: "flex", flexWrap: "wrap" }}>
      
      {cocktails.map((cocktail, index) => (
        <div
          key={index}
          style={{
            width: "200px",
            marginBottom: "20px",
            marginRight: "20px",
            textAlign: "center",
          }}
        >
          <button
            onClick={() => seeCocktailDetails(cocktail.idDrink)}
            style={{
              border: "none",
              background: "none",
              padding: "0",
              cursor: "pointer",
            }}
          >
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              style={{ width: "100px", height: "100px", marginBottom: "5px" }}
            />
          </button>
          <div>{cocktail.strDrink}</div>
        </div>
      ))}
    </div>
    
    
  );
};
export default AllCocktails;