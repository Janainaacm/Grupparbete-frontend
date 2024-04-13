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
import RecipeRecommendations from "./components/RecipeRecommendations";
import RatingStars from "./components/RatingStars";
import { RecipeInterface } from "../../Types";
import { IoIosTimer } from "react-icons/io";

const RecipeDetails = () => {
  const [recommendation, setRecommendation] = useState(false);
  const { fetchRecipe } = useAPIState();
  const location = useLocation();
  const recipe = location.state as RecipeInterface;
  const navigate = useNavigate();
  const rating = (Math.round(recipe.avgRating * 10) / 10).toFixed(1);

  // useEffect(() => {
  //   const fetchRecipeData = async () => {
  //     try {
  //       const recipe = await fetchRecipe(recipeName);
  //       console.log("Fetched recipe:", recipe);
  //     } catch (error) {
  //       console.error("Error fetching recipe:", error);
  //     }
  //   };
  //   fetchRecipeData();
  // }, [recipeName]);

  useEffect(() => {
    fetchRecipe(recipe._id);

    console.log("USE EFFECT: Recipe Details");
    console.log("fetchRecipe");
  }, [recipe.avgRating]);

  // Called from PostReview after posting a review
  // const handleRefreshReviews = () => {
  //   setRefreshReviews(state => state +1)
  // }

  return (
    <div className="recipe-details-container">
      <div className="recipe-details-header">
        <div className="recipe-details-header-grid-wrapper">
          <div className="title-side-header">
            <div className="title-side-header-content">
              <div className="recipes-btn-header-div">
                <div className="recipes-btn-header-container">
                <a className="recipes-btn-header" href="/Recept">
                  <span>RECEPT</span>
                </a>
                </div>
            </div>
            <h1 className="title-header">{recipe.title}</h1>
            <div className="categories-header-div">
            <p className="categories-header">
              {recipe.categories.join(" | ")}
            </p>
            <p className="price-header">{recipe.price} SEK</p>
            </div>
          </div>
          </div>
          <div className="picture-side-header">
            <div className="header-img">
            <img className="content-img" src={recipe.imageUrl} alt={recipe.title}/>
            </div>
          </div>
        </div>

        <div className="recipe-details-grid-wrapper">
          <div className="recipe-details-info">
            <div className="recipe-details-top-info">
              <div className="recipe-details-top-time-box">
                <IoIosTimer />
                <p className="recipe-time">{recipe.timeInMins}</p>
              </div>
              <div className="stars-box">
                <div
                  className="stars"
                  style={{ "--rating": rating }}
                  aria-label={`Rating of this product is ${rating} out of 5.`}
                />
                <p>rating: {rating}</p>
              </div>
            </div>

            <div className="recipe-description">
              <p className="text-description">{recipe.description}</p>
            </div>

            <div className="ingredients-container">
              <h3 className="ingredients-title">Ingredienser</h3>
              <ul className="ingredients-list-group">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="ingredients-list-item">
                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="instructions-container">
              <h3 className="instructions-title">Instructions:</h3>
              <ul className="instructions-list-group">
                {recipe.instructions &&
                  recipe.instructions.map((instruction, index) => (
                    <li key={index} className="instructions-list-item">
                      {instruction}
                    </li>
                  ))}
              </ul>
            </div>

            <PostReview recipeId={recipe._id} />

            <div className="recirc-list-container">
              <h4 className="reciric-list-title">Mer från Receptkungen</h4>
              <div className="reciric-list">
                <ul className="reciric-list-ul">
                  <li className="reciric-list-item">
                    <span className="receric-list-item-image">
                      <img src="" alt="" />
                    </span>
                    <div className="receric-list-overlay">
                      <h4 className="receric-list-overlay-title"></h4>
                      <p className="receric-list-overlay-categories"></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
