import { CocktailInterface } from "../../cocktails/components/DisplayCocktail";
import { NavigateFunction } from "react-router-dom";
import { useCocktailCartStateInterface } from "../../../store/CocktailCart";
import Cart from "../../../globalComponents/Cart/SCPop";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Card } from "react-bootstrap";


interface DrinkDetailsProps {
    drinks: CocktailInterface,
    navigate: NavigateFunction
    
};

const CocktailDetails = ({ drinks, navigate }: DrinkDetailsProps,) => {

    const { AddToCocktailCart } = useCocktailCartStateInterface();


    return (

        <div style={{marginBottom: "30px", marginTop:"30px"}} className="container">
    <div className="row">
        <div className="col-md-6">
            <Card>
                <Card.Img variant="top" src={drinks.strDrinkThumb} alt={drinks.strDrink} style={{ maxWidth: '100%', height: 'auto' }}  /> 
            </Card>
            
        </div>
        <div className="col-md-6">
        <Card className="mb-3">
                <Card.Body>
                    <Card.Title>{drinks.strDrink}</Card.Title>
                    <Card.Text>
                        <p>Alkohol: {drinks.strAlcoholic}</p>
                        <p>ID: {drinks.idDrink}</p>
                        <p>Glass: {drinks.strGlass}</p>
                        <p>Category: {drinks.strCategory}</p>
                        <button onClick={() => AddToCocktailCart(drinks)}>Lägg till varukorg</button>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Ingredients</Card.Title>
                    <Card.Text>
                        <ul className="list-unstyled">
                            {[...Array(15).keys()].map((index) => {
                                const measure = drinks[`strMeasure${index + 1}`];
                                const ingredient = drinks[`strIngredient${index + 1}`];
                                return (measure && ingredient) && (
                                    <li key={index}>{measure} {ingredient}</li>
                                );
                            })}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mt-3">
                <Card.Body>
                    <Card.Title>Instructions</Card.Title>
                    <Card.Text>
                        {drinks.strInstructions}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>
</div>

    );
};

export default CocktailDetails