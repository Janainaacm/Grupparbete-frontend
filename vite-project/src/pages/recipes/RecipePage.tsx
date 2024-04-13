import { useEffect, useState } from "react";
import DisplayRecipes from "../../globalComponents/DisplayRecipes";
import { useAPIState } from "../../store/APIState";
import "./RecipePage.css";

const RecipePage = () => {
  
  return (
    <div>
      <DisplayRecipes showDeleteButton={false} showEditButton={false}/>
    </div>
  );
}
export default RecipePage;