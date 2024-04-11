import { useEffect, useState } from "react";
import NavBar from "../../globalComponents/NavBar";
import DisplayRecipes from "../../globalComponents/DisplayRecipes";
import { useAPIState } from "../../store/APIState";
import { useLocation } from "react-router-dom";
import { RecipeInterface } from "../../Types";
import Footer from "../../globalComponents/Footer";
import Card from "./Card";
import "./RecipePage.css";
import FilterFunction from "../../globalComponents/filterFunction/FilterFunction";
import SearchBarRecipePage from "../../globalComponents/searchBar/SearchBarRecipePage";

const RecipePage = () => {
  const location = useLocation();
  const { recipeList, fetchRecipeList, fetchCategories } = useAPIState();
  const [showRecipes, setShowRecipes] = useState<RecipeInterface[]>([]);

  useEffect(() => {
    if (recipeList.length == 0){
     fetchRecipeList();
    }
    if (recipeList.length == 0) {
     fetchCategories();
    }
  }, []);

  // Ser till att setShowRecipes inte kallas på ett oändligt antal gånger om vi uppdaterar RecipePage, vilket orsakade krash med Too many re-renders.
  useEffect(() => { 

    if (showRecipes.length == 0) {
      if (location.state) {
        setShowRecipes(location.state as RecipeInterface[]);

      } else {
        setShowRecipes(recipeList);
      }
    }

  }, [showRecipes, location.state, recipeList])

  return (
    <div>
      <SearchBarRecipePage setShowRecipes={setShowRecipes} />
      <FilterFunction setShowRecipes={setShowRecipes} />

      <main>
        {showRecipes.map((item) => {
          return <Card item={item} key={item._id} />;
        })}
      </main>
      {/* <DisplayRecipes recipeList={showRecipes} showDeleteButton={false} /> */}
    </div>
  );
}
export default RecipePage;