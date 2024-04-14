//Joel
import DeleteButton from "../../globalComponents/DeleteButton";
import NavBar from "../../globalComponents/NavBar";
import EmptyCartButton from "../../globalComponents/Cart/EmptyCartButton";
import "./RecipeDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import AddToCartButton from "../../globalComponents/Cart/AddToCartButton";
import { useAPIState } from "../../store/APIState";
import { useEffect, useState } from "react";
import PostReview from "../../globalComponents/PostReview";
import DisplayReviews from "../../globalComponents/DisplayReviews";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeRecommendations from "./components/RecipeRecommendations";
import RatingStars from "./components/RatingStars";
import { RecipeInterface } from "../../Types";
import { useCocktailAPIState } from "../../store/CocktailAPI";

const RecipeDetails = () => {
  
  const navigate = useNavigate();
  const [recommendation, setRecommendation] = useState(false);
  const { recipeID, currentRecipe, fetchRecipe, fetchReviews } = useAPIState();
  const { fetchCocktails } = useCocktailAPIState();
  
  
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
 },[])

  useEffect(() => {
    fetchCocktails()
  }, []);

  // Called from PostReview after posting a review
  // const handleRefreshReviews = () => {
  //   setRefreshReviews(state => state +1)
  // }

  return (
    <div>
      <RecipeRecommendations recipe={currentRecipe} visibility={recommendation} onClose={() => setRecommendation(false)} />

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
                <AddToCartButton recipe={currentRecipe} recommendation={() => setRecommendation(true)} />
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
