import NavBar from "../../globalComponents/NavBar/NavBar";
import Footer from "../../globalComponents/Footer";
import PostRecipe from "./components/PostRecipe";

const AddRecipePage = () => {

 
  return (
    <div>
      <div style={{textAlign: "center"}}>
       Lägg till recept
      </div>
      <div>
        <PostRecipe/>       
      </div>
      <div style={{position: "fixed", bottom: "0", justifyContent: "center", width:"100%", padding: "10px",height:"50px"}}>
        
      </div>
    </div>
  );
}

export default AddRecipePage
