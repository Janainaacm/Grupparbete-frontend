import "./RecipeDetailsPage.css";
import { useLocation,Link, useNavigate } from "react-router-dom";
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
import { IoIosTimer } from "react-icons/io";
import Button from "react-bootstrap/esm/Button";
import Collapse from "react-bootstrap/esm/Collapse";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const RecipeDetails = () => {
  const [recommendation, setRecommendation] = useState(false);
  const { recipeID, currentRecipe, fetchRecipe, fetchReviews } = useAPIState();
  const { recommendedListByIngredient,fetchCocktails, fetchCocktailListByIngredient } = useCocktailAPIState();
  const navigate = useNavigate();
  const rating = (Math.round(currentRecipe.avgRating * 10) / 10).toFixed(1);
  const [open, setOpen] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(<FaAngleDown />);
  const [recericList, setRecericList] = useState<RecipeInterface[]>([]);

  const handleDropDownFocus = () => {
    setOpen(!open);
    setToggleDropDown(open ? <FaAngleDown /> : <FaAngleUp />);
  };

  useEffect(() => {
    const savedRecipeID = localStorage.getItem("recipeID");
    if (savedRecipeID) {
      console.log("fetching local storage");
      fetchRecipe(savedRecipeID);
      fetchReviews(savedRecipeID);
    } else {
      fetchRecipe(recipeID);
      fetchReviews(recipeID);
    }
    fetchCocktails();
    getRecericList();
  }, []);

  //LOGIK
  const checkCurrentRecipeCategory = () => {
    switch (currentRecipe.categories[0]) {
      case "Kött":
        fetchCocktailListByIngredient("orange"); // finns
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
        fetchCocktailListByIngredient("milk"); //finns
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

const getRecericList = () => {
  const filteredRecipes = recipeList.filter((item) => item._id !== currentRecipe._id);
  const shuffledRecipes = shuffle(filteredRecipes).slice(0, 6);
  setRecericList(shuffledRecipes);
}


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
            <div className="reciric-list-all-recipes-button">
            <CocktailRecommendation recipe={currentRecipe} visibility={recommendation} onClose={() => setRecommendation(false)} />
              <span className="noselect">RECEPT</span>
            </div>
            <h1 className="title-header">{currentRecipe.title}</h1>
            <div className="categories-header-div">
              <p className="categories-header">
                {currentRecipe.categories.join(" | ")}
              </p>
              <p className="price-header">{currentRecipe.price} SEK</p>
            </div>
              <AddToCartButton recipe={currentRecipe} recommendation={() => setRecommendation(true)} checkCategory={() => checkCurrentRecipeCategory()} />
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
                    <p>
                      <div
                        className="stars"
                        style={{ "--rating": rating }}
                        aria-label={`Rating of this product is ${rating} out of 5.`}
                      />{" "}
                      rating: {rating}
                    </p>
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
                  {currentRecipe.ingredients.map((ingredient) => (
                    <>
                      <p
                        className="ingredient-amount"
                        style={{ textAlign: "left" }}
                      >
                        {ingredient.amount} {ingredient.unit}
                      </p>
                      <p className="ingredient-name">{ingredient.name}</p>
                    </>
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
        <div onClick={()=>navigate("/Recept")} className="reciric-list-all-recipes-button">
          <span className="noselect" >Alla recept</span>
        </div>
        </div>
        <div className="reciric-list">
          <ul className="reciric-list-ul">
            {recericList.map((item, index) => (
                <li className="reciric-list-item">
                  <a href={"/Recept/" + item.title} className="receric-list-title-a">
                  <span className="receric-list-item-image">
                    <img className="receric-list-img" src={item.imageUrl} alt={item.title} />
                  </span>
                  <div className="receric-list-overlay">
                    <div className="receric-list-overlay-grid">
                    <h4 className="receric-list-overlay-title">{item.title}</h4>
                    <p className="receric-list-overlay-categories">{currentRecipe.categories.join(" | ")}</p>
                    </div>
                  </div>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
