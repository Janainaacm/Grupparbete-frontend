import React, { useEffect, useState } from "react";
import { useAPIState } from "../../../store/APIState";
import { reviewInterface } from "../../../Types";
import "./DisplayReviews.css"

const DisplayReviews = () => {
  const { recipeID, currentRecipe, fetchReviews, reviewList } = useAPIState();


  return (
    <div className="reviews-list-container">
      <div className="reviews-list">
      {reviewList.map((review, index) => (
          <div key={index} className="review-list-item">
            <div className="review-list-name-div">
              <p  className="review-list-name">{review.name}</p>
              </div>
            <div className="review-list-comment-div">
              <p className="review-list-comment">{review.comment}</p>
              </div>
            <div className="review-list-date-div">
              <p className="review-list-date">{review.createdAt?.slice(0, 10)}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayReviews;
