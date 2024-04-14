import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCocktailAPIState } from "../../../store/CocktailAPI";

const AllCocktails = () => {
  const navigate = useNavigate();
  const { cocktailList, updateCocktailID , fetchCocktails } =
    useCocktailAPIState();

  useEffect(() => {
    fetchCocktails();
  }, []);

  const displayCocktailDetails = async (cocktailID: string, cocktailName: string) => {
    updateCocktailID(cocktailID)
    navigate(`/Cocktails/${cocktailName}`);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cocktailList.map((cocktail, index) => (
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
            onClick={() => displayCocktailDetails(cocktail.idDrink, cocktail.strDrink)}
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
