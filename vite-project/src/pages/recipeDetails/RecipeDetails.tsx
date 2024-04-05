//Joel
import DeleteButton from '../../globalComponents/DeleteButton';
import './RecipeDetails.css'
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../../globalComponents/NavBar';
import AddToCartButton from '../../globalComponents/Cart/AddToCartButton';
import { useAPIState } from '../../store/APIState';
import { useEffect } from 'react';
import EmptyCartButton from '../../globalComponents/Cart/EmptyCartButton';
import axios from 'axios';
import getAlcoholicCocktails from '../../api/getAlcoholicCocktails';
import { useCocktailCartStateInterface } from '../../store/CocktailCart';


const URL3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";


const RecipeDetails = () => {

  const seeCocktailDetails = async (idDrink: string) => {

    const response = await axios.get(`${URL3 + idDrink}`);

    if (response.status === 200) {

      const cocktail = response.data.drinks;
      const selectedCocktail = cocktail[0];
      const encodedCocktail = encodeURIComponent(selectedCocktail.strDrink);

      navigate(`/Cocktails/${encodedCocktail}`, {
        state: { cocktail: selectedCocktail },
      });

      console.log("cocktails", cocktail);
      console.log("selectedCocktail.strDrink", selectedCocktail.strDrink);

    };

  };

  const { AddToCocktailCart } = useCocktailCartStateInterface();


  const recommendedCocktails = getAlcoholicCocktails();


  const { fetchRecipe } = useAPIState();
  const { state: recipe } = useLocation()
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch recipe details when component mounts
    fetchRecipe(recipe._id);
  }, [fetchRecipe, recipe._id]);

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
              <AddToCartButton recipe={recipe} />
              <EmptyCartButton />
            </div>
          </div>
        </div>

        <div className='recommended-cocktail'>{recipe.categories[0] === "Dessert" &&
          <div>{recommendedCocktails.map((recCock) => (

            <div>{recCock.strDrink === "A Piece of Ass" &&

              <div>

                <h6>Rekommenderad Cocktail: </h6>
                <p>{recCock.strDrink}</p>

                <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>

              </div>}

            </div>))}
            <p>{recommendedCocktails.map((recCock) =>
              <div>

                <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

              </div>
            )}</p>

          </div>}
        </div>

        <div className='recommended-cocktail'>{recipe.categories[0] === "Fisk" &&
          <div>{recommendedCocktails.map((recCock) => (

            <div>{recCock.strDrink === "A Piece of Ass" &&

              <div>

                <h6>Rekommenderad Cocktail: </h6>
                <p>{recCock.strDrink}</p>

                <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>

              </div>}

            </div>))}

            <p>Andra, mindre passande, cocktail:</p>
            <p>{recommendedCocktails.map((recCock) =>
              <div>

                <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

              </div>
            )}</p>

          </div>}
        </div>

        <div className='recommended-cocktail'>{recipe.categories[0] === "Sprängmedel" &&
          <div>{recommendedCocktails.map((recCock) => (

            <div>{recCock.strDrink === "Absolut Sex" &&

              <div>

                <h6>Rekommenderad Cocktail: </h6>
                <p>{recCock.strDrink}</p>

                <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>

              </div>}

            </div>))}

            <p>Andra, mindre passande, cocktail:</p>
            <p>{recommendedCocktails.map((recCock) =>
              <div>

                <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

              </div>
            )}</p>

          </div>}
        </div>


        <div className='recommended-cocktail'>{recipe.categories[0] === "snabbmat" &&
          <div>{recommendedCocktails.map((recCock) => (

            <div>{recCock.strDrink === "Quick F**K" &&

              <div>

                <h6>Rekommenderad Cocktail: </h6>
                <p>{recCock.strDrink}</p>

                <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>

              </div>}

              {/* <p>{alcotail.strDrink === "110 in the shade" && <p>{alcotail.strDrink}</p>}</p> */}



            </div>))}
            <p>Andra, mindre passande, cocktail:</p>
            <p>{recommendedCocktails.map((recCock) =>
              <div>

                <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

              </div>
            )}</p>

            {/* <p onClick={() => seeCocktailDetails(alcoholic[0].idDrink)}>{alcoholic[0].strDrink}</p>
          <p>{alcoholic[2].strDrink}</p>
          <p>{alcoholic[6].strDrink}</p> */}


          </div>}


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
        <DeleteButton recipeId={recipe._id} />
        <button onClick={() => navigate(-1)}>Tillbaka</button>
      </div>
    </div>
  );
};

export default RecipeDetails;