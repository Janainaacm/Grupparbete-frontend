import React from 'react'
import { useLocation } from "react-router-dom";


const recipesPage = () => {
    const { state } = useLocation();
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