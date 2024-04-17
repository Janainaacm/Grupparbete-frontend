import { useEffect } from "react";
import { useCocktailAPIState } from "../../../store/CocktailAPIState";
import { useCocktailCartState } from "../../../store/CocktailCartState";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RecipeInterface } from "../../../Types";
import { FaCocktail } from "react-icons/fa";

interface CocktailRecommendationProps {
  recipe: RecipeInterface;
  visibility: boolean;
  onClose: () => void;
}

const CocktailRecommendation = (props: CocktailRecommendationProps) => {
  const navigate = useNavigate();

  const { randomCocktailIndex, recommendedListByIngredient, updateCocktailID } =
    useCocktailAPIState();
  const { addToCocktailCart: AddToCocktailCart } = useCocktailCartState();

  const displayCocktailDetails = async (
    cocktailID: string,
    cocktailName: string
  ) => {
    updateCocktailID(cocktailID);
    navigate(`/Cocktails/${cocktailName}`);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const modal = document.getElementById("modal-cocktail");
      if (modal && !modal.contains(e.target)) {
        props.onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [props]);

  return (
    <>
      {recommendedListByIngredient[0] && (
        <div
          id="modal-cocktail"
          style={{
            display: props.visibility ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
          }}
        >
          <Card
            key={recommendedListByIngredient[randomCocktailIndex].idDrink}
            style={{ width: "18rem" }}
          >
            <Card.Img
              onClick={() =>
                displayCocktailDetails(
                  recommendedListByIngredient[randomCocktailIndex].idDrink,
                  recommendedListByIngredient[randomCocktailIndex].strDrink
                )
              }
              variant="top"
              src={
                recommendedListByIngredient[randomCocktailIndex].strDrinkThumb
              }
              alt={recommendedListByIngredient[randomCocktailIndex].strDrink}
            />
            <div className="container-cocktail">
              <h3>
                {recommendedListByIngredient[randomCocktailIndex].strDrink}
              </h3>

              <div className="cocktail-buttons">
                <span
                  onClick={() => navigate("/cocktails")}
                  style={{ fontSize: "2.5rem" }}
                >
                  <FaCocktail />
                </span>
                <button
                  className="buy-button"
                  onClick={() =>
                    AddToCocktailCart(
                      recommendedListByIngredient[randomCocktailIndex]
                    )
                  }
                >
                  Lägg till varukorg
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default CocktailRecommendation;
