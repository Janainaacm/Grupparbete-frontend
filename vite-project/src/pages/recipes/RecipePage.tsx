import { useEffect, useState } from "react";
import DisplayRecipes from "../../globalComponents/DisplayRecipes";
import { useAPIState } from "../../store/APIState";
import "./RecipePage.css";
import BackToTopButton from "../../globalComponents/BackToTopButton";

const RecipePage = () => {
  
  return (
    <div>
      <DisplayRecipes showDeleteButton={false} showEditButton={false}/>
      <BackToTopButton></BackToTopButton>
    </div>
  );
}
export default RecipePage;