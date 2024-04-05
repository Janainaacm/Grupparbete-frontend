import NavBar from "../../globalComponents/NavBar.tsx";
import Footer from "../../globalComponents/Footer.tsx";
import { useAPIState } from "../../store/APIState.ts";
import { useEffect } from "react";
import DisplayRecipes from "../../globalComponents/DisplayRecipes.tsx";
import FilterComponent from "../../globalComponents/FilterComponent.tsx";

const Admin=(): JSX.Element=>{
    const { recipeList,fetchRecipeList } = useAPIState();
    
    useEffect(() => {
      fetchRecipeList();
    }, []);

    return(
        <>
      <NavBar />
      <div>
        <FilterComponent></FilterComponent>

        <DisplayRecipes recipeList={recipeList} showDeleteButton={true} />

      </div>
      <Footer/>
    </>
    );

}
export default Admin;