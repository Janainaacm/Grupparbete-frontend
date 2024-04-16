import PostRecipe from "./components/PostRecipe";
import "./AddRecipePage.css";

const AddRecipePage = () => {
  return (
    <div>
      <div className="page-title">
        <h1 className="title">Lägg till recept</h1>
      </div>
      <div className="post-recipe-container">
        <PostRecipe />
      </div>
    </div>
  );
};

export default AddRecipePage;
