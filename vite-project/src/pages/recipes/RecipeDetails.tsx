import DeleteButton from '../../global_components/DeleteButton';
import './RecipeDetails.css'
import { useLocation, useNavigate,  } from 'react-router-dom';
import { RecipeInterface } from '../../Types';
import NavBar from '../../global_components/NavBar/NavBar';

const RecipeDetails = () => {
  const recipe = useLocation().state as RecipeInterface
  const navigate = useNavigate();
  

  return (
    <div>
      <NavBar />
<div className="flex-container">
  <div className="recipe-card">
    <div className="recipe-section">
      <div className="recipe-image-container">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="recipe-image"
        />
      </div>
      <div className="recipe-details-container">
        <h1>{recipe.title}</h1>
        <p><strong>Description:</strong> <br />{recipe.description}</p>
        <p><strong>Time:</strong> {recipe.timeInMins} minutes</p>
        <p><strong>Categories:</strong> {recipe.categories.join(', ')}</p>
        <p><strong>Rating:</strong> {recipe.avgRating}</p>
        <button className="add-to-cart-button">Add to cart</button>
      </div>
    </div>
  </div>
  <div className="card-separator">
    <div className="instructions-container">
      <h3>Instructions:</h3>
      <ol style={{ paddingLeft: '1px', whiteSpace: 'pre-wrap' }}>
        {recipe.instructions && recipe.instructions.map((instruction, index) => (
          <ul key={index}>{instruction}</ul>
        ))}
      </ol>
    </div>
    <div className="ingredients-container">
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          </li>
        ))}
      </ul>
    </div>    
  </div>
  <DeleteButton recipeId={recipe._id}/>
  <button onClick={() => navigate(-1)}>Tillbaka</button>
</div>
</div>
  );
};

export default RecipeDetails;