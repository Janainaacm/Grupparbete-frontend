import NavBar from "../../globalComponents/NavBar.tsx";
import Footer from "../../globalComponents/Footer.tsx";
import { useAPIState } from "../../store/APIState.ts";
import { useEffect } from "react";
import DisplayRecipes from "../../globalComponents/DisplayRecipes.tsx";
import { useNavigate } from "react-router";
import ClearButton from "../editRecipe/components/ClearButton.tsx";


const Admin=(): JSX.Element=>{

    const navigate = useNavigate()

    const handleClick = () =>{
        navigate('/AddRecept')
    }
  
    return(
        <>
      <div>
        <button onClick={handleClick}>Add recipe</button>
        <ClearButton/>
        <DisplayRecipes showDeleteButton={true} showEditButton={true} />
      </div>
    </>
    );

}
export default Admin;

