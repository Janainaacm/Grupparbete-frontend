import NavBar from "../../globalComponents/NavBar";
import DisplayCocktails from "./components/DisplayAllCocktails";
import Footer from "../../globalComponents/Footer";
import FilterCocktailComponent from "../../globalComponents/FilterCocktailComponent";
import { useEffect } from "react";
import { useAPIState } from "../../store/APIState";
import BackToTopButton from "../../globalComponents/BackToTopButton";

const CocktailsPage = () => {
  //const { recipeList,fetchRecipeList, fetchCategories } = useAPIState();

  // useEffect(() => {
  //   if (recipeList.length == 0){
  //    fetchRecipeList();
  //   }
  //   if (recipeList.length == 0) {
  //    fetchCategories();
  //   }
  // }, []);

  return (
    <div>
      <div></div>
      <div style={{ textAlign: "center" }}>
        <br />
      </div>
      <div>
        <FilterCocktailComponent />
        <br />
        <br />
        {/* <h2>Alla cocktails</h2> */}
        <br />
        <br />
        {/* <DisplayCocktails /> */}
      </div>
      <div
        style={{
          bottom: "0",
          justifyContent: "center",
          width: "100%",
          padding: "10px",
          height: "50px",
        }}
      ></div>
      <BackToTopButton></BackToTopButton>
    </div>
  );
};

export default CocktailsPage;