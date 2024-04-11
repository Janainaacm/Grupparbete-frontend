
import { useNavigate } from 'react-router'
import { useAPIState } from '../store/APIState';

const EditRecipeButton = ({recipeId}) => {
    const navigate = useNavigate();
    const { recipeList,fetchRecipe } = useAPIState();
  
    const handleClick = async () => {
        try {
          const selectedRecipe = await fetchRecipe(recipeId);
          const encodedTitle = encodeURIComponent(selectedRecipe.title);
          navigate(`/EditRecipe/${encodedTitle}`, {
            state: selectedRecipe,
          });
        } catch (error) {
          console.error('Error fetching recipe:', error);
        }
      };

  return (
    <button onClick={handleClick}style={{borderRadius:"5px"}}>Edit Recipe</button>
  )
}

export default EditRecipeButton