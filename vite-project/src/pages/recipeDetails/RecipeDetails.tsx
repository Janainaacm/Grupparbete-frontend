//Joel
import DeleteButton from "../../globalComponents/DeleteButton";
import "./RecipeDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../globalComponents/NavBar";
import AddToCartButton from "../../globalComponents/Cart/AddToCartButton";
import { useAPIState } from "../../store/APIState";
import { useEffect, useState } from "react";
import EmptyCartButton from "../../globalComponents/Cart/EmptyCartButton";
import PostReview from "../../globalComponents/PostReview";
import DisplayReviews from "../../globalComponents/DisplayReviews";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeRecommendations from "./RecipeRecommendations";
import RatingStars from "./RatingStars";
import { RecipeInterface } from "../../Types";

const RecipeDetails = () => {


  const [recommendation, setRecommendation] = useState(false);


  const { fetchRecipe } = useAPIState();
  const location = useLocation();
  const recipe = location.state as RecipeInterface;
  const navigate = useNavigate();

  // state to update
  // const [refreshReviews, setRefreshReviews] = useState(0);

  useEffect(() => {
    fetchRecipe(recipe._id);
  }, [recipe._id, recipe.avgRating]);

  // Called from PostReview after posting a review
  // const handleRefreshReviews = () => {
  //   setRefreshReviews(state => state +1)
  // }

  return (
    <div>
      <NavBar />
      <RecipeRecommendations recipe={recipe} visibility={recommendation} onClose={() => setRecommendation(false)} ></RecipeRecommendations>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <img
                src={recipe.imageUrl}
                className="card-img-top"
                alt={recipe.title}
              />
            </div>
            <div>
              <DisplayReviews recipeID={recipe._id}/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.description}</p>
                <p className="card-text">Time: {recipe.timeInMins} minutes</p>
                <p className="card-text">Categories: {recipe.categories.join(', ')}</p>
                <p className="card-text"><RatingStars></RatingStars></p>
                <AddToCartButton recipe={recipe} /* recommendation={() => setRecommendation(true)} *//>
                <EmptyCartButton />
                <button 
                className="cocktail-recommendationer"
                onClick={() => setRecommendation(true)}>Cocktail Recommendationer</button>
                <PostReview recipeId={recipe._id}/>
              </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Ingredients:</h5>
                <ul className="list-group list-group-flush">
                  {recipe.ingredients.map((ingredient, index) => (
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
                  {recipe.instructions &&
                    recipe.instructions.map((instruction, index) => (
                      <li key={index} className="list-group-item">
                        {instruction}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <DeleteButton recipeId={recipe._id} />
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
