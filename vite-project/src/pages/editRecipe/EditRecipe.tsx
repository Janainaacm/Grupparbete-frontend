import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../globalComponents/NavBar";
import Footer from "../../globalComponents/Footer";
import { useAPIState } from "../../store/APIState";
import { useNavigate, useLocation } from "react-router-dom";

const EditRecipe = ({}) => {
  const { fetchRecipe,updateRecipe } = useAPIState();
  const { state: recipe } = useLocation();
  const navigate = useNavigate();

    // State to hold edited recipe data
    const [editedRecipe, setEditedRecipe] = useState(recipe);

    // Function to handle changes in input fields
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedRecipe((prevRecipe) => ({
        ...prevRecipe,
        [name]: value,
      }));
    };
  
    // Function to handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await updateRecipe(editedRecipe);
        navigate(-1); // Navigate back after successful update
      } catch (error) {
        console.error("Error updating recipe:", error);
      }
    };

  useEffect(() => {
    // Fetch recipe details when component mounts
    fetchRecipe(recipe._id);
  }, [fetchRecipe, recipe._id]);

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div >
          <div >
            <div >
              <div >
                {/* <img src={editedRecipe.imageUrl}alt={editedRecipe.title}/> */}
              </div>
              <div >
                
                <p>Title:<input type="text" name="title" value={editedRecipe.title} onChange={handleInputChange}/></p>
                <p>Description:<textarea name="description" value={editedRecipe.description} onChange={handleInputChange}/></p>
                <p>Time:<input type="number" name="timeInMins" value={editedRecipe.timeInMins} onChange={handleInputChange}/></p>
                <p>Categories:<input type="text" name="categories" value={editedRecipe.categories.join(", ")} onChange={handleInputChange}/></p>
                <p>AvgRating<input type="number" name="avgRating" value={editedRecipe.avgRating} onChange={handleInputChange}/></p>
                
              </div>
            </div>
          </div>
          <div >
            <div >
              <h3>Instructions:</h3>
              <ol >
                {editedRecipe.instructions &&
                  editedRecipe.instructions.map((instruction, index) => (
                    <li key={index}>
                      <input
                        type="text"
                        value={instruction}
                        onChange={(e) => {
                          const updatedInstructions = [...editedRecipe.instructions];
                          updatedInstructions[index] = e.target.value;
                          setEditedRecipe((prevRecipe) => ({
                            ...prevRecipe,
                            instructions: updatedInstructions,
                          }));
                        }}
                      />
                    </li>
                  ))}
              </ol>
            </div>
            <div >
              <h3>Ingredients:</h3>
              <ul>
                {editedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <input
                      type="text"
                      value={ingredient.amount + " " + ingredient.unit + " " + ingredient.name}
                      onChange={(e) => {
                        const updatedIngredients = [...editedRecipe.ingredients];
                        const [amount, unit, name] = e.target.value.split(" ");
                        updatedIngredients[index] = { amount, unit, name };
                        setEditedRecipe((prevRecipe) => ({
                          ...prevRecipe,
                          ingredients: updatedIngredients,
                        }));
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </form>
      <button onClick={(handleSubmit)}>Submit</button>
      <button onClick={() => navigate(-1)}>Tillbaka</button>
      <Footer />
    </div>
  );
};

export default EditRecipe;


