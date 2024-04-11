import React, { startTransition } from 'react'
import { FaStar } from "react-icons/fa";
import { useAPIState } from "../../../store/APIState";
import RecipeDetails from "../RecipeDetails";
import { useLocation, useNavigate } from "react-router-dom";

const RatingStars = () => {
  const { state: recipe } = useLocation();
  const roundedRating = Math.round(recipe.avgRating);

  return (
    <div>
      <div style={{ display: 'inline-block' }}>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            color={index < roundedRating ? 'yellow' : 'gry'}
            className="star-icon"
          />
        ))}
      </div>
      <span style={{ marginLeft: '5px' }}>Rating: {roundedRating}</span>
    </div>
  );
};

export default RatingStars;