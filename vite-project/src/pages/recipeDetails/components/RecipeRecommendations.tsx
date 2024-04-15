import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { RecipeInterface } from '../../../Types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCocktailCartStateInterface } from '../../../store/CocktailCartState';
/* import getAlcoholicCocktails from './getAlcoholicCocktails';
 */import { useCocktailAPIState } from '../../../store/CocktailAPIState';

interface RecipeRecommendationsProps {
    recipe: RecipeInterface;
    visibility: boolean;
    onClose: () => void;
}


const RecipeRecommendations = ({ recipe, visibility, onClose }: RecipeRecommendationsProps) => {
    const navigate = useNavigate();
    const { AddToCocktailCart } = useCocktailCartStateInterface();
    const { updateCocktailID, cocktailList } = useCocktailAPIState()

    const displayCocktailDetails = async (cocktailID: string, cocktailName: string) => {
        updateCocktailID(cocktailID)
        navigate(`/Cocktails/${cocktailName}`);
    };


    const addCocktailToCart = (cocktail) => {
        AddToCocktailCart(cocktail);
/*         onClose();
 */    };


    const random = Math.floor(Math.random() * 2)

    const categories = [
        { category: "Dessert", recommendedCocktail: ["Orgasm", "Quick F**K"] },
        { category: "Kött", recommendedCocktail: ["Quick F**K", "Pink Panty Pulldowns"] },
        { category: "Fisk", recommendedCocktail: ["Fuzzy Asshole", "Popped cherry"] },
        { category: "Sprängmedel", recommendedCocktail: ["Pink Panty Pulldowns", "Pink Moon"] },
        { category: "Kyckling", recommendedCocktail: ["A Piece of Ass", "Foxy Lady"] },
        { category: "Övrigt", recommendedCocktail: ["Absolut Sezx", "Pure Passion"] },
        { category: "Förrätt", recommendedCocktail: ["Pure Passion", "Pink Penocha"] },
        { category: "Bra", recommendedCocktail: ["Paradise", "Pink Penocha"] },
        { category: "Vego", recommendedCocktail: ["Pornstar Martini", "Orgasm"] },
    ];

    return (
        <div id='modal-cocktail' style={{
            display: visibility && categories.some(({ category, recommendedCocktail }) =>
                recipe.categories[0] === category && cocktailList.some(recCock => recCock.strDrink === recommendedCocktail[random])
            ) ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
        }}>
            {categories.map(({ category, recommendedCocktail }) => (
                recipe.categories[0] === category && (
                    <div key={category} className='recommended-cocktail'>
                        {cocktailList.map((recCock) => (
                            recCock.strDrink === recommendedCocktail[random] && (
                                <Card key={recCock.idDrink} style={{ width: '18rem' }}>
                                    <Card.Img onClick={() => displayCocktailDetails(recCock.idDrink, recCock.strDrink)} variant="top" src={recCock.strDrinkThumb} alt={recCock.strDrink} />
                                    <Card.Body>
                                        <Card.Title>{recCock.strDrink}</Card.Title>
                                        {/* <Button style={{marginBottom:"10px"}} variant="primary" onClick={() => seeCocktailDetails(recCock.idDrink)}>Visa detaljer</Button> */}
                                        <Button style={{ marginBottom: "10px" }} variant="primary" onClick={() => navigate("/cocktails")}>Visa fler cocktails</Button>
                                        <Button variant="success" onClick={() => addCocktailToCart(recCock)}>Lägg till varukorg</Button>
                                        <Button style={{ marginLeft: "38px" }} variant="danger" onClick={onClose}>Stäng</Button>
                                    </Card.Body>
                                </Card>
                            )
                        ))}
                    </div>
                )
            ))}
        </div>
    );
}
export default RecipeRecommendations;

