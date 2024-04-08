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

const RecipePage = () => {
  const location = useLocation();
  const { recipeList, fetchRecipeList, fetchCategories } = useAPIState();
  const [showRecipes, setShowRecipes] = useState<RecipeInterface[]>([]);

  useEffect(() => {
    fetchRecipeList();
    fetchCategories();
  }, []);

  if (showRecipes.length == 0) {
    setShowRecipes(location.state as RecipeInterface[]);
    
    if (showRecipes.length == 0) {
      setShowRecipes(recipeList);
    }

  }

  const resetFilter = () => {
    setShowRecipes(recipeList)
    console.log('filter återställt')
  }

  console.log(recipeList, "tydligen alla recept");
  console.log(showRecipes, "det vi skickar");

  return (
    <div>
      <NavBar />
      <FilterFunction setShowRecipes={setShowRecipes}/>
      <div>
        <button onClick={() => (resetFilter())}>Återställ filter</button>
      </div>

      <main>
        {showRecipes.map((item) => {
          return <Card item={item} key={item._id} />;
        })}
      </main>
  
      {/* <FilterComponent></FilterComponent> */}
  
      <DisplayRecipes recipeList={showRecipes} showDeleteButton={false} />
      
  
      <Footer/>
    </div>
  );
      }
export default RecipePage;
