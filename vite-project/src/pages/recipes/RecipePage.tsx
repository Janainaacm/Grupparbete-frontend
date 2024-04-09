import { useEffect, useState } from "react";
import NavBar from "../../globalComponents/NavBar";
import DisplayRecipes from "../../globalComponents/DisplayRecipes";
import { useAPIState } from "../../store/APIState";
import { useLocation } from "react-router-dom";
import { RecipeInterface } from "../../Types";
import Footer from "../../globalComponents/Footer";
import FilterComponent from "../../globalComponents/FilterComponent";
import Card from "./Card";
import "./RecipePage.css";
import FilterFunction from "../../globalComponents/filterFunction/FilterFunction";
import SearchBarRecipePage from "../../globalComponents/searchBar/SearchBarRecipePage";

const RecipePage = () => {
  const location = useLocation();
  const { recipeList, fetchRecipeList, fetchCategories } = useAPIState();
  const [showRecipes, setShowRecipes] = useState<RecipeInterface[]>([]);

  useEffect(() => {
    fetchRecipeList();
    fetchCategories();
  }, []);


  if (showRecipes.length == 0) {
    if (location.state){
      setShowRecipes(location.state as RecipeInterface[]);
      
    } else {
      setShowRecipes(recipeList);
    }
  }

  return (
    <div>
      <NavBar />
      <SearchBarRecipePage setShowRecipes={setShowRecipes}/>
      <FilterFunction setShowRecipes={setShowRecipes}/>

      <main>
        {showRecipes.map((item) => {
          return <Card item={item}/>;
        })}
      </main>
  
      {/* <FilterComponent></FilterComponent> */}
  
     {/* <DisplayRecipes recipeList={showRecipes} showDeleteButton={false} /> */}
      
  
      <Footer/>
    </div>
  );
      }
export default RecipePage;
