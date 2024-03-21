import { API_URL } from '../config'
import { RecipeInterface, IngredientInterface } from '../Types';
import { useState } from 'react';
import axios from 'axios';
import {useRecipeState} from '../state';



const PostRecipe = () => {
    
    const {postRecipe} = useRecipeState()
    const [recipes, setRecipes] = useState<RecipeInterface[]>([]);
    const [recipeName, setRecipeName] = useState("");
    const [recipeDescription, setDescription] = useState("");
    const [timeInMins, setTimeInMinutes] = useState(Number);
    const [imageURL, setImageURL] = useState("");
    const [rating, setRating] = useState("");

    const [categories, setCategories] = useState("");
    const [instructions, setInstructions] = useState("");

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
        const categoryArray = categories.split(',').map((category) => category.trim());
        const instructionsArray = instructions.split(",").map((instructions) => instructions.trim());

        const newRecipe = {
            title: recipeName,
            description: recipeDescription,
            ratings: [rating],
            imageUrl: imageURL,
            timeInMins: timeInMins,
            categories: categoryArray,
            instructions: instructionsArray,
            ingredients: ingredient
        };

        const response = await postRecipe(newRecipe)
        // const response = await axios.post(`${API_URL}/recipes`, newRecipe);

        if (response === 200) {
            //setRecipes([...recipes, response.data]);
            alert("Recept tillagt!");

            setRecipeName("");
            setIngredientName("");
            setIngredientAmount(0);
            setIngredient([]);
            setDescription("");
            setTimeInMinutes(0);
            setImageURL("");
            setRating("");
            setCategories("");
            setInstructions("");
        } else {
            alert("Error")
        };
        
    };



  return (
    <div> 

        <br /><br />
        <input type='text' value={recipeName} onChange={(event) => setRecipeName(event.target.value)} placeholder='Recipe name'></input>
        <input type="text" value={recipeDescription} onChange={(event) => setDescription(event.target.value)} placeholder='Description' />
        <input type="number" value={timeInMins} onChange={(event) => setTimeInMinutes(event.target.valueAsNumber)} placeholder='Time in minutes'/>
        <br />
        <input type="text" value={imageURL} onChange={(event) => setImageURL(event.target.value)} placeholder='Add picture'/>

        
        <input type='number' onChange={(event) => setRating(event.target.value)} min={1} max={5} placeholder='Rating'/>

        <br /><br />
        
        <textarea rows={4} cols={30} onChange={(event) => setInstructions(event.target.value)} placeholder='Instructions' ></textarea>
        <br />

        <input type="text" onChange={(event) => setCategories(event.target.value)} placeholder='Categories'/> 

        <br /><br />
        <div id='ingredientFields'>
            <input type='text' value={ingredientName} onChange={(event) => setIngredientName(event.target.value)} placeholder='Ingredient'/>
            <input type="number" value={ingredientAmount} onChange={(event) => setIngredientAmount(event.target.valueAsNumber)} placeholder='Amount'/>
            <input type="text" value={ingredientUnit} onChange={(event) => setIngredientUnit(event.target.value)} placeholder='Unit' />
        </div>


        <button onClick={addIngredient}>Add ingredient</button>
        <br /><br />
        <button onClick={addRecipe}>Add recipe</button>
        
      </div>
  );
};

export default PostRecipe
