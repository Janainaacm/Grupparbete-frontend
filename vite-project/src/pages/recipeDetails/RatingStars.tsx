import React from 'react'
import { FaStar } from "react-icons/fa";
import { useAPIState } from "../../store/APIState";
import RecipeDetails from "./RecipeDetails";
import { useLocation, useNavigate } from "react-router-dom";


const RatingStars = () => {
    const { state: recipe } = useLocation();
    const roundedRating = Math.round(recipe.avgRating);
    const stars = Array.from({ length: roundedRating }, (_, index) => (
        <FaStar key={index} className="star-icon" />
    ));

  return (
    <div>Rating:{stars}</div>
  )
}

export default RatingStars