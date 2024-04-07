//Joel
import DeleteButton from "../../globalComponents/DeleteButton";
import "./RecipeDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../globalComponents/NavBar";
import AddToCartButton from "../../globalComponents/Cart/AddToCartButton";
import { useAPIState } from "../../store/APIState";
import { useEffect } from "react";
import EmptyCartButton from "../../globalComponents/Cart/EmptyCartButton";
import PostReview from "../../globalComponents/PostReview";

const RecipeDetails = () => {
  const { fetchRecipe } = useAPIState();
  const { state: recipe } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch recipe details when component mounts
    fetchRecipe(recipe._id);
  }, [fetchRecipe, recipe._id]);

  return (
    <div>
      <NavBar />
      <div className="flex-container">
        <div className="recipe-card">
          <div className="recipe-section">
            <div className="recipe-image-container">
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="recipe-image"
              />
            </div>
            <div className="recipe-details-container">
              <h1>{recipe.title}</h1>
              <p>
                <strong>Description:</strong> <br />
                {recipe.description}
              </p>
              <p>
                <strong>Time:</strong> {recipe.timeInMins} minutes
              </p>
              <p>
                <strong>Categories:</strong> {recipe.categories.join(", ")}
              </p>
              <p>
                <strong>Rating:</strong> {recipe.avgRating}
              </p>
              <AddToCartButton recipe={recipe} />
              <EmptyCartButton />
              <div>
              <PostReview recipeId={recipe._id}/>
            </div>
            </div>
            
          </div>
        </div>
        <div className="card-separator">
          <div className="instructions-container">
            <h3>Instructions:</h3>
            <ol style={{ paddingLeft: "1px", whiteSpace: "pre-wrap" }}>
              {recipe.instructions &&
                recipe.instructions.map((instruction, index) => (
                  <ul key={index}>{instruction}</ul>
                ))}
            </ol>
          </div>
          <div className="ingredients-container">
            <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.amount} {ingredient.unit} {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <DeleteButton recipeId={recipe._id} />
        <button onClick={() => navigate(-1)}>Tillbaka</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
