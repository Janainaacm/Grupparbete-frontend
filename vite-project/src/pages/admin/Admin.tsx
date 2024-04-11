import NavBar from "../../globalComponents/NavBar.tsx";
import Footer from "../../globalComponents/Footer.tsx";
import { useAPIState } from "../../store/APIState.ts";
import { useEffect } from "react";
import DisplayRecipes from "../../globalComponents/DisplayRecipes.tsx";
import { useNavigate } from "react-router";
import ClearButton from "../editRecipe/components/ClearButton.tsx";


const Admin=(): JSX.Element=>{
<<<<<<< HEAD
    const { recipeList,fetchRecipeList,fetchCategories } = useAPIState();
=======
    const { recipeList,fetchRecipeList } = useAPIState();
>>>>>>> 80b6a7fe8165bd6fc5a6c0405c757dd7d6815f4e
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

