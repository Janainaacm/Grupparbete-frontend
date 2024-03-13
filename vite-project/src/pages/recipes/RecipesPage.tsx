import React from 'react'
import { useLocation } from "react-router-dom";
import axios from "axios";



const recipesPage = () => {
    const URL = "https://sti-java-grupp5-wjfjet.reky.se/swagger";

    const { state } = useLocation();

    const fetchAllRecipes = async () => {
        // Kalla på min API GET /todos
      };

    if (!state) return(
        //Visa alla recept
        console.log("hej")
    );




  return (
    <div>
      {state}
    </div>
  )
}

export default recipesPage