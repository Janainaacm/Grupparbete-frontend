//import React from 'react'
import NavBar from '../../global_components/NavBar/NavBar'
import AllCocktails from '../../api/getCocktails'
//import Header from '../../global_components/header'
//import SearchBarComponent from '../../global_components/SearchBarComponent'
import Footer from '../../global_components/footer'
import { useState } from 'react'
import { GiShoppingBag } from 'react-icons/gi'

import ShoppingCart from '../../global_components/Cart/ShoppingCart'

const DrinkPage = () => {

  const [cartsVisibility, setCartVisibility] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);

  
  
  return (

    <div>
      <p>Drink Page</p>
      
      <ShoppingCart visibility={cartsVisibility} products={productsInCart}></ShoppingCart>

  <button onClick={() => setCartVisibility(true)}><GiShoppingBag size={24}></GiShoppingBag></button>
      <div>
        
      </div>
      <div>
        <NavBar/>
      </div>
      <div style={{textAlign: "center"}}>
        <br />
      </div>
      <div>
        <AllCocktails></AllCocktails>
      </div>
      <div style={{position: "fixed", bottom: "0", justifyContent: "center", width:"100%", padding: "10px",height:"50px"}}>
        <Footer />
      </div> 
    </div>
    
  )
}

export default DrinkPage



    

{/* <>
    <NavBar/>
    <div style={{backgroundColor: ''}}>
      <p>DrinkPage</p>
      <AllCocktails></AllCocktails>
    </div>
    </> */}


{/* <div>
      <div>
        <Header/>
      </div>
      <div>
        <NavBar/>
      </div>
      <div style={{textAlign: "center"}}>
        
      </div>
      <div>
        <RecipeDetails recipe={recipe} navigate={navigate}/>
        <Footer />
      </div>
      <div style={{position: "fixed", bottom: "0", justifyContent: "center", width:"100%", padding: "10px",height:"50px"}}>
        
      </div>
    </div> */}