import { useNavigate } from 'react-router';
import './App.css'
import useGetAllRecipes from './api/getAllRecipes';
import { RecipeInterface } from './Types';

function AppTest() {

const recipes = useGetAllRecipes()
const navigate = useNavigate()


const handleRecipeClick = async(recipe: RecipeInterface) => {
    const encodedTitle = encodeURIComponent(recipe.title);
    navigate(`/recipes/${encodedTitle}`, { state: { recipe } });
    };

  return (
    <div>
    <h1>Recipes</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {recipes.map(recipe => (
            <div key={recipe.id} style={{ width: '200px', marginBottom: '20px', marginRight: '20px', textAlign: 'center' }}>
                <button onClick={() => handleRecipeClick(recipe)} style={{ border: 'none', background: 'none', padding: '0', cursor: 'pointer' }}>
                    <img src={recipe.imageUrl} alt={recipe.title} style={{ width: '100px', height: '100px', marginBottom: '5px' }} />
                </button>
                <div>
                    {recipe.title}
                </div>
            </div>
        ))}
    </div>
</div>
  );
}
  


export default AppTest