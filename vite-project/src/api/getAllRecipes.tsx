import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_URL } from '../config'



function allRecipes() {

    const [recipes, setRecipes] = useState([])

async function getAllRecipes() {
    try {
        const response = await axios.get(`${API_URL}/recipes`)

    if (response.status === 200) {
        setRecipes(response.data)
        console.log(response.data)
    } 
} catch (error) {
    console.error('Error', error)
    }
}

 useEffect(()=>{
    getAllRecipes()
  },[])
  return recipes
  
} 

export default allRecipes
