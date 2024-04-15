import { useEffect } from "react";
import { useAPIState } from "../../../store/APIState";
import { useCocktailAPIState } from "../../../store/CocktailAPIState";
import { useCocktailCartStateInterface } from "../../../store/CocktailCartState";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CocktailInterface, RecipeInterface } from "../../../Types";
import drink from "../../../assets/images/images.webp";

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

  useEffect(() => {}, []);


  // LOGIK SLUMPAA FRÅN ARRAY recommendedListByIngredient
const pickRandomFromList = () => {
    
}


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
            <Card.Body>
              <Card.Title>{recommendedListByIngredient[randomCocktailIndex].strDrink}</Card.Title>
              {/* <Button style={{marginBottom:"10px"}} variant="primary" onClick={() => seeCocktailDetails(recommendedListByIngredient[0].idDrink)}>Visa detaljer</Button> */}
              <Button
                style={{ marginBottom: "10px" }}
                variant="primary"
                onClick={() => navigate("/cocktails")}
              >
                Visa fler cocktails
              </Button>
              <Button
                variant="success"
                onClick={() =>
                  AddToCocktailCart(recommendedListByIngredient[randomCocktailIndex])
                }
              >
                Lägg till varukorg
              </Button>
              <Button
                style={{ marginLeft: "38px" }}
                variant="danger"
                onClick={props.onClose}
              >
                Stäng
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default CocktailRecommendation;
