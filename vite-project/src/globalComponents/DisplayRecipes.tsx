import { useNavigate} from "react-router";
import { useAPIState } from "../store/APIState";
import { useEffect, useState } from "react";
import { RecipeInterface } from "../Types";
import DeleteButton from "./DeleteButton";
import EditRecipeButton from "./EditRecipeButton";
import RatingStars from "../pages/recipeDetails/RatingStars";
import FilterFunction from "./filterFunction/FilterFunction";
import "../pages/recipes/DisplayRecipes.css"
import { LiaCartPlusSolid } from "react-icons/lia";


interface DisplayRecipesProps {
  recipeListFromRecipePage: RecipeInterface[];
  showDeleteButton?: boolean; 
  showEditButton?: boolean;
}

const DisplayRecipes = ({recipeListFromRecipePage, showDeleteButton=false, showEditButton=false}: DisplayRecipesProps) => {
  const { fetchRecipe, fetchRecipeList, clearReviewState, recipeList } = useAPIState();
  const [showRecipes, setShowRecipes] = useState<RecipeInterface[]>([]);
  const [headlinetag, setHeadlineTag] = useState("Alla recept");
  const navigate = useNavigate();

  useEffect(() => {
    const getRecipes = async () => {
      console.log(showRecipes, "b4 anything")
        if (recipeListFromRecipePage.length > 0) {
            setShowRecipes(recipeListFromRecipePage);

        } else {
            setShowRecipes(recipeList);
        }
    };
    getRecipes();
}, [recipeList]);

  const handleClick = async (recipeId: string) => {
    try {
      const selectedRecipe = await fetchRecipe(recipeId);
      const encodedTitle = encodeURIComponent(selectedRecipe.title);
      navigate(`/Recept/${encodedTitle}`, {
        state: selectedRecipe,
      });
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };
    
  return (
    <div className="container">
      <div className="page-headline">
        <h1 className="page-title">Recept</h1>
        <p className="page-description">{headlinetag}</p>
      </div>
      <div className="page-filter-function">
        
      <FilterFunction setShowRecipes={setShowRecipes} setHeadlineTag={setHeadlineTag} /> 
      </div>
      <div className="recipe-list">
      {showRecipes.map((recipe) => (
        <div className="recipe-box" key={recipe._id}>
          <img className="recipe-card-img" src={recipe.imageUrl} alt={recipe.title} />
            <div className="recipe-info-container">
              <p className="recipe-categories">{recipe.categories.join(' | ').toUpperCase()}</p>
              <h4 className="recipe-title" onClick={() => (handleClick(recipe._id ?? ''))}>{recipe.title}</h4>
              <p className="recipe-description">{recipe.description}</p>
              {showEditButton && <EditRecipeButton recipeId={recipe._id} />}
          <div className="deletebtn">   </div>
          {showDeleteButton && <DeleteButton recipeId={recipe._id}/>}
              <button className="recipe-card-buy-btn"><LiaCartPlusSolid /></button>
            </div>
        </div>
      ))}
      </div>

      <div className="page-quote">
        <p className="quote">"Let food be thy medicine and medicine be thy food." <br/> - Hippocrates</p>
        </div>
    </div>
  );
};
export default DisplayRecipes;