//import deleteRecipe from '../api/deleteRecipe'; // Importing the deleteRecipe function
import { useNavigate } from 'react-router-dom';
import { useAPIState } from '../store/APIState';



const DeleteButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const {deleteRecipe} = useAPIState();
  
  const handleClick = async () => {
    try {
      await deleteRecipe(recipeId);
      console.log("Recipe deleted");
      navigate('/');
      
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <button onClick={handleClick}>Delete Recipe</button>
  );
};

export default DeleteButton;