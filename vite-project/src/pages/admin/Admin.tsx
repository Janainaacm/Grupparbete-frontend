import NavBar from "../../globalComponents/NavBar.tsx";
import Footer from "../../globalComponents/Footer.tsx";
import { useAPIState } from "../../store/APIState.ts";
import { useEffect } from "react";
import DisplayRecipes from "../../globalComponents/DisplayRecipes.tsx";
import FilterComponent from "../../globalComponents/FilterComponent.tsx";
import PostRecipe from "../../api/postRecipe.tsx";
import { useNavigate } from "react-router";

const Admin=(): JSX.Element=>{
    const { recipeList,fetchRecipeList,fetchRecipe } = useAPIState();
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate('/AddRecept')
    }
    
    useEffect(() => {
      fetchRecipeList();
    }, []);

    return(
        <>
      <NavBar />
      <div>
        <FilterComponent></FilterComponent>
        <button onClick={handleClick}>Add recipe</button>

        <DisplayRecipes recipeList={recipeList} showDeleteButton={true} showEditButton={true} />

      </div>
      <Footer/>
    </>
    );

}
export default Admin;

