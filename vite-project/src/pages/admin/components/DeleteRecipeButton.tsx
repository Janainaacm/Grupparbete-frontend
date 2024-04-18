import { useRecipeAPIState } from "../../../store/RecipeAPIState";
import { GiTrashCan } from "react-icons/gi";

const DeleteButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeAPIState();

  const handleClick = async () => {
    try {
      await deleteRecipe(recipeId);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <button className="delete-recipe-button" onClick={handleClick}>
      Delete recipe
      <GiTrashCan />
    </button>
  );
};

export default DeleteButton;
