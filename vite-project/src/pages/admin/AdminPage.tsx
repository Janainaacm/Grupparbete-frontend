import NavBar from "../../globalComponents/NavBar/NavBar.tsx";
import Footer from "../../globalComponents/Footer.tsx";
import { useAPIState } from "../../store/APIState.ts";
import { useEffect } from "react";
import DisplayRecipes from "../recipes/components/DisplayRecipes.tsx";
import { useNavigate } from "react-router";
import ClearButton from "./components/ClearButton.tsx";


const Admin=(): JSX.Element=>{

    const navigate = useNavigate()

    const handleClick = () =>{
        navigate('/AddRecept')
    }
  
    return(
        <>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>
        <button onClick={handleClick} style={{ margin: '5px' }} id="addrecipebutton">Add recipe</button>
        <ClearButton/>
        </div>
        <DisplayRecipes showDeleteButton={true} showEditButton={true} />
      </div>
    </>
    );

}
export default Admin;

