import React from 'react';
import NavBar from '../../global_components/NavBar/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { RecipeInterface } from '../../Types';
import RecipeDetails from './RecipeDetails';
import useGetAllRecipes from '../../api/getAllRecipes';
import DisplayRecipes from '../../global_components/DisplayRecipes';

const RecipePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const allRecipes = useGetAllRecipes()
 

  // Extract recipes from location state
  let showRecipes = location.state as RecipeInterface[];
  if (!showRecipes){
    showRecipes = useGetAllRecipes();
  }

  // Function to render all recipes
  const showAll = () => {
    return (
      <div>
      <DisplayRecipes recipes={allRecipes}/>
      </div>
      
    );
  };

  return (
    <>
      <NavBar />
      <div>
        {showAll()} {/* Call the showAll function to render the list */}
      </div>
    </>
  );
};

export default RecipePage;
