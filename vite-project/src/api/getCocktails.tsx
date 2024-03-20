import { useState, useCallback, useEffect } from "react";
import axios from "axios";


interface CocktailInterface {
  idDrink: string,
  strDrinkThumb: string,
  strDrink: string,
  strCategory: string

};

const AllCocktails = () => {
  
  const [cocktails, setCocktails] = useState<CocktailInterface[]>([]);

  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const URL2 = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

  const getCocktails = async () => {

    const response = await axios.get(URL2);
      


    if (response.status === 200) {

      setCocktails(response.data.drinks);
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
            onClick={() => handleClick(cocktail.idDrink)}
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

{/* <div>
      <h2>All Cocktails</h2>
      <div className="recipe-list" >
        {data.map((cocktail) => (
          <div key={cocktail.idDrink} className="recipe-card">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: "100px", height: "100px", marginBottom: "5px" }}/>
            <div>
              <h3>{cocktail.strDrink}</h3>
              <p>{cocktail.strInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div> */}