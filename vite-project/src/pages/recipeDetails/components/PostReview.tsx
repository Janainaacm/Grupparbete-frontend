import React, { useState } from "react";
import { useAPIState } from "../../../store/APIState";
import { reviewInterface } from "../../../Types";

interface PostReviewProps {
  recipeId: string;
  recipeName: string;
}

const PostReview = (props: PostReviewProps) => {
  //const [rating, setRating] = useState<number>();
  const { postReview, postRating } = useAPIState();
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "comment") {
      setComment(value);
    }
  };

  const handleReviewSubmit = async () => {
    if (name !== "" && comment !== "") {
      postReview(props.recipeId, name, comment);
      setName("");
      setComment("");
    } else {
      alert("Fill out both name and comment to submit your review.");
    }
  };

  const handleRatingButton = async (rating: number) => {
    postRating(props.recipeId, rating);
    setIsButtonDisabled(true);
  };

  //console.log("Rating: ", rating);
  // console.log("setName: ", name);
  // console.log("setComment", comment);

  return (
    <div className="recipe-rating-review-container">
      <div className="recipe-rating-rating-container">
        <div className="recipe-submit-rating-wrapper">
          <p className="recipe-submit-rating-title">
            Hur skulle du betygsätta {props.recipeName}?
          </p>
          <div className="recipe-submit-rating-stars-container">
            <div className="recipe-submit-rating-stars">
              <button
                onClick={() => handleRatingButton(1)}
                disabled={isButtonDisabled}
              >
                ★
              </button>
              <button
                onClick={() => handleRatingButton(2)}
                disabled={isButtonDisabled}
              >
                ★
              </button>
              <button
                onClick={() => handleRatingButton(3)}
                disabled={isButtonDisabled}
              >
                ★
              </button>
              <button
                onClick={() => handleRatingButton(4)}
                disabled={isButtonDisabled}
              >
                ★
              </button>
              <button
                onClick={() => handleRatingButton(5)}
                disabled={isButtonDisabled}
              >
                ★
              </button>
            </div>
          </div>
          <button className="submit-rating-button-div">
            <span className="submit-rating-button">SKICKA</span>
          </button>
        </div>
      </div>

      <div className="submit-review-field">
        <h3 className="submit-review-title">Lämna ett omdöme</h3>
        <div className="submit-review-form-container">
          <div className="submit-review-form">
            <form>
              <div className="submit-review-form-name-div">
              <input
                className="submit-review-form-name"
                type="text"
                name="name"
                value={name}
                placeholder="Namn"
                onChange={handleInputChange}
              />
              </div>
              <div className="submit-review-form-input-div">
              <input
                className="submit-review-form-input"
                type="text"
                name="comment"
                value={comment}
                placeholder="Kommentar"
                onChange={handleInputChange}
              />
              </div>
            </form>
          </div>
          <div className="submit-review-form-button-div">
                <button
                  className="submit-review-form-button"
                  type="button"
                  value="Submit"
                  onClick={handleReviewSubmit}
                >
                  <span className="submit-review-button-text">SKICKA</span>
                </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default PostReview;
