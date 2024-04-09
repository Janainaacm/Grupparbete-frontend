import { CocktailInterface } from "../../../api/getCocktails";
import { NavigateFunction } from "react-router-dom";
import { useCocktailCartStateInterface } from "../../../store/CocktailCart";


interface DrinkDetailsProps {
    drinks: CocktailInterface,
    navigate: NavigateFunction
    
};

const CocktailDetails = ({ drinks, navigate }: DrinkDetailsProps,) => {

    const { AddToCocktailCart } = useCocktailCartStateInterface();


    return (

        <div>
            <p>CocktailDetails</p>
            <button onClick={() => navigate("/Cocktails")}>Tillbaka</button>

            <div>
                <h2>{drinks.strDrink}</h2>

                <img src={drinks.strDrinkThumb} alt={drinks.strDrink} style={{ width: '200px', height: '200px', marginBottom: '5px' }} />
                <br />
                <button className='remove-button' onClick={() => AddToCocktailCart(drinks)}>Lägg till varukorg</button>

                <p>Alkohol: {drinks.strAlcoholic}</p>

                <p>ID: {drinks.idDrink}</p>

                <p>Glass: {drinks.strGlass}</p>

                <p>Category: {drinks.strCategory}</p>

                <h3>Ingredients:</h3>

                <p>{drinks.strMeasure1} {drinks.strIngredient1}</p>
                <p>{drinks.strMeasure2} {drinks.strIngredient2}</p>
                <p>{drinks.strMeasure3} {drinks.strIngredient3}</p>
                <p>{drinks.strMeasure4} {drinks.strIngredient4}</p>
                <p>{drinks.strMeasure5} {drinks.strIngredient5}</p>
                <p>{drinks.strMeasure6} {drinks.strIngredient6}</p>
                <p>{drinks.strMeasure7} {drinks.strIngredient7}</p>
                <p>{drinks.strMeasure8} {drinks.strIngredient8}</p>
                <p>{drinks.strMeasure9} {drinks.strIngredient9}</p>
                <p>{drinks.strMeasure10} {drinks.strIngredient10}</p>
                <p>{drinks.strMeasure11} {drinks.strIngredient11}</p>
                <p>{drinks.strMeasure12} {drinks.strIngredient12}</p>
                <p>{drinks.strMeasure13} {drinks.strIngredient13}</p>
                <p>{drinks.strMeasure14} {drinks.strIngredient14}</p>
                <p>{drinks.strMeasure15} {drinks.strIngredient15}</p>

                <h3>Instructions:</h3>

                <p>{drinks.strInstructions}</p>



            </div>





        </div>

    );
};

export default CocktailDetails