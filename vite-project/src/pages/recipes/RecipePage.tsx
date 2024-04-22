import "./RecipePage.css";
import DisplayRecipes from "./components/DisplayRecipes";
import BackToTopButton from "../../globalComponents/BackToTopButton";
import { useLocation } from "react-router";

const RecipePage = () => {
  const location = useLocation()
  const tag = location.state as string


  return (
    <div>
      <DisplayRecipes tag = {tag}/>
      <BackToTopButton />
    </div>
  );
};
export default RecipePage;