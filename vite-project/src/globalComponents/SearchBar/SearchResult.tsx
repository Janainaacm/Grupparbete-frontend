import "./SearchResult.css";
import { useNavigate } from "react-router-dom";
import { useRecipeAPIState } from "../../store/RecipeAPIState";
import { RecipeInterface } from "../../Types";

const SearchResult = ({ result }) => {
  const navigate = useNavigate();
  const { setRecipeIDState } = useRecipeAPIState();

  const search = (recipe: RecipeInterface) => {
    setRecipeIDState(recipe._id);
    navigate(`/Recept/${recipe.title}`);
  };

  return (
    <div className="search-result" onClick={() => search(result)}>
      {result.title}
    </div>
  );
};

export default SearchResult;
