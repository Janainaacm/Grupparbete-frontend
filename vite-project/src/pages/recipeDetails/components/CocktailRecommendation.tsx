import { useEffect } from "react";
import { useAPIState } from "../../../store/APIState";
import { useCocktailAPIState } from "../../../store/CocktailAPIState";
import { useCocktailCartStateInterface } from "../../../store/CocktailCartState";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RecipeInterface } from "../../../Types";

interface CocktailRecommendationProps {
    recipe: RecipeInterface;
  visibility: boolean;
  onClose: () => void;
}

const CocktailRecommendation = (props: CocktailRecommendationProps) => {
  const navigate = useNavigate();
  //const { currentRecipe } = useAPIState();
  const { updateCocktailID, cocktailList } = useCocktailAPIState();
  const { AddToCocktailCart } = useCocktailCartStateInterface();

  const displayCocktailDetails = async (cocktailID: string,cocktailName: string) => {
    updateCocktailID(cocktailID);
    navigate(`/Cocktails/${cocktailName}`);
  };

  useEffect(() => {

  }, []);





  const categories = [
    { category: "Dessert", recommendedCocktail: "Orgasm" },
    { category: "Kött", recommendedCocktail: "Quick F**K" },
    { category: "Fisk", recommendedCocktail: "Fuzzy Asshole" },
    { category: "Sprängmedel", recommendedCocktail: "Pink Panty Pulldowns" },
    { category: "Kyckling", recommendedCocktail: "A Piece of Ass" },
    { category: "Övrigt", recommendedCocktail: "Death in the Afternoon" },
    { category: "Förrätt", recommendedCocktail: "Foxy Lady" },
    { category: "Bra", recommendedCocktail: "Appello" },
    { category: "Vego", recommendedCocktail: "Pornstar Martini" },
];


  return (
    <div
      id="modal"
      style={{
        display: props.visibility ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
      }}
    >
      {categories.map(
        ({ category, recommendedCocktail }) =>
          props.recipe.categories[0] === category && (
            <div key={category} className="recommended-cocktail">
              {cocktailList.map(
                (recCock) =>
                  recCock.strDrink === recommendedCocktail && (
                    <Card key={recCock.idDrink} style={{ width: "18rem" }}>
                      <Card.Img
                        onClick={() =>
                          displayCocktailDetails(
                            recCock.idDrink,
                            recCock.strDrink
                          )
                        }
                        variant="top"
                        src={recCock.strDrinkThumb}
                        alt={recCock.strDrink}
                      />
                      <Card.Body>
                        <Card.Title>{recCock.strDrink}</Card.Title>
                        {/* <Button style={{marginBottom:"10px"}} variant="primary" onClick={() => seeCocktailDetails(recCock.idDrink)}>Visa detaljer</Button> */}
                        <Button
                          style={{ marginBottom: "10px" }}
                          variant="primary"
                          onClick={() => navigate("/cocktails")}
                        >
                          Visa fler cocktails
                        </Button>
                        <Button
                          variant="success"
                          onClick={() => AddToCocktailCart(recCock)}
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
                  )
              )}
            </div>
          )
      )}
    </div>
  );
};

export default CocktailRecommendation;
