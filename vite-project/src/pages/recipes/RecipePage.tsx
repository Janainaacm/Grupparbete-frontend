import React from 'react';
import NavBar from '../../global_components/NavBar/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { RecipeInterface } from '../../Types';
import RecipeDetails from './RecipeDetails';
import useGetAllRecipes from '../../api/getAllRecipes';
import DisplayRecipes from '../../global_components/DisplayRecipes';

import FilterComponent from './FilterComponent';

const RecipePage = () => {
  const location = useLocation();
 
  // Extract recipes from location state
  let showRecipes = location.state as RecipeInterface[];
  if (!showRecipes){
    showRecipes = useGetAllRecipes();
  }

  // Function to render all recipes
  const showAll = () => {
    return (
      <div>
      <DisplayRecipes recipes={showRecipes}/>
      </div>
      
    );
  };

  return (
    <>
      <NavBar />
      <div>
        <FilterComponent></FilterComponent>
        <br /><br /><br /><br />
        {showAll()} {/* Call the showAll function to render the list */}
      </div>
    </>
  );
};

export default RecipePage;
