import { useLocation, useNavigate } from 'react-router-dom';
import { RecipeInterface } from '../Types';
import axios from 'axios'
import { API_URL } from '../config';
import { BiCategory } from 'react-icons/bi';
import { useState } from 'react';

/* const[categorier, setCategorier] = useState([""]); */

const FilterFunction = ({...recipes}: RecipeInterface[]): JSX.Element  => {
    
async function getRecipesByCategory() {
    const response = await axios.get(`${API_URL}/categories`)


    if (response.status===200){
        const categories = response.data
        console.log(categories)
        const filter = categories.filter((filtrera:any) => filtrera.name === "kött") 
        console.log(filter)
    }
   
   
    /* setCategorier(categories) */
        

    
}

function getSelectedCategory() {
   // let categoryVariable = getRecipesByCategory()
    /* const Filter = categorier.filter((filtrera) => filtrera.name === "Kött") */
   /*  console.log (Filter) */

    

}
   //Get all categories from API

   //Get all recipes by category from API

    return (
        <div>
            <input
             placeholder="search..."
             type="text" />
            <button onClick={getRecipesByCategory}>Hämta categorier</button>
            <button onClick={getSelectedCategory}>Filtrera</button>
            {/* Rendera recept eller filtrerade recept här */}
        </div>
    );
};

export default FilterFunction;
