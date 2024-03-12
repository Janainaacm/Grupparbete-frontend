import axios from 'axios'
import { useState } from 'react'

const URL = "https://sti-java-grupp5-wjfjet.reky.se"

function setRecipes() {

    const [recipes, setRecipes] = useState([])

async function fetchAllRecipes() {
    try {
        const response = await axios.get(`${URL}/recipes`)

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
