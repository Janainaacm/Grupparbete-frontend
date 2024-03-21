import React from 'react';
import NavBar from '../../global_components/NavBar/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { RecipeInterface } from '../../Types';
import RecipeDetails from './RecipeDetails';

const RecipePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract recipes from location state
  const showRecipes = location.state as RecipeInterface[];

  // Function to render all recipes
  const showAll = () => {
    return (
      <ul>
        {showRecipes.map((recipe, index) => (
          <li key={index}>{recipe.title}</li>
        ))}         
      </ul>
      
    );
  };

  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: 'orange' }}>
        {showAll()} {/* Call the showAll function to render the list */}
      </div>
    </>
  );
};

export default RecipePage;
