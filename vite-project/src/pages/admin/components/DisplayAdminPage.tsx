import { useNavigate } from "react-router";
import { useAPIState } from "../../../store/APIState";
import { useEffect, useState } from "react";
import { RecipeInterface } from "../../../Types";
import DeleteButton from "./DeleteRecipeButton";
import "../../recipes/components/DisplayRecipes.css"
import { Button } from "react-bootstrap";
import FilterFunction from "../../recipes/components/FilterFunction"
import { CiEdit } from "react-icons/ci";
import ClearButton from "../components/ClearButton.tsx";
import "./DisplayAdminPage.css"

interface DisplayRecipesProps {
  deleteButton?: boolean;
  editButton?: boolean;
}

const DisplayRecipes = (props: DisplayRecipesProps) => {
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
    fetchCategories();
  }, []);

  useEffect(() => {
    console.log(filteredRecipeList, "b4 anything lol");
    if (filteredRecipeList.length > 0) {
      setShowRecipes(filteredRecipeList);
    } else {
      setShowRecipes(recipeList);
    }
  }, [recipeList]);

  
  const handleEditClick = (recipeId: string, recipeName: string) => {
    setRecipeIDState(recipeId)
    navigate(`/EditRecipe/${recipeName}`);
  };

  const handleClickAddRecipe = () => {
    navigate('/AddRecept')
}


  return (
    <div className="container">
      <div className="page-headline">
        <h1 className="page-title">Admin</h1>
        <button className="add-recipe-button" onClick={() => handleClickAddRecipe()}>Add recipe</button>
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
              >
                {recipe.title}
              </h4>
              <p className="recipe-description">{recipe.description}</p>
              <button className="edit-button" onClick={() => handleEditClick(recipe._id, recipe.title)}>Edit recipe<CiEdit /></button>
              <DeleteButton recipeId={recipe._id}/>
            </div>
          </div>
        ))}
      </div>
      <div className="delete-database-div">
        <ClearButton/>
      </div>
    </div>
  );
};
export default DisplayRecipes;
