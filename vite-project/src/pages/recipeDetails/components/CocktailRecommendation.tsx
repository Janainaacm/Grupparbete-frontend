import { useEffect } from "react";
import { useAPIState } from "../../../store/APIState";
import { useCocktailAPIState } from "../../../store/CocktailAPIState";
import { useCocktailCartStateInterface } from "../../../store/CocktailCartState";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RecipeInterface } from "../../../Types";
import drink from "../../../assets/images/images.webp";

interface CocktailRecommendationProps {
  recipe: RecipeInterface;
  visibility: boolean;
  onClose: () => void;
}

const CocktailRecommendation = (props: CocktailRecommendationProps) => {
  const navigate = useNavigate();
  //const { currentRecipe } = useAPIState();

  const { recommendedListByIngredient, updateCocktailID, cocktailList } =
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

  //   const categories = [
  //     { category: "Dessert", recommendedCocktail: "Orgasm" },
  //     { category: "Kött", recommendedCocktail: "Quick F**K" },
  //     { category: "Fisk", recommendedCocktail: "Fuzzy Asshole" },
  //     { category: "Sprängmedel", recommendedCocktail: "Pink Panty Pulldowns" },
  //     { category: "Kyckling", recommendedCocktail: "A Piece of Ass" },
  //     { category: "Övrigt", recommendedCocktail: "Death in the Afternoon" },
  //     { category: "Förrätt", recommendedCocktail: "Foxy Lady" },
  //     { category: "Bra", recommendedCocktail: "Appello" },
  //     { category: "Vego", recommendedCocktail: "Pornstar Martini" },
  //   ];

  // LOGIK SLUMPAA FRÅN ARRAY recommendedListByIngredient

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
            key={recommendedListByIngredient[0].idDrink}
            style={{ width: "18rem" }}
          >
            <Card.Img
              onClick={() =>
                displayCocktailDetails(
                  recommendedListByIngredient[0].idDrink,
                  recommendedListByIngredient[0].strDrink
                )
              }
              variant="top"
              src={recommendedListByIngredient[0].strDrinkThumb}
              alt={recommendedListByIngredient[0].strDrink}
            />
            <Card.Body>
              <Card.Title>{recommendedListByIngredient[0].strDrink}</Card.Title>
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
                  AddToCocktailCart(recommendedListByIngredient[0])
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
