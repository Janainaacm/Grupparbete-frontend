import {create} from "zustand"
import { RecipeInterface } from "../Types"
import axios from "axios"
import { API_URL } from "../config"



/*
  const {recipeList, fetchRecipeList} = useRecipeState()  // bryter ut allt som hämtas från global state, 
                                                       // i senare komponenter behövs bara {recipe}.

  useEffect(() => {    // kör fetchAllRecipes en gång så tidigt som möjligt, detta fyller listan med recipes via API.
    fetchRecipeList()  // Behöver bara köras en gång så högt i kod-hierarkin det går.
  },[fetchRecipeList??]) // 
*/


// interface som definierar struktur och funktionerna för global state
interface RecipeState {
    recipeList: RecipeInterface[]
    fetchRecipeList: () => Promise<void>
    postRecipe: (newRecipe: RecipeInterface) => Promise<number>
}



// skapar global state och fyller 'recipes' med samtliga recept i databasen.
export const useRecipeState = create<RecipeState>((set) => ({ //exportera global state med funktioner och listan recipe

recipeList: [], // deklarera tom lista

fetchRecipeList: async () => {
    try {
        const response = await axios.get(`${API_URL}/recipes/`)
        if (response.status === 200) {
            set( { recipeList: response.data })
            console.log(response.data)
        }
    } catch (error) {
        console.log ('error', error)
    }

},

postRecipe: async (newRecipe:RecipeInterface) => {
    const {fetchRecipeList} = useRecipeState()
    try {
        const response = await axios.post(`${API_URL}/recipes`, newRecipe) 
            console.log("Success!")
            fetchRecipeList()
            return response.status
    } catch (error) {
        console.log ('error', error)
        throw error
    }
}
}))