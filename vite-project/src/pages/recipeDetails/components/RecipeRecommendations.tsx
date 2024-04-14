import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { RecipeInterface } from '../../../Types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCocktailCartStateInterface } from '../../../store/CocktailCart';
import getAlcoholicCocktails from './getAlcoholicCocktails';
import { useCocktailAPIState } from '../../../store/CocktailAPI';

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

    //const recommendedCocktails = getAlcoholicCocktails(); 

    
    const categories = [
        { category: "Dessert", recommendedCocktail: "A Piece of Ass" },
        { category: "Kött", recommendedCocktail: "Pink Panty Pulldowns" },
        { category: "Fisk", recommendedCocktail: "110 in the shade" },
        { category: "Sprängmedel", recommendedCocktail: "Absolut Sex" },
        { category: "Kyckling", recommendedCocktail: "Quick F**K" },
        { category: "Övrigt", recommendedCocktail: "Orgasm" },
        { category: "Förrätt", recommendedCocktail: "Affinity" },
        { category: "Bra", recommendedCocktail: "Quaker's Cocktail" },
        { category: "Vego", recommendedCocktail: "After sex" },
    ];

    return (
        
        <div id='modal' style={{ display: visibility ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",}}>
            {categories.map(({ category, recommendedCocktail }) => (
                recipe.categories[0] === category && (
                    <div key={category} className='recommended-cocktail'>
                        {cocktailList.map((recCock) => (
                            recCock.strDrink === recommendedCocktail && (
                                <Card key={recCock.idDrink} style={{ width: '18rem' }}>
                                    <Card.Img onClick={() => displayCocktailDetails(recCock.idDrink, recCock.strDrink)} variant="top" src={recCock.strDrinkThumb} alt={recCock.strDrink} />
                                    <Card.Body>
                                        <Card.Title>{recCock.strDrink}</Card.Title>
                                        {/* <Button style={{marginBottom:"10px"}} variant="primary" onClick={() => seeCocktailDetails(recCock.idDrink)}>Visa detaljer</Button> */}
                                        <Button style={{marginBottom:"10px"}} variant="primary" onClick={() => navigate("/cocktails")}>Visa fler cocktails</Button>
                                        <Button variant="success" onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</Button>
                                        <Button style={{marginLeft: "38px"}} variant="danger" onClick={onClose}>Stäng</Button>
                                    </Card.Body>
                                </Card>
                            )
                        ))}
                    </div>
                )
            ))}
        </div>
    );
};

export default RecipeRecommendations;

