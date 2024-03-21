import { RecipeInterface } from "../Types";
import useGetAllRecipes from "../api/getAllRecipes";
import getRecipeById from "../api/getRecipeById";
import { useNavigate} from "react-router";
import useRecipeState from "../state";
import { useEffect } from "react";

const useRecipes = () => {
  const {recipes, fetchRecipes} = useRecipeState()
  //const recipes = useRecipeState((state) => state.recipes)
  //const fetch = useRecipeState((state) => state.fetchRecipes)
  const navigate = useNavigate();
  
  useEffect(() => {
    fetchRecipes()
  },[])
  
  // const handleClick = async (recipeId: string) => {
  //   try {
  //     const recipes: RecipeInterface[] = await getRecipeById(recipeId);
  //     const selectedRecipe = recipes[0]; // Extract the first recipe
  //     const encodedTitle = encodeURIComponent(selectedRecipe.title);
  //     navigate(`/Recept/${encodedTitle}`, {
  //       state: { recipe: selectedRecipe },
  //     });
  //   } catch (error) {
  //     console.error("Error fetching recipe:", error);
  //   }
  // };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
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
