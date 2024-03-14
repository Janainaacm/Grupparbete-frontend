import React from "react";
import { RecipeInterface } from "../Types";
import PostRecipe from "../api/postRecipe";
import useGetAllRecipes from "../api/getAllRecipes";
import getRecipeById, { SelectedRecipeData } from "../api/getRecipeById";
import { useNavigate } from "react-router";

const useRecipes = () => {
  const postRecipe = PostRecipe();
  const recipes = useGetAllRecipes();
  const navigate = useNavigate();

  const handleClick = async (recipeId: string) => {
    try {
      const selectedRecipeById: SelectedRecipeData = await getRecipeById(
        recipeId
      );
      const selectedRecipe = selectedRecipeById[recipeId];
      const encodedTitle = encodeURIComponent(selectedRecipe.title);
      
      navigate(`/Recept/${encodedTitle}`, { state: { recipe: selectedRecipe } });
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {recipes.map((recipe) => (
        <div
          key={recipe._id}
          style={{
            width: "200px",
            marginBottom: "20px",
            marginRight: "20px",
            textAlign: "center",
          }}
        >
          <button
            onClick={() => handleClick(recipe._id)}
            style={{
              border: "none",
              background: "none",
              padding: "0",
              cursor: "pointer",
            }}
          >
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              style={{ width: "100px", height: "100px", marginBottom: "5px" }}
            />
          </button>
          <div>{recipe.title}</div>
        </div>
      ))}
    </div>
  );
};

const DisplayRecipes = () => {
  return <div>{useRecipes()}</div>;
};

export default DisplayRecipes;