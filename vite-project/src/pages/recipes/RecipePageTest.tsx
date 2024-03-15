import { useEffect, useState } from "react";
import { useNavigate, useLocation, } from "react-router";
import Header from "../../global_components/header";
import NavBar from "../../global_components/NavBar/NavBar";
import Footer from "../../global_components/footer";
import RecipeDetails from "./RecipeDetails";


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
