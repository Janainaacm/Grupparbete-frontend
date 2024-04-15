import React, { ChangeEvent, useEffect, useState } from "react";
import { useAPIState } from "../../store/APIState";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import ClearButton from "../admin/components/ClearButton";
import { RecipeInterface } from "../../Types";
import { useEditRecipeState } from "../../store/EditRecipeState";
import "./EditRecipePage.css"
import { GiTrashCan } from "react-icons/gi";


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
    <div className="edit-recipe-container">
      <div className="edit-recipe-header">
        <h1 className="edit-recipe-title">Edit recipe</h1>
      </div>
      {/* <div>
        <p>currentRecipe: </p>
        {currentRecipe.title}
        <p>recipeToEdit: </p>
        {recipeToEdit.title}
      </div> */}
      <div className="edit-recipe-form">
      <form onSubmit={() => handleSubmit}>
        <div>
          <div>
            <div>
              <div className="edit-recipe-image-container">
                <img
                className="edit-recipe-image"
                  src={recipeToEdit.imageUrl || ""}
                  alt={recipeToEdit.title || ""}
                />
                <div className="edit-recipe-image-input-section">
                  <h3 className="edit-recipe-section-title">Image URL:</h3>
                  <textarea
                  className="edit-recipe-imageURL-input"
                    name="imageUrl"
                    value={recipeToEdit.imageUrl}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="edit-recipe-flexdisp">
                <h3 className="edit-recipe-section-title">Title:</h3>
                <textarea
                className="edit-recipe-title-input"
                  name="title"
                  value={recipeToEdit.title}
                  onChange={handleInputChange}
                />

                <h3 className="edit-recipe-section-title">Description:</h3>
                <textarea
                 className="edit-recipe-title-input"
                  name="description"
                  value={recipeToEdit.description}
                  onChange={handleInputChange}
                />

              <div className="jag-vill-do">
                <div className="omfg">
                <h3 className="edit-recipe-section-title">Time:</h3>
                <textarea
                className="edit-recipe-price-input"
                  name="timeInMins"
                  value={recipeToEdit.timeInMins}
                  onChange={handleInputChange}
                />
</div>
                <div className="omfg">
                <h3 className="edit-recipe-section-title">Price:</h3>
                <textarea
                className="edit-recipe-price-input"
                  name="price"
                  value={recipeToEdit.price}
                  onChange={handleInputChange}
                />
</div>
                <div className="omfg">
                <h3 className="edit-recipe-section-title">Categories:</h3>
                <select
                className="edit-recipe-price-input"
                  onChange={(e) => handleCategoriesChange(e.target.value)}
                >
                  <option value="Select">Select</option>
                  <option value="Kött">Kött</option>
                  <option value="Kyckling">Kyckling</option>
                  <option value="Fisk">Fisk</option>
                  <option value="Vego">Vego</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Övrigt">Övrigt</option>
                </select>
              </div>
              </div>
              </div>
            </div>
          </div>
          <div>
            <div className="edit-recipe-instructions-container">
              <h3 className="edit-recipe-section-title">Instructions:</h3>
              <ul className="edit-recipe-instructions-ul">
                {recipeToEdit.instructions.map((instruction, index) => (
                  <li  className="edit-recipe-instructions-li" key={index}>
                    <textarea
                     className="edit-recipe-instructions-existing-input"
                      value={instruction}
                      onChange={(e) => {
                        handleInstructionsChange(e, index);
                      }}
                    />
                    <button  className="edit-recipe-instructions-remove-button"
                    onClick={() => deleteInstruction(index)}>
                      <GiTrashCan/>
                    </button>
                  </li>
                ))}
                <li className="edit-recipe-instructions-li">
                  <textarea
                  className="edit-recipe-instructions-existing-input"
                    placeholder="Enter new instructions..."
                    value={newInstruction}
                    onChange={(e) => setNewInstruction(e.target.value)}
                  />
                  
                     <button className="edit-recipe-existing-input-add-btn" onClick={addNewInstruction}>Add</button>
                </li>
              </ul>
            </div>
            <div className="edit-recipe-instructions-container">
              <h3 className="edit-recipe-section-title">Ingredients: (Amount, unit, name)</h3>
              <ul className="edit-recipe-instructions-ul">
                {recipeToEdit.ingredients.map((ingredient, index) => (
                  <li className="edit-recipe-instructions-li" key={index}>
                    <textarea
                    className="edit-recipe-instructions-existing-input"
                      value={`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        handleIngredientChange(e, index)
                      }
                    />
                    <button className="edit-recipe-instructions-remove-button" onClick={() => deleteIngrediens(index)}>
                    <GiTrashCan/>
                    </button>
                  </li>
                ))}
                <li className="edit-recipe-instructions-li">
                  <textarea
                  className="edit-recipe-instructions-existing-input" 
                    placeholder="Enter new ingredient..."
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                  />
                  <button className="edit-recipe-existing-input-add-btn" onClick={addNewIngredient}>Add</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
      </div>
      <button
       className="edit-recipe-submit-button"
        onClick={(e) => {
          setSubmitClicked(true);
          handleSubmit(e, true);
          fetchCategories();
        }}
      >
        Submit
      </button>
      <div className="back-btn">
      <button 
       className="go-back-button"
      onClick={() => navigate(-1)}>Tillbaka</button>
      </div>
    </div>
  );
};
export default EditRecipe;
