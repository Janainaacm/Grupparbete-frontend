import { useNavigate } from "react-router";
import { useAPIState } from "../store/APIState";
import { useEffect, useState } from "react";
import { RecipeInterface } from "../Types";
import DeleteButton from "./DeleteButton";
import EditRecipeButton from "./EditRecipeButton";
import RatingStars from "../pages/recipeDetails/RatingStars";
import FilterFunction from "./filterFunction/FilterFunction";
import "../pages/recipes/DisplayRecipes.css";
import { LiaCartPlusSolid } from "react-icons/lia";

interface DisplayRecipesProps {
  showDeleteButton?: boolean;
  showEditButton?: boolean;
}

const DisplayRecipes = ({ showDeleteButton = false, showEditButton = false,
}: DisplayRecipesProps) => {
  const {
    recipeList,
    filteredRecipeList,
    setRecipeIDState,
    fetchRecipeList,
    clearReviewState,
    fetchCategories,
  } = useAPIState();
  const [showRecipes, setShowRecipes] = useState<RecipeInterface[]>([]);
  const [headlinetag, setHeadlineTag] = useState("Alla recept");
  const navigate = useNavigate();

  useEffect(() => {
    if (recipeList.length == 0) {
      fetchRecipeList();
    }
    if (recipeList.length == 0) {
      fetchCategories();
    }
  }, []);

  useEffect(() => {
    console.log(showRecipes, "b4 anything");
    if (filteredRecipeList.length > 0) {
      setShowRecipes(filteredRecipeList);
    } else {
      setShowRecipes(recipeList);
    }
  }, [recipeList]);

  const handleClick = (recipeId: string, recipeName: string) => {
    setRecipeIDState(recipeId)
    navigate(`/Recept/${recipeName}`);
  };

  return (
    <div className="container">
      <div className="page-headline">
        <h1 className="page-title">Recept</h1>
        <p className="page-description">{headlinetag}</p>
      </div>
      <div className="page-filter-function">
        <FilterFunction
          setShowRecipes={setShowRecipes}
          setHeadlineTag={setHeadlineTag}
        />
      </div>
      <div className="recipe-list">
        {showRecipes.map((recipe) => (
          <div className="recipe-box" key={recipe._id}>
            <img
              className="recipe-card-img"
              src={recipe.imageUrl}
              alt={recipe.title}
            />
            <div className="recipe-info-container">
              <p className="recipe-categories">
                {recipe.categories.join(" | ").toUpperCase()}
              </p>
              <h4
                className="recipe-title"
                onClick={() => handleClick(recipe._id, recipe.title)}
              >
                {recipe.title}
              </h4>
              <p className="recipe-description">{recipe.description}</p>
              {showEditButton && <EditRecipeButton recipeID={recipe._id} recipeName={recipe.title}/>}
              {showDeleteButton && <DeleteButton recipeId={recipe._id}/>}
              <button className="recipe-card-buy-btn">
                <LiaCartPlusSolid />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="page-quote">
        <p className="quote">
          "Let food be thy medicine and medicine be thy food." <br /> -
          Hippocrates
        </p>
      </div>
    </div>
  );
};
export default DisplayRecipes;
