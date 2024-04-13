import { useEffect, useState } from "react";
import DisplayRecipes from "../../globalComponents/DisplayRecipes";
import { useAPIState } from "../../store/APIState";
import { useLocation } from "react-router-dom";
import { RecipeInterface } from "../../Types";
import Footer from "../../globalComponents/Footer";
import "./RecipePage.css";
import BackToTopButton from "../../globalComponents/BackToTopButton";

const RecipePage = () => {
  const { fetchRecipeList, fetchCategories, recipeList } = useAPIState();
  const [recipes, setRecipes] = useState<RecipeInterface[]>([]);
  const location = useLocation();

  useEffect(() => {
    const list = location.state as RecipeInterface[]
    if (list){
      setRecipes(list)
    } 

    if (recipeList.length == 0){
     fetchRecipeList();
    }
    if (recipeList.length == 0) {
     fetchCategories();
    }

  }, []);


  return (
    <div>
      <DisplayRecipes recipeListFromRecipePage={recipes} showDeleteButton={false} />
      <BackToTopButton></BackToTopButton>
      
    </div>
  );
}
export default RecipePage;