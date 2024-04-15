import { useEffect } from "react";
import { useAPIState } from "../../../store/APIState";
import { useCocktailAPIState } from "../../../store/CocktailAPIState";
import { useCocktailCartStateInterface } from "../../../store/CocktailCartState";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CocktailInterface, RecipeInterface } from "../../../Types";
import drink from "../../../assets/images/images.webp";
import { FaCocktail } from "react-icons/fa";

interface CocktailRecommendationProps {
  recipe: RecipeInterface;
  visibility: boolean;
  onClose: () => void;
}

const CocktailRecommendation = (props: CocktailRecommendationProps) => {
  const navigate = useNavigate();
  //const { currentRecipe } = useAPIState();

  const { randomCocktailIndex, recommendedListByIngredient, updateCocktailID, cocktailList } =
    useCocktailAPIState();
  const { AddToCocktailCart } = useCocktailCartStateInterface();

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

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
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
              src={recommendedListByIngredient[randomCocktailIndex].strDrinkThumb}
              alt={recommendedListByIngredient[randomCocktailIndex].strDrink}
            />
            <div className="container-cocktail">
              <h3>{recommendedListByIngredient[randomCocktailIndex].strDrink}</h3>
              {/* <Button style={{marginBottom:"10px"}} variant="primary" onClick={() => seeCocktailDetails(recommendedListByIngredient[0].idDrink)}>Visa detaljer</Button> */}
              {/* <Button
                style={{ marginBottom: "10px" }}
                variant="primary"
                onClick={() => navigate("/cocktails")}
              >
                Visa fler cocktails
              </Button> */}
              <div className="cocktail-buttons">
              <span onClick={() => navigate("/cocktails")} style={{fontSize: '2.5rem'}}><FaCocktail/></span>
              <button
                className="buy-button"
                onClick={() =>
                  AddToCocktailCart(recommendedListByIngredient[randomCocktailIndex])
                }
              >
                Lägg till varukorg
              </button>
              </div>
              {/* <Button
                style={{ marginLeft: "38px" }}
                variant="danger"
                onClick={props.onClose}
              >
                Stäng
              </Button> */}
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default CocktailRecommendation;