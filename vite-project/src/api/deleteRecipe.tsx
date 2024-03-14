import { API_URL } from "../config";
import axios from "axios";


async function deleteRecipe(recipeId:string) {

    try {
        const response = await axios.delete(`${API_URL}/recipes/${recipeId}`)
    
    if (response.status === 204){
        console.log("Recipe deleted")
    }
    } catch (error) {
    console.log('Error deleting recipe', error)
}

} export default deleteRecipe