import React from 'react'
import NavBar from '../global_components/NavBar/NavBar'
import Drinks from '../api/getDrinks'
import AllCocktails from '../api/AllCocktails'

const DrinkPage = () => {
  return (
    <>
    <NavBar/>
    <div style={{backgroundColor: 'orange'}}>
      <p>DrinkPage</p>
      <AllCocktails></AllCocktails>
    </div>
    </>
    
  )
}

export default DrinkPage
