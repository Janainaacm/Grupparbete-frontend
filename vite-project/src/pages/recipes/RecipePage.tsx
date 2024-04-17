import "./RecipePage.css";
import DisplayRecipes from "./components/DisplayRecipes";
import BackToTopButton from "../../globalComponents/BackToTopButton";

const RecipePage = () => {
  return (
    <div>
      <DisplayRecipes />
      <BackToTopButton />
    </div>
  );
};
export default RecipePage;