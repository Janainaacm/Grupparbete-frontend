//Joel
import DeleteButton from "../recipes/components/DeleteRecipeButton";
import NavBar from "../../globalComponents/NavBar/NavBar";
import EmptyCartButton from "../../globalComponents/NavBar/Cart/EmptyCartButton";
import "./RecipeDetailsPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import AddToCartButton from "./components/AddToCartButton";
import { useAPIState } from "../../store/APIState";
import { useEffect, useState } from "react";
import PostReview from "./components/PostReview";
import DisplayReviews from "./components/DisplayReviews";
import "bootstrap/dist/css/bootstrap.min.css";
import CocktailRecommendation from "./components/CocktailRecommendation";
import RatingStars from "./components/RatingStars";
import { RecipeInterface } from "../../Types";
import { useCocktailAPIState } from "../../store/CocktailAPIState";

const RecipeDetails = () => {
  
  const navigate = useNavigate();
  const [recommendation, setRecommendation] = useState(false);
  const { recipeID, currentRecipe, fetchRecipe, fetchReviews } = useAPIState();
  const { fetchCocktails, fetchCocktailListByIngredient } = useCocktailAPIState();
  
  
 useEffect(() => {
  const savedRecipeID = localStorage.getItem("recipeID");
  if (savedRecipeID) {
    console.log("fetching local storage")
    fetchRecipe(savedRecipeID)    
    fetchReviews(savedRecipeID);
  }else{
    fetchRecipe(recipeID)
    fetchReviews(recipeID);
  }
  fetchCocktails()
 },[])

 
   
   const checkCurrentRecipeCategory = () => {
    switch (currentRecipe.categories[0]) {
      case "Kött":
        fetchCocktailListByIngredient("orange")
        break;
      case "Fisk":
        fetchCocktailListByIngredient("lemon") 
        break;
      case "Vego":
        fetchCocktailListByIngredient("lime")
        break;
      case "Kyckling":
        fetchCocktailListByIngredient("banana")
        break;
      case "Dessert":
        fetchCocktailListByIngredient("ice")
        break;
      case "Övrigt":
        fetchCocktailListByIngredient("milk") 
        break;
     
      default:
        console.log("Default!");
        break;
    }
  };



  return (
    <div>
      <CocktailRecommendation recipe={currentRecipe} visibility={recommendation} onClose={() => setRecommendation(false)} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <img
                src={currentRecipe.imageUrl}
                className="card-img-top"
                alt={currentRecipe.title}
              />
            </div>
            <div>
              <DisplayReviews />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="card-body">
                <h5 className="card-title">{currentRecipe.title}</h5>
                <p className="card-text">{currentRecipe.description}</p>
                <p className="card-text">Time: {currentRecipe.timeInMins} minutes</p>
                <p className="card-text">Categories: {currentRecipe.categories.join(', ')}</p>
                {/* <p className="card-text"><RatingStars></RatingStars></p> */}
                <AddToCartButton recipe={currentRecipe} recommendation={() => setRecommendation(true)} checkCategory={() => checkCurrentRecipeCategory()} />
                {/* <button onClick={() => setRecommendation(true)}>Cocktail Recommendationer</button> */}
                <PostReview recipeId={currentRecipe._id}/>
              </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Ingredients:</h5>
                <ul className="list-group list-group-flush">
                  {currentRecipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="list-group-item">
                      {ingredient.amount} {ingredient.unit} {ingredient.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <h5 className="card-title">Instructions:</h5>
                  {currentRecipe.instructions &&
                    currentRecipe.instructions.map((instruction, index) => (
                      <li key={index} className="list-group-item">
                        {instruction}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button
          /* className="btn btn-secondary mt-3" */ onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
