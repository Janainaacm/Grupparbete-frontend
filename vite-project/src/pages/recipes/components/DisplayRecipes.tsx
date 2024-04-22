import "../components/DisplayRecipes.css";
import { useNavigate } from "react-router";
import { useRecipeAPIState } from "../../../store/RecipeAPIState";
import { useEffect, useState } from "react";
import { RecipeInterface } from "../../../Types";
import { LiaCartPlusSolid } from "react-icons/lia";
import { useRecipeCartState } from "../../../store/RecipeCartState";
import FilterFunction from "./FilterFunction";


interface DisplayRecipesProps {
  tag: string;
}
const DisplayRecipes = (props: DisplayRecipesProps) => {
  
  const {
    recipeList,
    filteredRecipeList,
    setRecipeIDState,
    fetchRecipeList,
    fetchCategories,
  } = useRecipeAPIState();
  const { addToCart: AddToCart } = useRecipeCartState();
  const [showRecipesSearch, setShowRecipesSearch] = useState(filteredRecipeList);
  const [showRecipes, setShowRecipes] = useState<RecipeInterface[]>([]);
  const [headlinetag, setHeadlineTag] = useState("Alla recept");
  const navigate = useNavigate();

  useEffect(() => {
    if (recipeList.length == 0) {
      fetchRecipeList();
    }
    fetchCategories();
  }, []);

  const handleClick = (recipeId: string, recipeName: string) => {
    setRecipeIDState(recipeId);
    navigate(`/Recept/${recipeName}`);
  };

  const handleClickAddToCart = (recipe: RecipeInterface) => {
    AddToCart(recipe);
  };

  const chooseList = () => {

    if (recipeList.length == 0) {
      fetchRecipeList();
    }
    
    if (showRecipesSearch.length > 0) {
      return showRecipesSearch;
    } else {
      return recipeList;
    }
  }



  return (
    <div className="container">
      <div className="page-headline">
        <h1 className="page-title">Recept</h1>
        <p className="page-description">{headlinetag}</p>
      </div>
      <div className="page-filter-function">
        <FilterFunction
          searchResult={chooseList()}
          setShowRecipes={setShowRecipesSearch}
          setHeadlineTag={setHeadlineTag}
        />
      </div>
      <div className="recipe-list">
        {chooseList().map((recipe) => (
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

              <button className="recipe-card-buy-btn">
                <LiaCartPlusSolid
                  onClick={() => handleClickAddToCart(recipe)}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="page-quote">
        <p className="quote">
          "Let food be thy medicine and medicine be thy food." <br /> -
          Hippocrates
        </p>
      </div>
    </div>
  );
};
export default DisplayRecipes;
