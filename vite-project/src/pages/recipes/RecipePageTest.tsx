import { useEffect, useState } from "react";
import { useNavigate, useLocation, } from "react-router";
import Header from "../../global_components/header";
import NavBar from "../../global_components/NavBar/NavBar";
import Footer from "../../global_components/footer";
import SearchBarComponent from '../../global_components/SearchBarComponent';
import RecipesComponent from "../../global_components/";
import RecipeDetails from "./RecipeDetails";
import PostRecipe from "../../api/postRecipe";

const RecipePage = () => {
  const { recipe } = useLocation().state;
    
    const navigate = useNavigate()

  useEffect(() => {
     console.log(recipe)
  }, []);

 
  return (
    <div>
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
    </div>
  );
}

export default RecipePage
