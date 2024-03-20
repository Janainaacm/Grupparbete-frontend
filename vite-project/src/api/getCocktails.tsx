import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


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



const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const URL2 = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
const URL3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const AllCocktails = () => {

  const navigate = useNavigate();

  const seeCocktailDetails = async (idDrink: string) => {

    const response = await axios.get(`${URL3+idDrink}`);

    if (response.status === 200) {
      
      const cocktail = response.data.drinks;
      const selectedCocktail = cocktail[0];
      const encodedCocktail = encodeURIComponent(selectedCocktail.strDrink);
        
      navigate(`/Drinks/${encodedCocktail}`, {
        state: { cocktail: selectedCocktail},
      });

      console.log("cocktails",cocktails);
      console.log("selectedCocktail.strDrink",selectedCocktail.strDrink);

    };

    

  };
  
  const [cocktails, setCocktails] = useState<CocktailInterface[]>([]);
  const [cocktails0, setCocktails0] = useState<CocktailInterface[]>([]);

  

  const getCocktails = async () => {

    const response0 = await axios.get(url);

    const response = await axios.get(URL2);
      

    if (response.status === 200) {

      setCocktails(response.data.drinks);
      setCocktails0(response0.data.drinks)
      console.log(response.data.drinks)
      
    };

  };
  

  useEffect(() => {

    getCocktails();
    
  }, []);


  return (


    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cocktails.map((cocktail) => (
        <div
          key={cocktail.idDrink}
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
      

      {cocktails0.map((cocktail) => (
        <div
          key={cocktail.idDrink}
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