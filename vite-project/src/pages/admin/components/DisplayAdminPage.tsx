import "../../recipes/components/DisplayRecipes.css";
import "./DisplayAdminPage.css";
import { useNavigate } from "react-router";
import { useRecipeAPIState } from "../../../store/RecipeAPIState.ts";
import { useEffect, useState } from "react";
import { RecipeInterface } from "../../../Types";
import { CiEdit } from "react-icons/ci";
import DeleteButton from "./DeleteRecipeButton";
import FilterFunction from "../../recipes/components/FilterFunction";
import ClearButton from "../components/ClearButton.tsx";

const DisplayAdminRecipes = () => {
  const {
    recipeList,
    filteredRecipeList,
    setRecipeIDState,
    fetchRecipeList,
    fetchCategories,
  } = useRecipeAPIState();
  const [showRecipes, setShowRecipes] = useState<RecipeInterface[]>([]);
  const [headlinetag, setHeadlineTag] = useState("Alla recept");
  const navigate = useNavigate();

  useEffect(() => {
    if (recipeList.length == 0) {
      fetchRecipeList();
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    if (filteredRecipeList.length > 0) {
      setShowRecipes(filteredRecipeList);
    } else {
      setShowRecipes(recipeList);
    }
  }, [recipeList]);

  const handleEditClick = (recipeId: string, recipeName: string) => {
    setRecipeIDState(recipeId);
    navigate(`/EditRecipe/${recipeName}`);
  };
  const handleClick = (recipeId: string, recipeName: string) => {
    setRecipeIDState(recipeId);
    navigate(`/Recept/${recipeName}`);
  };

  const handleClickAddRecipe = () => {
    navigate("/AddRecept");
  };

  return (
    <div className="container">
      <div className="page-headline">
        <h1 className="page-title">Admin</h1>
        <button
          className="add-recipe-button"
          onClick={() => handleClickAddRecipe()}
        >
          Add recipe
        </button>
      </div>
      <div className="page-filter-function">    
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
              <button
                className="edit-button"
                onClick={() => handleEditClick(recipe._id, recipe.title)}
              >
                Edit recipe
                <CiEdit />
              </button>
              <DeleteButton recipeId={recipe._id} />
            </div>
          </div>
        ))}
      </div>
      <div className="delete-database-div">
        <ClearButton />
      </div>
    </div>
  );
};
export default DisplayAdminRecipes;
