import React, { ChangeEvent, useEffect, useState } from "react";
import { useAPIState } from "../../store/APIState";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import ClearButton from "./components/ClearButton";
import { RecipeInterface } from "../../Types";
import { useEditRecipeState } from "../../store/EditRecipeState";

const EditRecipe = () => {
  const {
    currentRecipe,
    recipeID,
    fetchRecipe,
    updateRecipe,
    fetchCategories,
  } = useAPIState();
  const {
    recipeToEdit,
    newInstruction,
    newIngredient,
    getCurrentRecipeToEdit,
    handleInputChange,
    handleInstructionsChange,
    setNewInstruction,
    addNewInstruction,
    deleteInstruction,
    handleIngredientChange,
    setNewIngredient,
    addNewIngredient,
    deleteIngrediens,
    handleCategoriesChange,
  } = useEditRecipeState();
  const navigate = useNavigate();
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    const savedRecipeID = localStorage.getItem("recipeID");
    if (savedRecipeID) {
      fetchRecipe(savedRecipeID);
    } else {
      fetchRecipe(recipeID);
    }
    setNewInstruction("");
    setNewIngredient("");
  }, []);

  useEffect(() => {
    getCurrentRecipeToEdit(currentRecipe);
  }, [currentRecipe]);

  // Function to handle form submission
  const handleSubmit = async (
    e: { preventDefault: () => void },
    shouldNavigate: boolean
  ) => {
    e.preventDefault();
    try {
      await updateRecipe(recipeToEdit);
      if (shouldNavigate) {
        navigate(-1);
      }
      //  navigate(-1);
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };

  return (
    <div>
      {/* <div>
        <p>currentRecipe: </p>
        {currentRecipe.title}
        <p>recipeToEdit: </p>
        {recipeToEdit.title}
      </div> */}
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={recipeToEdit.imageUrl || ""}
                  alt={recipeToEdit.title || ""}
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
                <div style={{ marginLeft: "10px" }}>
                  <h3>Image URL:</h3>
                  <textarea
                    name="imageUrl"
                    value={recipeToEdit.imageUrl}
                    onChange={handleInputChange}
                    style={{ width: "500px", height: "100px" }}
                  />
                </div>
              </div>
              <div>
                <h3>Title:</h3>
                <textarea
                  name="title"
                  value={recipeToEdit.title}
                  onChange={handleInputChange}
                  style={{ marginLeft: "20px" }}
                />

                <h3>Description:</h3>
                <textarea
                  name="description"
                  value={recipeToEdit.description}
                  onChange={handleInputChange}
                  style={{ marginLeft: "20px" }}
                />

                <h3>Time:</h3>
                <textarea
                  name="timeInMins"
                  value={recipeToEdit.timeInMins}
                  onChange={handleInputChange}
                  style={{ marginLeft: "20px" }}
                />

                <h3>Price:</h3>
                <textarea
                  name="price"
                  value={recipeToEdit.price}
                  onChange={handleInputChange}
                  style={{ marginLeft: "20px" }}
                />

                <h3>Categories:</h3>
                <select
                  onChange={(e) => handleCategoriesChange(e.target.value)}
                >
                  <option value="Select">Select</option>
                  <option value="Kött">Kött</option>
                  <option value="Kyckling">Kyckling</option>
                  <option value="Fisk">Fisk</option>
                  <option value="Vego">Vego</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Sprängmedel">Sprängmedel</option>
                  <option value="Övrigt">Övrigt</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3>Instructions:</h3>
              <ul>
                {recipeToEdit.instructions.map((instruction, index) => (
                  <li key={index}>
                    <textarea
                      value={instruction}
                      onChange={(e) => {
                        handleInstructionsChange(e, index);
                      }}
                    />
                    <button onClick={() => deleteInstruction(index)}>
                      Remove
                    </button>
                  </li>
                ))}
                <li>
                  <textarea
                    placeholder="Enter new instructions..."
                    value={newInstruction}
                    onChange={(e) => setNewInstruction(e.target.value)}
                  />
                  <button onClick={addNewInstruction}>Add</button>
                </li>
              </ul>
            </div>
            <p>---------------------------------------------------</p>
            <div>
              <h3>Ingredients: (Amount, unit, name)</h3>
              <ul>
                {recipeToEdit.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <textarea
                      value={`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        handleIngredientChange(e, index)
                      }
                    />
                    <button onClick={() => deleteIngrediens(index)}>
                      Remove
                    </button>
                  </li>
                ))}
                <li>
                  <textarea
                    placeholder="Enter new ingredient..."
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                  />
                  <button onClick={addNewIngredient}>Add</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
      <button
        onClick={(e) => {
          setSubmitClicked(true);
          handleSubmit(e, true);
          fetchCategories();
        }}
      >
        Submit
      </button>
      <button onClick={() => navigate(-1)}>Tillbaka</button>
    </div>
  );
};
export default EditRecipe;
