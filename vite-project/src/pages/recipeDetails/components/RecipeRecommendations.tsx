import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { RecipeInterface } from '../../../Types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCocktailCartStateInterface } from '../../../store/CocktailCart';
import getAlcoholicCocktails from './getAlcoholicCocktails';

interface RecipeRecommendationsProps {
    recipe: RecipeInterface;
    visibility: boolean;
    onClose: () => void;
}

const URL3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const RecipeRecommendations = ({ recipe, visibility, onClose }: RecipeRecommendationsProps) => {
    const navigate = useNavigate();
    const { AddToCocktailCart } = useCocktailCartStateInterface();

    const seeCocktailDetails = async (idDrink: string) => {
        const response = await axios.get(`${URL3 + idDrink}`);
        if (response.status === 200) {
            const cocktail = response.data.drinks;
            const selectedCocktail = cocktail[0];
            const encodedCocktail = encodeURIComponent(selectedCocktail.strDrink);
            navigate(`/Cocktails/${encodedCocktail}`, {
                state: { cocktail: selectedCocktail },
            });
        }
    };

    const recommendedCocktails = getAlcoholicCocktails(); 

    
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
                        {recommendedCocktails.map((recCock) => (
                            recCock.strDrink === recommendedCocktail && (
                                <Card key={recCock.idDrink} style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={recCock.strDrinkThumb} alt={recCock.strDrink} />
                                    <Card.Body>
                                        <Card.Title>{recCock.strDrink}</Card.Title>
                                        <Button style={{marginBottom:"10px"}} variant="primary" onClick={() => seeCocktailDetails(recCock.idDrink)}>Visa detaljer</Button>
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

