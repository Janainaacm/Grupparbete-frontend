import { useEffect, useState } from "react";
import { CocktailInterface } from "../../cocktails/components/DisplayAllCocktails";
import { NavigateFunction, Navigate, useNavigate } from "react-router-dom";
import { useCocktailCartStateInterface } from "../../../store/CocktailCart";
import { useCocktailAPIState } from "../../../store/CocktailAPI";
import Cart from "../../../globalComponents/Cart/SCPop";

const CocktailDetails = () => {
  const { cocktailID, cocktailToRender, fetchCocktailByID } =
    useCocktailAPIState();
  const { AddToCocktailCart } = useCocktailCartStateInterface();
  const navigate = useNavigate();


  useEffect(() => {
    //fetchCocktailID()
    console.log(cocktailID)
    fetchCocktailByID(cocktailID);
  },[]);

  return (
    <div>
      <p>CocktailDetails</p>
      <button onClick={() => navigate("/Cocktails")}>Tillbaka</button>

      <div>
        <h2>{cocktailToRender.strDrink}</h2>

        <img
          src={cocktailToRender.strDrinkThumb}
          alt={cocktailToRender.strDrink}
          style={{ width: "200px", height: "200px", marginBottom: "5px" }}
        />
        <br />
        <button
          className="remove-button"
          onClick={() => AddToCocktailCart(cocktailToRender)}
        >
          Lägg till varukorg
        </button>

        <p>Alkohol: {cocktailToRender.strAlcoholic}</p>

        <p>ID: {cocktailToRender.idDrink}</p>

        <p>Glass: {cocktailToRender.strGlass}</p>

        <p>Category: {cocktailToRender.strCategory}</p>

        <h3>Ingredients:</h3>

        <p>
          {cocktailToRender.strMeasure1} {cocktailToRender.strIngredient1}
        </p>
        <p>
          {cocktailToRender.strMeasure2} {cocktailToRender.strIngredient2}
        </p>
        <p>
          {cocktailToRender.strMeasure3} {cocktailToRender.strIngredient3}
        </p>
        <p>
          {cocktailToRender.strMeasure4} {cocktailToRender.strIngredient4}
        </p>
        <p>
          {cocktailToRender.strMeasure5} {cocktailToRender.strIngredient5}
        </p>
        <p>
          {cocktailToRender.strMeasure6} {cocktailToRender.strIngredient6}
        </p>
        <p>
          {cocktailToRender.strMeasure7} {cocktailToRender.strIngredient7}
        </p>
        <p>
          {cocktailToRender.strMeasure8} {cocktailToRender.strIngredient8}
        </p>
        <p>
          {cocktailToRender.strMeasure9} {cocktailToRender.strIngredient9}
        </p>
        <p>
          {cocktailToRender.strMeasure10} {cocktailToRender.strIngredient10}
        </p>
        <p>
          {cocktailToRender.strMeasure11} {cocktailToRender.strIngredient11}
        </p>
        <p>
          {cocktailToRender.strMeasure12} {cocktailToRender.strIngredient12}
        </p>
        <p>
          {cocktailToRender.strMeasure13} {cocktailToRender.strIngredient13}
        </p>
        <p>
          {cocktailToRender.strMeasure14} {cocktailToRender.strIngredient14}
        </p>
        <p>
          {cocktailToRender.strMeasure15} {cocktailToRender.strIngredient15}
        </p>

        <h3>Instructions:</h3>

        <p>{cocktailToRender.strInstructions}</p>
      </div>
    </div>
  );
};

export default CocktailDetails;
