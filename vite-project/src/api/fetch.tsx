import axios from 'axios'
import { useState } from 'react'
import { API_URL } from '../config'



function setRecipes() {

    const [recipes, setRecipes] = useState([])

async function fetchAllRecipes() {
    try {
        const response = await axios.get(`${API_URL}/recipes`)

    if (response.status === 200) {
        setRecipes(response.data)
    } 
} catch (error) {
    console.error('Error', error)
    }
}

return (
    recipes
)

}
export default fetch
