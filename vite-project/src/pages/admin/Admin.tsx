import NavBar from "../../globalComponents/NavBar.tsx";
import Footer from "../../globalComponents/Footer.tsx";
import { useAPIState } from "../../store/APIState.ts";
import { useEffect } from "react";
import DisplayRecipes from "../../globalComponents/DisplayRecipes.tsx";
import { useNavigate } from "react-router";
import ClearButton from "../editRecipe/components/ClearButton.tsx";


const Admin=(): JSX.Element=>{
    const { recipeList,fetchRecipeList,fetchCategories } = useAPIState();
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate('/AddRecept')
    }
  

    useEffect(() => {
      if (recipeList.length == 0){
       fetchRecipeList();
      }
      if (recipeList.length == 0) {
       fetchCategories();
      }
    }, []);

    return(
        <>
      <div>
      
        <button onClick={handleClick}>Add recipe</button>
        <ClearButton/>

        <DisplayRecipes recipeList={recipeList} showDeleteButton={true} showEditButton={true} />

      </div>
      <Footer/>
    </>
    );

}
export default Admin;

