import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import DeleteButton from "../../globalComponents/DeleteButton";
import "./RecipeDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../globalComponents/NavBar";
import AddToCartButton from "../../globalComponents/Cart/AddToCartButton";
import { useAPIState } from "../../store/APIState";
import { useEffect } from "react";
import EmptyCartButton from "../../globalComponents/Cart/EmptyCartButton";
import PostReview from "../../globalComponents/PostReview";
import 'bootstrap/dist/css/bootstrap.min.css';


interface StarRatingProps {
  totalStars: number; 
  initialRating?: number; 
  onChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars, initialRating = 0, onChange }) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hover, setHover] = useState<number>(0);
  
const RecipeDetails = () => {
    const { fetchRecipe } = useAPIState();
    const { state: recipe } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        fetchRecipe(recipe._id);
    }, [fetchRecipe, recipe._id]);
  

  const handleClick = (newRating: number) => {
    setRating(newRating);
    if (onChange) {
      onChange(newRating);
    }
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={40}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
