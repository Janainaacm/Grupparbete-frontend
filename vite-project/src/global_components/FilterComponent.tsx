import React from 'react'
import { useState } from 'react'
import { API_URL } from '../config'
import axios from 'axios'
import { RecipeInterface } from '../Types'
import { useNavigate } from 'react-router-dom'
import { useAPIState } from '../state'


const FilterComponent = () => {

    const [filteredArray, setFilteredArray] = useState([]);
    const {fetchRecipe} = useAPIState()
    const navigate = useNavigate();
    
    const filterByCategory = async (categoryName:string) => {

        

        const response = await axios.get(`${API_URL}/categories/${categoryName}/recipes`);

        if (response.status === 200) {

            setFilteredArray(response.data);
            console.log(response.data)
        };
    };



  const handleClick = async (recipeId: string) => {
    try {
      const recipes: RecipeInterface = await fetchRecipe(recipeId); //GET function, store in array
      //const selectedRecipe = recipes[0]; // Extract the first recipe
      const encodedTitle = encodeURIComponent(recipes.title); // Encode the title of the selected recipe to use in URL
      navigate(`/Recept/${encodedTitle}`, {
        state: recipes, // Navigate to next page with state of recipe as the selected recipe and the title in URL
      });
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };



  return (

    <div>
        <div className="category-bubbles">
            <div className="button-one">
              <button onClick={() => filterByCategory("sprängmedel")}>Sprängmedel</button>
            </div>
            <div className="button-two">
              <button onClick={() => filterByCategory("snabbmat")}>Snabbmat</button>
            </div>
            <div className="button-three">
              <button onClick={() => filterByCategory("dessert")}>Dessert</button>
            </div>
            <div className="button-four">
              <button onClick={() => filterByCategory("fisk")}>Fisk</button>
            </div>
            <div className="button-five">
              <button onClick={() => filterByCategory("kött")}>Kött</button>
            </div>
          </div>



<div style={{ display: "flex", flexWrap: "wrap" }}>
      

      {filteredArray.map((recipe) => (
        <div
          key={recipe._id}
          style={{
            width: "200px",
            marginBottom: "20px",
            marginRight: "20px",
            textAlign: "center",
          }}
        >
          <button
            onClick={() => handleClick(recipe._id)}
            style={{
              border: "none",
              background: "none",
              padding: "0",
              cursor: "pointer",
            }}
          >
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              style={{ width: "100px", height: "100px", marginBottom: "5px" }}
            />
          </button>
          <div>{recipe.title}</div>
          <div style={{fontSize: "12px"}}>{recipe.categories}</div>
        </div>
      ))}
    </div>
      
    </div>
  )
}

export default FilterComponent