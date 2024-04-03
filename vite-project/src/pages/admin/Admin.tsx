import NavBar from "../../globalComponents/NavBar.tsx";
import Footer from "../../globalComponents/Footer.tsx";
import { useAPIState } from "../../store/APIState.ts";
import { useEffect, useState } from "react";
import DisplayRecipes from "../../globalComponents/DisplayRecipes.tsx";

const Admin=()=>{
    const { recipeList,fetchRecipeList } = useAPIState();
    
  
    useEffect(() => {
      fetchRecipeList();
    }, []);

    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
            {DisplayRecipes(recipeList)}
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
        
    );

}
export default Admin;