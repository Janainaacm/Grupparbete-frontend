import "./SearchResult.css";
import { useNavigate } from 'react-router-dom';
import { useAPIState } from "../../store/APIState";
import { RecipeInterface } from "../../Types";

const SearchResult = ({ result }) => {
  const navigate = useNavigate();
  const { currentRecipe ,setRecipeIDState } = useAPIState();

  
//

  const search = (recipe: RecipeInterface) => {
    setRecipeIDState(recipe._id)
    console.log("Current recipe", currentRecipe)
    console.log("Recipe:", recipe)
    navigate(`/Recept/${recipe.title}`);
  }

  return (
    <div className="search-result" onClick={() => search(result)}>
      {result.title}
    </div>
  );
}

export default SearchResult;