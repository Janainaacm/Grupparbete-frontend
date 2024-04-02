import { useEffect } from 'react';
import NavBar from '../../globalComponents/NavBar';
import DisplayRecipes from '../../globalComponents/DisplayRecipes';
import { useAPIState } from '../../store/APIState';
import { useLocation } from 'react-router-dom';
import { RecipeInterface } from '../../Types';

const RecipePage = (): JSX.Element => {
 const location = useLocation();
  const { recipeList, fetchRecipeList } = useAPIState();

  useEffect(() => {
    fetchRecipeList();
  }, []);

  let showRecipes = location.state as RecipeInterface[];
 if (!showRecipes){
   showRecipes = recipeList;
 }

 console.log(recipeList, "tydligen alla recept")
 console.log(showRecipes, "det vi skickar")
  

  return (
    <>
      <NavBar />
      <div>

      {DisplayRecipes(showRecipes)}

      </div>
    </>
  );
};

export default RecipePage;
