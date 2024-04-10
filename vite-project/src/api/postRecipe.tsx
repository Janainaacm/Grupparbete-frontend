import { IngredientInterface } from "../Types";
import { useState } from "react";
import { useAPIState } from "../store/APIState";
import { useNavigate } from "react-router";

const PostRecipe = () => {
  const { postRecipe } = useAPIState();
  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setDescription] = useState("");
  const [timeInMins, setTimeInMinutes] = useState(Number);
  const [imageURL, setImageURL] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();

  const [categories, setCategories] = useState("");
  const [instructions, setInstructions] = useState("");

  const [ingredient, setIngredient] = useState<IngredientInterface[]>([
    { name: "", amount: 0, unit: "" },
  ]);

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
    };

    const response = await postRecipe(newRecipe);

    if (response === 200) {
      alert("Recept tillagt!");

      setRecipeName("");
      setIngredient([]);
      setDescription("");
      setTimeInMinutes(0);
      setImageURL("");
      setRating("");
      setCategories("");
      setInstructions("");
    } else {
      alert("Error");
    }
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

  const array = ["test", "test 2", "test3"];

  const filterArray = () => {
    console.log("array", array);

    const filteredArray = array.filter(
      (currentArray) => currentArray === "test"
    );

    console.log("filteredArray", filteredArray);
  };

  return (
    <div>
      <br />
      <br />
      <input
        type="text"
        value={recipeName}
        onChange={(event) => setRecipeName(event.target.value)}
        placeholder="Recipe name"
      ></input>
      <input
        type="text"
        value={recipeDescription}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={timeInMins}
        onChange={(event) => setTimeInMinutes(event.target.valueAsNumber)}
        placeholder="Time in minutes"
      />
      <br />
      <input
        type="text"
        value={imageURL}
        onChange={(event) => setImageURL(event.target.value)}
        placeholder="Add picture"
      />

      {/* <input
        type="number"
        onChange={(event) => setRating(event.target.value)}
        min={1}
        max={5}
        placeholder="Rating"
      /> */}

      <br />
      <br />

      <textarea
        rows={4}
        cols={30}
        onChange={(event) => setInstructions(event.target.value)}
        placeholder="Instructions"
      ></textarea>
      <br />

      <input
        type="text"
        onChange={(event) => setCategories(event.target.value)}
        placeholder="Categories"
      />

      <br />
      <br />

      {ingredient.map((singleIngredient, index) => (
        <div key={index}>
          <input
            value={singleIngredient.name}
            onChange={(e) => handleIngredientChange(e, index)}
            name="name"
            type="text"
            placeholder="Ingredient"
          />
          <input
            value={singleIngredient.amount}
            onChange={(e) => handleIngredientChange(e, index)}
            name="amount"
            type="number"
            placeholder="Amount"
          />
          <input
            value={singleIngredient.unit}
            onChange={(e) => handleIngredientChange(e, index)}
            name="unit"
            type="text"
            placeholder="Unit"
          />

          {ingredient.length > 1 && (
            <button type="button" onClick={() => handleIngredientRemove(index)}>
              Remove
            </button>
          )}

          <br />
          {ingredient.length - 1 === index && (
            <div>
              {" "}
              <br />
              <button type="button" onClick={handleIngredientAdd}>
                Add Ingredient?
              </button>
            </div>
          )}
        </div>
      ))}

      <br />
      <br />
      <button onClick={addRecipe}>Add recipe</button>
      <button onClick={() => navigate(-1)}>Tillbaka</button>
    </div>
  );
};

export default PostRecipe;
