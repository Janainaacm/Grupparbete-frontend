import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../globalComponents/NavBar";
import Footer from "../../globalComponents/Footer";
import { useAPIState } from "../../store/APIState";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import ClearButton from "./components/ClearButton";

const EditRecipe = ({}) => {
  const { fetchRecipe, updateRecipe } = useAPIState();
  const { state: recipe } = useLocation();
  const navigate = useNavigate();
  const [submitClicked, setSubmitClicked] = useState(false);

  // State to hold edited recipe data
  const [editedRecipe, setEditedRecipe] = useState(recipe);
  const [newIngredient, setNewIngredient] = useState("");
  const [newInstructions, setNewInstructions] = useState("")

  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; },shouldNavigate:boolean) => {
    e.preventDefault();
    try {
      await updateRecipe(editedRecipe);
      if(shouldNavigate){
        navigate(-1)
      }
      //  navigate(-1);
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };
  const handleIngredientChange = (e, index) => {
    const { value } = e.target;
    const updatedIngredients = [...editedRecipe.ingredients];
    const [amount, unit, name] = value.split(" ");
    updatedIngredients[index] = { amount, unit, name };
    setEditedRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: updatedIngredients,
    }));
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...editedRecipe.ingredients];
    updatedIngredients.splice(index, 1);
    setEditedRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: updatedIngredients,
    }));
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== "") {
      const [amount, unit, name] = newIngredient.split(" ");
      const updatedIngredients = [
        ...editedRecipe.ingredients,
        { amount, unit, name },
      ];
      setEditedRecipe((prevRecipe) => ({
        ...prevRecipe,
        ingredients: updatedIngredients,
      }));
      setNewIngredient(""); // Clear the newIngredient state
    }
  };
  const handleCategoriesChange = (selectedCategory)=>{
    const updatedCategory = [...editedRecipe.categories]
    setEditedRecipe((prevRecipe) => ({
      ...prevRecipe,
      categories: selectedCategory,
    }));

  }
  const handleInstructionsChange = (e, index) => {
    const { value } = e.target;
    const updatedInstructions = [...editedRecipe.instructions];
    updatedInstructions[index] = value;
    setEditedRecipe((prevRecipe) => ({
      ...prevRecipe,
      instructions: updatedInstructions,
    }));
  };
  
  const handleRemoveInstructions = (index) => {
    const updatedInstructions = [...editedRecipe.instructions];
    updatedInstructions.splice(index, 1);
    setEditedRecipe((prevRecipe) => ({
      ...prevRecipe,
      instructions: updatedInstructions,
    }));
  };
  
  const handleAddInstructions = () => {
    if (newInstructions.trim() !== "") {
      const updatedInstructions = [
        ...editedRecipe.instructions,
        newInstructions,
      ];
      setEditedRecipe((prevRecipe) => ({
        ...prevRecipe,
        instructions: updatedInstructions,
      }));
      setNewInstructions(""); // Clear the newInstructions state
    }
  };

  // useEffect(() => {
  //   // Fetch recipe details when component mounts
  //   if (recipe && recipe._id) {
  //     fetchRecipe(recipe._id);
  //   }
  // }, [fetchRecipe, recipe?._id]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
              <img
              src={editedRecipe?.imageUrl || ""}
              alt={editedRecipe?.title || ""}
              style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
                <div style={{ marginLeft: "10px" }}>
                  <h3>Image URL:</h3>
                  <textarea
                    name="imageUrl"
                    value={editedRecipe.imageUrl}
                    onChange={handleInputChange}
                    style={{ width: "500px", height: "100px" }}
                  />
                </div>
              </div>
              <div>
                <p >
                  <h3>Title:</h3>
                  <textarea
                    name="title"
                    value={editedRecipe.title}
                    onChange={handleInputChange}
                    style={{marginLeft:"20px"}}
                  />
                </p>
                <p >
                  <h3>Description:</h3>
                  <textarea
                    name="description"
                    value={editedRecipe.description}
                    onChange={handleInputChange}
                    style={{marginLeft:"20px"}}
                  />
                </p>
                <p >
                  <h3>Time:</h3>
                  <textarea
                    name="timeInMins"
                    value={editedRecipe.timeInMins}
                    onChange={handleInputChange}
                    style={{marginLeft:"20px"}}
                  />
                </p><p >
                  <h3>Price:</h3>
                  <textarea
                    name="price"
                    value={editedRecipe.price}
                    onChange={handleInputChange}
                    style={{marginLeft:"20px"}}
                  />
                </p>
                <p >
                  <h3>Categories:</h3>
                  <select onChange={(e) => handleCategoriesChange(e.target.value)}>
                  <option value="Select">Select</option>
                  <option value="Kött">Kött</option>
                  <option value="Kyckling">Kyckling</option>
                  <option value="Fisk">Fisk</option>
                  <option value="Vego">Vego</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Sprängmedel">Sprängmedel</option>
                  <option value="Övrigt">Övrigt</option>
                </select>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div >
              <h3>Instructions:</h3>
              <ul>
                {editedRecipe.instructions.map((instruction, index) => (
                    <li key={index}>
                      <textarea
                        value={instruction}
                        onChange={(e) => { handleInstructionsChange(e,index) 
                        }}
                      />
                      <button onClick={()=>handleRemoveInstructions(index)}>Remove</button>
                    </li>
                  ))}
                  <li>
                  <textarea
                    placeholder="Enter new instructions..."
                    value={newInstructions}
                    onChange={(e) => setNewInstructions(e.target.value)}
                  />
                  <button onClick={handleAddInstructions}>Add</button>
                </li>
              </ul>
            </div>
            <p>---------------------------------------------------</p>
            <div >
              <h3>Ingredients:</h3>
              <ul>
                {editedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <textarea
                      value={`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
                      onChange={(e) => handleIngredientChange(e, index)}
                    />
                    <button onClick={() => handleRemoveIngredient(index)}>
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
                  <button onClick={handleAddIngredient}>Add</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
      <button onClick={(e) => {setSubmitClicked(true); 
        handleSubmit(e,true);}}>Submit</button>
      <button onClick={() => navigate(-1)}>Tillbaka</button>
      <Footer />
    </div>
  );
};

export default EditRecipe;

