import { useEffect } from "react";
import NavBar from "../../globalComponents/NavBar";
import DisplayRecipes from "../../globalComponents/DisplayRecipes";
import { useAPIState } from "../../store/APIState";
import { useLocation } from "react-router-dom";
import { RecipeInterface } from "../../Types";
import FilterComponent from "../../globalComponents/FilterComponent";
import Card from "./Card";
import "./RecipePage.css";

const RecipePage = (): JSX.Element => {
  const location = useLocation();
  const { recipeList, fetchRecipeList } = useAPIState();

  useEffect(() => {
    fetchRecipeList();
  }, []);

  let showRecipes = location.state as RecipeInterface[];
  if (!showRecipes) {
    showRecipes = recipeList;
  }

  console.log(recipeList, "tydligen alla recept");
  console.log(showRecipes, "det vi skickar");

  return (
    <div>
      <NavBar />
      <main>
        {showRecipes.map((item) => {
          return <Card item={item} key={item._id} />;
        })}
      </main>
  
      {/* <FilterComponent></FilterComponent> */}
  
      <DisplayRecipes recipeList={recipeList} showDeleteButton={false} />
  
      <Footer/>
    </div>
  );

export default RecipePage;
