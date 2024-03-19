import { useState, useCallback, useEffect } from "react";
import axios from "axios";
//

const AllCocktails = () => {
  const [loading, setLoading] = useState<boolean>(false); // State to manage loading
  const [data, setData] = useState<any[]>([]);

  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const URL2 = "www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

  const fetchCocktailHandler = useCallback(() => {
    setLoading(true);

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data.drinks);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchCocktailHandler();
  }, [fetchCocktailHandler]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>All Cocktails</h2>
      <div className="recipe-list">
        {data.map((cocktail) => (
          <div key={cocktail.idDrink} className="recipe-card">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <div>
              <h3>{cocktail.strDrink}</h3>
              <p>{cocktail.strInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllCocktails;