import { API_URL } from '../config'
import { RecipeInterface, IngredientInterface } from '../Types';
import { useState } from 'react';
import axios from 'axios';



const PostRecipe = () => {

    const [recipes, setRecipes] = useState<RecipeInterface[]>([]);
    const [recipeName, setRecipeName] = useState("");
    const [recipeDescription, setDescription] = useState("");
    const [timeInMins, setTimeInMinutes] = useState(Number);
    const [imageURL, setImageURL] = useState("");
    const [rating, setRating] = useState("");


    const [ingredient, setIngredient] = useState<IngredientInterface[]>([]);
    const [ingredientName, setIngredientName] = useState("");
    const [ingredientAmount, setIngredientAmount] = useState(Number);
    const [ingredientUnit, setIngredientUnit] = useState("");

    const addIngredient = () => {

        const newIngredient = {

            name: ingredientName,
            amount: ingredientAmount,
            unit: ingredientUnit

        };

        setIngredient([...ingredient, newIngredient]);
        setIngredientName("");
        setIngredientAmount(0);
        setIngredientUnit("");

    };


    const addRecipe = async () => {

        const newRecipe = {
            title: recipeName,
            description: recipeDescription,
            ratings: [rating],
            imageUrl: imageURL,
            timeInMins: timeInMins,
            ingredients: ingredient
        };

        const response = await axios.post(`${API_URL}/recipes`, newRecipe);

        if (response.status === 200) {
            setRecipes([...recipes, response.data]);
            alert("Recept tillagt!");

            setRecipeName("");
            setIngredientName("");
            setIngredientAmount(0);
            setIngredient([]);
            setDescription("");
            setTimeInMinutes(0);
            setImageURL("");
            setRating("");
        } else {
            alert("Error")
        };
        
    };



  return (
    <div> 

        <input type='text' value={recipeName} onChange={(event) => setRecipeName(event.target.value)} placeholder='Namnet på receptet'></input>
        <input type="text" value={recipeDescription} onChange={(event) => setDescription(event.target.value)} placeholder='Description' />
        <input type="number" value={timeInMins} onChange={(event) => setTimeInMinutes(event.target.valueAsNumber)} placeholder='Tid i minuter'/>
        <br />
        <input type="text" value={imageURL} onChange={(event) => setImageURL(event.target.value)} placeholder='Länk till bild'/>

        
        <input type='number' onChange={(event) => setRating(event.target.value)} min={1} max={5} placeholder='Rating'/>

        <br /><br />

        <div id='ingredientFields'>
            <input type='text' value={ingredientName} onChange={(event) => setIngredientName(event.target.value)} placeholder='Ingredient'/>
            <input type="number" value={ingredientAmount} onChange={(event) => setIngredientAmount(event.target.valueAsNumber)} placeholder='Amount'/>
            <input type="text" value={ingredientUnit} onChange={(event) => setIngredientUnit(event.target.value)} placeholder='Unit' />
        </div>

        {/* <button onClick={addIngredientFields}>Lägg till ingredientfält</button> */}

        <button onClick={addIngredient}>Lägg till ingredient</button>
        <br /><br />
        <button onClick={addRecipe}>Lägg till recept</button>
        
      </div>
  );
};

export default PostRecipe
