//Joel
import { useNavigate} from "react-router";
import { useAPIState } from "../store/APIState";
import { useEffect } from "react";
import { RecipeInterface } from "../Types";
import DeleteButton from "./DeleteButton";
import EditRecipeButton from "./EditRecipeButton";

interface DisplayRecipesProps {
  recipeList: RecipeInterface[];
  showDeleteButton?: boolean; 
  showEditButton?: boolean;
}


  
const DisplayRecipes = ({recipeList,showDeleteButton=false,showEditButton=false}: DisplayRecipesProps) => {
  const { fetchRecipe, clearReviewState } = useAPIState();
  const navigate = useNavigate();
  // console.log(recipeList, "det som tas emot")

  useEffect(() => {
    clearReviewState()
  },[])

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
    <div className="recipe-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {recipeList.map((recipe) => (
        <div className="recipe-card"
          key={recipe._id}
          style={{
            width: '200px',
            marginBottom: '20px',
            marginRight: '20px',
            textAlign: 'center',
          }}
        >
          <button
            onClick={() => handleClick(recipe._id)}
            style={{
              border: 'none',
              background: 'none',
              padding: '0',
              cursor: 'pointer',
            }}
          >
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              style={{ width: '100px', height: '100px', marginBottom: '5px' }}
            />
          </button>
          <div className="recipe-title">{recipe.title}</div>
          <div className="recipe-categories" style={{ fontSize: '12px' }}>{recipe.categories}</div>
          {showEditButton && <EditRecipeButton recipeId={recipe._id}/>}
          {showDeleteButton && <DeleteButton recipeId={recipe._id}/>}
        </div>
      ))}
    </div>
  );
};
export default DisplayRecipes;