import "./RecipeDetailsPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useRecipeAPIState } from "../../store/RecipeAPIState";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { useCocktailAPIState } from "../../store/CocktailAPIState";
import DisplayReviews from "./components/DisplayReviews";
import PostReview from "./components/PostReview";
import CocktailRecommendation from "./components/CocktailRecommendation";
import Button from "react-bootstrap/esm/Button";
import Collapse from "react-bootstrap/esm/Collapse";
import AddToCartButton from "./components/AddToCartButton";

const RecipeDetails = () => {
  const [recommendation, setRecommendation] = useState(false);
  const {
    recipeID,
    currentRecipe,
    recipeList,
    randomRecipeList,
    fetchRecipe,
    fetchReviews,
    setRecipeIDState,
    setRandomRecipeList,
  } = useRecipeAPIState();
  const { fetchCocktails, fetchCocktailListByIngredient } =
    useCocktailAPIState();
  const navigate = useNavigate();

  const rating = (Math.round(currentRecipe.avgRating * 10) / 10).toFixed(1);
  const [open, setOpen] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(<FaAngleDown />);

  const handleDropDownFocus = () => {
    setOpen(!open);
    setToggleDropDown(open ? <FaAngleDown /> : <FaAngleUp />);
  };

  useEffect(() => {
    const savedRecipeID = localStorage.getItem("recipeID");
    if (savedRecipeID) {
      fetchRecipe(savedRecipeID);
      fetchReviews(savedRecipeID);
    } else {
      fetchRecipe(recipeID);
      fetchReviews(recipeID);
    }
    fetchCocktails();
  }, []);

  useEffect(() => {
    const savedRecipeID = localStorage.getItem("recipeID");
    if (savedRecipeID) {
      fetchRecipe(savedRecipeID);
      fetchReviews(savedRecipeID);
    } else {
      fetchRecipe(recipeID);
      fetchReviews(recipeID);
    }
    fetchCocktails();
  }, [recipeID]);

  useEffect(() => {
    excludeCurrentRecipe();
  }, [currentRecipe]);

  const checkCurrentRecipeCategory = () => {
    switch (currentRecipe.categories[0]) {
      case "Kött":
        fetchCocktailListByIngredient("orange");
        break;
      case "Fisk":
        fetchCocktailListByIngredient("lemon");
        break;
      case "Vego":
        fetchCocktailListByIngredient("lime");
        break;
      case "Kyckling":
        fetchCocktailListByIngredient("banana");
        break;
      case "Dessert":
        fetchCocktailListByIngredient("ice");
        break;
      case "Övrigt":
        fetchCocktailListByIngredient("milk");
        break;

      default:
        console.log("Default!");
        break;
    }
  };

  function shuffle<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  const excludeCurrentRecipe = () => {
    const filteredRecipes = recipeList.filter(
      (item) => item._id !== currentRecipe._id
    );
    const recipesToShow = shuffle(filteredRecipes).slice(0, 6);
    setRandomRecipeList(recipesToShow);
  };

  const linkToRecipe = (recipeId: string, recipeName: string) => {
    setRecipeIDState(recipeId);
    navigate(`/Recept/${recipeName}`);
  };

  return (
    <div className="recipe-details-container">
      <div className="recipe-details-header">
        <div className="recipe-details-header-grid-wrapper">
          <div className="title-side-header">
            <div className="title-side-header-content">
              <div
                onClick={() => navigate("/Recept")}
                className="reciric-list-all-recipes-button"
              >
                <span className="noselect">RECEPT</span>
              </div>
              <CocktailRecommendation
                recipe={currentRecipe}
                visibility={recommendation}
                onClose={() => setRecommendation(false)}
              />
              <h1 className="title-header">{currentRecipe.title}</h1>
              <div className="categories-header-div">
                <p className="categories-header">
                  {currentRecipe.categories.join(" | ")}
                </p>
                <p className="price-header">{currentRecipe.price} SEK</p>
              </div>
              <AddToCartButton
                recipe={currentRecipe}
                recommendation={() => setRecommendation(true)}
                checkCategory={() => checkCurrentRecipeCategory()}
              />
            </div>
          </div>
          <div className="picture-side-header">
            <div className="header-img">
              <img
                className="content-img"
                src={currentRecipe.imageUrl}
                alt={currentRecipe.title}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="recipe-details-info">
        <div className="recipe-details-grid-wrapper">
          <div className="recipe-details-main-grid">
            <div className="recipe-details-top-info">
              <ul className="recipe-details-top-info-list">
                <li className="list-items">
                  <div className="stars-box">
                    <div
                      className="stars"
                      style={{ "--rating": rating }}
                      aria-label={`Rating of this product is ${rating} out of 5.`}
                    />{" "}
                    rating: {rating}
                  </div>
                </li>
                <li className="list-items">
                  <div className="time-box">
                    <p className="recipe-time">
                      <IoIosTimer /> {currentRecipe.timeInMins} min
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="recipe-description-div">
              <div className="recipe-description-grid">
                <div className="recipe-description-style">
                  <p className="recipe-description-text">
                    {currentRecipe.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="ingredients-container">
              <h3 className="ingredients-title">Ingredienser</h3>
              <div className="ingredients-list-group">
                <div className="ingredients-list-grid">
                  {currentRecipe.ingredients.map((ingredient, index) => (
                    <div key={index}>
                      <p className="ingredient-amount">
                        {ingredient.amount} {ingredient.unit}
                      </p>
                      <p className="ingredient-name">{ingredient.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="instructions-container">
              <h3 className="instructions-title">Instruktioner</h3>
              <ol className="instructions-list-group">
                {currentRecipe.instructions &&
                  currentRecipe.instructions.map((instruction, index) => (
                    <li key={index} className="instructions-list-item">
                      <h6 className="step-title">Steg {index + 1}</h6>
                      <p className="instruction-title">{instruction}</p>
                    </li>
                  ))}
              </ol>
            </div>
          </div>

          <div className="recipe-details-side-grid">
            <PostReview
              recipeId={currentRecipe._id}
              recipeName={currentRecipe.title}
            />
            <div className="reviews-container">
              <Button
                id="toggle-reviews-button-rd"
                onClick={() => handleDropDownFocus()}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <h3 className="reviews-title">Omdömen {toggleDropDown}</h3>
                {""}
              </Button>
              <Collapse in={open}>
                <div id="reviews-inside-collapse-rd">
                  <DisplayReviews recipeID={currentRecipe._id} />
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>

      <div className="recirc-list-container">
        <h4 className="reciric-list-title">Mer från Receptkungen</h4>
        <div className="reciric-list-all-recipes-button-div">
          <div
            onClick={() => navigate("/Recept")}
            className="reciric-list-all-recipes-button"
          >
            <span className="noselect">Alla recept</span>
          </div>
        </div>
        <div className="reciric-list">
          <ul className="reciric-list-ul">
            {randomRecipeList.map((item, index) => (
              <li key={index} className="reciric-list-item">
                <div
                  onClick={() => linkToRecipe(item._id, item.title)}
                  className="receric-list-title-a"
                >
                  <span className="receric-list-item-image">
                    <img
                      className="receric-list-img"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </span>
                  <div className="receric-list-overlay">
                    <div className="receric-list-overlay-grid">
                      <h4 className="receric-list-overlay-title">
                        {item.title}
                      </h4>
                      <p className="receric-list-overlay-categories">
                        {item.categories.join(" | ")}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
