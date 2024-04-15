import NavBar from "../../globalComponents/NavBar/NavBar";
import Footer from "../../globalComponents/Footer";
import PostRecipe from "./components/PostRecipe";
import "./AddRecipePage.css"

const AddRecipePage = () => {

 
  return (
    <div>
      <div className="page-title">
       <h1 className="title">Lägg till recept</h1>
      </div>
      <div className="post-recipe-container">
        <PostRecipe/>       
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default AddRecipePage
