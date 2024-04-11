import { useNavigate} from "react-router";
import { useAPIState } from "../store/APIState";
import { useEffect, useState } from "react";
import { RecipeInterface } from "../Types";
import DeleteButton from "./DeleteButton";
import EditRecipeButton from "./EditRecipeButton";
import RatingStars from "../pages/recipeDetails/RatingStars";
import FilterFunction from "./filterFunction/FilterFunction";
import "../pages/recipes/DisplayRecipes.css"

interface DisplayRecipesProps {
  recipeListFromRecipePage?: RecipeInterface[];
  showDeleteButton?: boolean; 
  showEditButton?: boolean;
}

const DisplayRecipes = ({recipeListFromRecipePage, showDeleteButton=false, showEditButton=false}: DisplayRecipesProps) => {
  const { fetchRecipe, fetchRecipeList, clearReviewState, recipeList } = useAPIState();
  const [showRecipes, setShowRecipes] = useState<RecipeInterface[]>([]);
  const [headlinetag, setHeadlineTag] = useState("Alla recept");
  const navigate = useNavigate();


  // useEffect(() => {
  //   const getRecipesToDisplay = async () => {
  //     try {
  //       console.log(showRecipes, "det som tas emot");
  //         if (recipeListFromRecipePage) {
  //           setShowRecipes(recipeListFromRecipePage);
  //         } else {
  //           try {
  //       await fetchRecipeList();
  //       // Once recipeList is fetched, update showRecipes
  //       setShowRecipes(recipeList);
  //     } catch (error) {
  //       console.error('Error fetching recipe list:', error);
  //     }
  //         }
  //       clearReviewState(); 
  //     } catch (error) {
  //       console.error("Error fetching recipes:", error);
  //     }
  //   };
  
  //   getRecipesToDisplay(); 
  // }, []);
  

  const handleClick = async (recipeId: string) => {
    try {
      const selectedRecipe = await fetchRecipe(recipeId);
      const encodedTitle = encodeURIComponent(selectedRecipe.title);
      navigate(`/Recept/${encodedTitle}`, {
        state: selectedRecipe,
      });
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };
  console.log(headlinetag)

  /*
   // <div className="recipe-list">
    //   {recipeList.map((recipe) => (
    //     <div className="recipe-card"
    //       key={recipe._id}
    //       style={{
    //         width: '200px',
    //         marginBottom: '20px',
    //         marginRight: '20px',
    //         textAlign: 'center',
    //       }}
    //     >
    //       <button
    //         onClick={() => handleClick(recipe._id)}
    //         style={{
    //           border: 'none',
    //           background: 'none',
    //           padding: '0',
    //           cursor: 'pointer',
    //         }}
    //       >
    //         <img
    //           src={recipe.imageUrl}
    //           alt={recipe.title}
    //           style={{ width: '100px', height: '100px', marginBottom: '5px' }}
    //         />
    //       </button>
    //       <div className="recipe-title">{recipe.title}</div>
    //       <div className="recipe-categories" style={{ fontSize: '12px' }}>{recipe.categories}</div>
    //       {showEditButton && <EditRecipeButton recipeId={recipe._id}/>}
    //       {showDeleteButton && <DeleteButton recipeId={recipe._id}/>}
    //     </div>
    //   ))}
    // </div>
  */

  return (
    <div className="container">
      <div className="page-headline">
        <h1 className="page-title">Recept</h1>
        <p className="page-description">{headlinetag}</p>
      </div>
      <div className="page-filter-function">
        
      <FilterFunction setShowRecipes={setShowRecipes} setHeadlineTag={setHeadlineTag} /> 
      </div>
      <div className="recipe-list">
      {recipeList.map((recipe) => (
        <div className="recipe-card" key={recipe._id}>
          <img className="recipe-card-img" src={recipe.imageUrl} alt={recipe.title} />
            <div className="recipe-info-container">
              {/* <p className="recipe-stars"><RatingStars></RatingStars></p> */}
              <h4 className="recipe-title" onClick={() => (handleClick(recipe._id))}>{recipe.title}</h4>
              <p className="recipe-description">{recipe.description}</p>
              <p className="recipe-categories">{recipe.categories.join(' | ')}</p>
              <button className="recipe-card-buy-btn"></button>
            </div>
        </div>
      ))}
      </div>
    </div>
  );
};
export default DisplayRecipes;