import { useEffect, useState } from "react";
import NavBar from "../../globalComponents/NavBar";
import DisplayRecipes from "../../globalComponents/DisplayRecipes";
import { useAPIState } from "../../store/APIState";
import { useLocation } from "react-router-dom";
import { RecipeInterface } from "../../Types";
import Footer from "../../globalComponents/Footer";
import FilterComponent from "../../globalComponents/FilterComponent";
import "./RecipePage.css";
import FilterFunction from "../../globalComponents/filterFunction/FilterFunction";
import SearchBarRecipePage from "../../globalComponents/searchBar/SearchBarRecipePage";

const RecipePage = () => {
  const { fetchRecipeList, fetchCategories, recipeList } = useAPIState();

  useEffect(() => {
    if (recipeList.length === 0) {
      fetchRecipeList();
      fetchCategories();
      console.log("RecipeList is empty")
    }
  }, []);


  return (
    <div>
      <NavBar />
      <DisplayRecipes showDeleteButton={false} />
      <Footer />
    </div>
  );
}
export default RecipePage;