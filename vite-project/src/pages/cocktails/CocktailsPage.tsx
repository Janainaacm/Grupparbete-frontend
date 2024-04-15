import DisplayAllCocktails from "./components/DisplayAllCocktails";
import BackToTopButton from "../../globalComponents/BackToTopButton";

const CocktailsPage = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <DisplayAllCocktails />
      </div>

      <BackToTopButton></BackToTopButton>
    </div>
  );
};

export default CocktailsPage;
