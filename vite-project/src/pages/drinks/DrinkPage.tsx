//import React from 'react'
import NavBar from '../../global_components/NavBar/NavBar'
import AllCocktails from '../../api/getCocktails'
//import Header from '../../global_components/header'
//import SearchBarComponent from '../../global_components/SearchBarComponent'
import Footer from '../../global_components/footer'


const DrinkPage = () => {
  

  
  
  return (

    <div>
      <p>Drink Page</p>
      

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