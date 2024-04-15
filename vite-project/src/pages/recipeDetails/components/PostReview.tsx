import React, { useState } from "react";
import { useAPIState } from "../../../store/APIState";
import { reviewInterface } from "../../../Types";

interface PostReviewProps {
  recipeId: string;
  recipeName: string;
  recipeName: string;
}

const PostReview = (props: PostReviewProps) => {
  //const [rating, setRating] = useState<number>();
  const { postReview, postRating } = useAPIState();
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [chosenRating, setChosenRating] = useState(0);

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
    setChosenRating(0);
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
            <div className="star-ratings-container">
              <div className="star-ratings-items">
                <input
                  type="radio"
                  name="ratings-stars"
                  id="st5"
                  onClick={() => setChosenRating(5)}
                  disabled={isButtonDisabled}
                />
                <label htmlFor="st5">
                  <div className="ratings-star-stroke">
                    <div className="ratings-star-fill" />
                  </div>
                </label>

                <input
                  type="radio"
                  name="ratings-stars"
                  id="st4"
                  onClick={() => setChosenRating(4)}
                  disabled={isButtonDisabled}
                />
                <label htmlFor="st4">
                  <div className="ratings-star-stroke">
                    <div className="ratings-star-fill" />
                  </div>
                </label>

                <input
                  type="radio"
                  name="ratings-stars"
                  id="st3"
                  onClick={() => setChosenRating(3)}
                  disabled={isButtonDisabled}
                />
                <label htmlFor="st3">
                  <div className="ratings-star-stroke">
                    <div className="ratings-star-fill" />
                  </div>
                </label>

                <input
                  type="radio"
                  name="ratings-stars"
                  id="st2"
                  onClick={() => setChosenRating(2)}
                  disabled={isButtonDisabled}
                />
                <label htmlFor="st2">
                  <div className="ratings-star-stroke">
                    <div className="ratings-star-fill" />
                  </div>
                </label>

                <input
                  type="radio"
                  name="ratings-stars"
                  id="st1"
                  onClick={() => setChosenRating(1)}
                  disabled={isButtonDisabled}
                />
                <label htmlFor="st1">
                  <div className="ratings-star-stroke">
                    <div className="ratings-star-fill" />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <button 
          className="submit-rating-button-div"
          onClick={() => handleRatingButton(chosenRating)}>
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
