import { RecipeInterface } from "../Types";
import useGetAllRecipes from "../api/getAllRecipes";
import getRecipeById from "../api/getRecipeById";
import { useNavigate} from "react-router";

const useRecipes = (recipes: RecipeInterface[]) => {

  
 
  

  const navigate = useNavigate();

  const handleClick = async (recipeId: string) => {
    try {
      const recipes: RecipeInterface[] = await getRecipeById(recipeId); //GET function, store in array
      const selectedRecipe = recipes[0]; // Extract the first recipe
      const encodedTitle = encodeURIComponent(selectedRecipe.title); // Encode the title of the selected recipe to use in URL
      navigate(`/Recept/${encodedTitle}`, {
        state: selectedRecipe, // Navigate to next page with state of recipe as the selected recipe and the title in URL
      });
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <p>DisplayRecipes</p>
      

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
          <div style={{fontSize: "12px"}}>{recipe.categories}</div>
        </div>
      ))}
    </div>
  );
};

const DisplayRecipes = ({ recipes }: { recipes: RecipeInterface[] }): JSX.Element => {
  return <div>{useRecipes(recipes)}</div>;
};

export default DisplayRecipes;