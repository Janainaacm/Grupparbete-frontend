import React, { useState } from 'react'
import { useAPIState } from '../../../store/APIState';
import { useLocation } from 'react-router';

const EditRecipeComponents = () => {

    const [editedRecipe, setEditedRecipe] = useState(recipe);
    const [newIngredient, setNewIngredient] = useState("");
    const { state: recipe } = useLocation();

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
          setNewIngredient("");
        }
      };
}

export default EditRecipeComponents