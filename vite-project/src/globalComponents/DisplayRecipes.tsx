//Joel
import { useNavigate} from "react-router";
import { useAPIState } from "../store/APIState";
import { useEffect } from "react";
import { RecipeInterface } from "../Types";

const DisplayRecipes = (recipeList: RecipeInterface[]): JSX.Element => {
  const { fetchRecipe, fetchRecipeList } = useAPIState();
  const navigate = useNavigate();
  console.log(recipeList, "det som tas emot")


  useEffect(() => {
    fetchRecipeList();
  }, []);

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
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {recipeList.map((recipe) => (
        <div
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
          <div>{recipe.title}</div>
          <div style={{ fontSize: '12px' }}>{recipe.categories}</div>
        </div>
      ))}
    </div>
  );
};
export default DisplayRecipes;