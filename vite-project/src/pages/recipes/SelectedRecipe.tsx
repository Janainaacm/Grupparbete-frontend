import { useEffect, useState } from "react";
import { useNavigate, useLocation, } from "react-router";


function SelectedRecipe() {
    const { recipe } = useLocation().state;
    
    const navigate = useNavigate()

  useEffect(() => {
     console.log(recipe)
  }, []);

 
  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.imageUrl} alt={recipe.title} style={{ width: '200px', height: '200px', marginBottom: '5px' }} />
      <p>Description: {recipe.description}</p>
      <p>ID: {recipe._id}</p>
      <p>Time: {recipe.timeInMins} minutes</p>
      <p>Categories: {recipe.categories.join(', ')}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          </li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <button onClick={()=>navigate("/")}>Tillbaka</button>
    </div>
  );
}

export default SelectedRecipe;