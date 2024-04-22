import { IngredientInterface } from "../../../Types";
import { useState } from "react";
import { useRecipeAPIState } from "../../../store/RecipeAPIState";
import { useNavigate } from "react-router";
import { GiTrashCan } from "react-icons/gi";

const PostRecipe = () => {
  const { postRecipe, setRecipeIDState, recipeList } = useRecipeAPIState();
  const navigate = useNavigate();

  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setDescription] = useState("");
  const [timeInMins, setTimeInMinutes] = useState(Number);
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState(Number);

  const [categories, setCategories] = useState("");
  const [instructions, setInstructions] = useState("");

  const [ingredient, setIngredient] = useState<IngredientInterface[]>([
    { name: "", amount: 0, unit: "" },
  ]);



  const seeRecipeDetails = async (recipeId: string, recipeName: string) => {

    setRecipeIDState(recipeId);
    navigate(`/Recept`);

    function redirectRecipeDetails() {
      navigate(`/Recept/${recipeName}`);
    }

    setTimeout(redirectRecipeDetails, 1);
  };


  const addRecipe = async () => {
    const categoryArray = categories
      .split(",")
      .map((category) => category.trim());
    const instructionsArray = instructions
      .split(",")
      .map((instructions) => instructions.trim());

    const newRecipe = {
      title: recipeName,
      description: recipeDescription,
      imageUrl: imageURL,
      timeInMins: timeInMins,
      categories: categoryArray,
      instructions: instructionsArray,
      ingredients: ingredient,
      price: price,
    };

    const text = "Gå till nya recpeted?"

    if (confirm(text) == true) {
      postRecipe(newRecipe).then((data) => seeRecipeDetails(data._id, data.title));

      setRecipeName("");
      setIngredient([{ name: "", amount: 0, unit: "" }]);
      setDescription("");
      setTimeInMinutes(0);
      setImageURL("");
      setCategories("");
      setInstructions("");
      setPrice(0);

    } else {

      postRecipe(newRecipe)/* .then((data) => seeRecipeDetails(data._id, data.title)) */
      /* alert("Recept tillagt!"); */

      setRecipeName("");
      setIngredient([{ name: "", amount: 0, unit: "" }]);
      setDescription("");
      setTimeInMinutes(0);
      setImageURL("");
      setCategories("");
      setInstructions("");
      setPrice(0);

    }




    /* location.reload(); */

  };

  const handleIngredientAdd = () => {
    setIngredient([...ingredient, { name: "", amount: 0, unit: "" }]);
  };

  const handleIngredientRemove = (index: number) => {
    const list = [...ingredient];
    list.splice(index, 1);
    setIngredient(list);
  };

  const handleIngredientChange = (e: any, index: any) => {
    const { name, value } = e.target;
    const list: IngredientInterface[] = [...ingredient];
    list[index][name] = value;
    setIngredient(list);
  };

  return (
    <div className="add-recipe-container">
      <div className="add-recipe-title">
        <input
          className="add-recipe-title-input"
          type="text"
          value={recipeName}
          onChange={(event) => setRecipeName(event.target.value)}
          placeholder="Recipe name"
          id="recipenamefield"
        ></input>
      </div>
      <div className="add-recipe-description">
        <input
          className="add-recipe-description-input"
          type="text"
          value={recipeDescription}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Description"
          id="descriptionfield"
        />
      </div>
      <div className="add-recipe-time">
        <input
          className="add-recipe-time-input"
          type="number"
          onChange={(event) => setTimeInMinutes(event.target.valueAsNumber)}
          placeholder="Time in minutes"
          id="timefield"
        />
      </div>
      <div className="add-recipe-imageURL">
        <input
          className="add-recipe-imageURL-input"
          type="text"
          value={imageURL}
          onChange={(event) => setImageURL(event.target.value)}
          placeholder="Add picture"
          id="pictureurlfield"
        />
      </div>

      <div className="add-recipe-instructions">
        <textarea
          value={instructions}
          className="add-recipe-instructions-input"
          rows={4}
          cols={30}
          onChange={(event) => setInstructions(event.target.value)}
          placeholder="Instructions"
          id="instructionsfield"
        ></textarea>
      </div>

      <div className="add-recipe-categories">
        <select
          value={categories}
          className="add-recipe-categories-input"
          onChange={(event) => setCategories(event.target.value)}
        >
          <option>Välj Kategori</option>
          <option value="Kött">Kött</option>
          <option value="Kyckling">Kyckling</option>
          <option value="Fisk">Fisk</option>
          <option value="Vego">Vego</option>
          <option value="Dessert">Dessert</option>
          <option value="Övrigt">Övrigt</option>
        </select>
      </div>

      <div className="add-recipe-price">
        <input
          className="add-recipe-price-input"
          type="number"
          onChange={(event) => setPrice(event.target.valueAsNumber)}
          placeholder="Pris"
          id="pricefield"
        />
      </div>

      <div className="add-recipe-ingredients-container">
        {ingredient.map((singleIngredient, index) => (
          <div className="add-recipe-ingredients" key={index}>
            <div className="add-recipe-ingredients-oneline">
              <input
                className="add-recipe-ingredients-amount"
                onChange={(e) => handleIngredientChange(e, index)}
                name="amount"
                type="number"
                placeholder="Amount"
                id="ingredientamountfield"
              />
              <input
                className="add-recipe-ingredients-unit"
                value={singleIngredient.unit}
                onChange={(e) => handleIngredientChange(e, index)}
                name="unit"
                type="text"
                placeholder="Unit"
                id="ingredientunitfield"
              />
              <input
                className="add-recipe-ingredients-name"
                value={singleIngredient.name}
                onChange={(e) => handleIngredientChange(e, index)}
                name="name"
                type="text"
                placeholder="Ingredient"
                id="ingredientnamefield"
              />

              <div className="add-recipe-remove-ingredient-div">
                {ingredient.length > 1 && (
                  <button
                    className="add-recipe-remove-ingredient-button"
                    type="button"
                    onClick={() => handleIngredientRemove(index)}
                  >
                    <GiTrashCan />
                  </button>
                )}
              </div>
            </div>

            {ingredient.length - 1 === index && (
              <div className="add-recipe-add-ingredient-div">
                {" "}
                <button
                  className="add-recipe-add-ingredient-button"
                  type="button"
                  onClick={handleIngredientAdd}
                  id="addingredientbutton"
                >
                  Add Ingredient
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="add-recipe-button-container">
        <button
          className="add-recipe-btn"
          onClick={addRecipe}
          id="addrecipebutton"
        >
          Add recipe
        </button>
      </div>
      <div className="go-back-button-div">
        <button className="go-back-button" onClick={() => navigate(-1)}>
          Tillbaka
        </button>
      </div>
    </div>
  );
};

export default PostRecipe;
