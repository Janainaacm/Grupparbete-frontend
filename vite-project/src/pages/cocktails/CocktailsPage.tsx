import NavBar from '../../globalComponents/NavBar'
import DisplayCocktail from './components/DisplayCocktail'
import Footer from '../../globalComponents/Footer'
import FilterCocktailComponent from '../../globalComponents/FilterCocktailComponent'


const CocktailsPage = () => {




  return (

    <div>
      <p>Cocktail Page</p>


      <div>

      </div>
      <div>
        <NavBar />
      </div>
      <div style={{ textAlign: "center" }}>
        <br />
      </div>
      <div>
        <FilterCocktailComponent></FilterCocktailComponent>
        <br />
        <br />
        <h2>Alla cocktails</h2>
        <br />
        <br />
        <DisplayCocktail />
      </div>
      <div style={{bottom: "0", justifyContent: "center", width: "100%", padding: "10px", height: "50px" }}>
        <Footer />
      </div>
    </div>

  )
}

export default CocktailsPage





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