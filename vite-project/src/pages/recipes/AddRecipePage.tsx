import NavBar from "../../globalComponents/NavBar";
import Footer from "../../globalComponents/footer";
import PostRecipe from "../../api/postRecipe";

const AddRecipePage = () => {

 
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div style={{textAlign: "center"}}>
       Lägg till recept
      </div>
      <div>
        <PostRecipe/>       
        <Footer />
      </div>
      <div style={{position: "fixed", bottom: "0", justifyContent: "center", width:"100%", padding: "10px",height:"50px"}}>
        
      </div>
    </div>
  );
}

export default AddRecipePage
