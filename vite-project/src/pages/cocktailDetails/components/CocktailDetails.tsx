import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCocktailCartStateInterface } from "../../../store/CocktailCartState";
import { useCocktailAPIState } from "../../../store/CocktailAPIState";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const CocktailDetails = () => {
  const { cocktailID, cocktailToRender, fetchCocktailByID } =
    useCocktailAPIState();
  const { AddToCocktailCart } = useCocktailCartStateInterface();
  const navigate = useNavigate();

  useEffect(() => {
    const savedCocktailID = localStorage.getItem("cocktailID");
    if (savedCocktailID) {
      fetchCocktailByID(savedCocktailID);
    } else {
      fetchCocktailByID(cocktailID);
    }
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => navigate("/Cocktails")}>Tillbaka</button>
      </div>

      <div
        style={{ marginBottom: "30px", marginTop: "30px" }}
        className="container"
      >
        <div className="row">
          <div className="col-md-6">
            <Card>
              <Card.Img
                variant="top"
                src={cocktailToRender.strDrinkThumb}
                alt={cocktailToRender.strDrink}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Card>
          </div>
          <div className="col-md-6">
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{cocktailToRender.strDrink}</Card.Title>
                <Card.Text>
                  <p>Alkohol: {cocktailToRender.strAlcoholic}</p>
                  <p>ID: {cocktailToRender.idDrink}</p>
                  <p>Glass: {cocktailToRender.strGlass}</p>
                  <p>Category: {cocktailToRender.strCategory}</p>
                  <button onClick={() => AddToCocktailCart(cocktailToRender)}>
                    Lägg till varukorg
                  </button>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Ingredients</Card.Title>
                <Card.Text>
                  <ul className="list-unstyled">
                    {[...Array(15).keys()].map((index) => {
                      const measure =
                        cocktailToRender[`strMeasure${index + 1}`];
                      const ingredient =
                        cocktailToRender[`strIngredient${index + 1}`];
                      return (
                        measure &&
                        ingredient && (
                          <li key={index}>
                            {measure} {ingredient}
                          </li>
                        )
                      );
                    })}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Instructions</Card.Title>
                <Card.Text>{cocktailToRender.strInstructions}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetails;
