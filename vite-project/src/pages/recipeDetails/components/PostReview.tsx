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
    <div>
      <div>
        {/* buttons for rating*/}
        <button
          onClick={() => handleRatingButton(1)}
          disabled={isButtonDisabled}
        >
          1
        </button>
        <button
          onClick={() => handleRatingButton(2)}
          disabled={isButtonDisabled}
        >
          2
        </button>
        <button
          onClick={() => handleRatingButton(3)}
          disabled={isButtonDisabled}
        >
          3
        </button>
        <button
          onClick={() => handleRatingButton(4)}
          disabled={isButtonDisabled}
        >
          4
        </button>
        <button
          onClick={() => handleRatingButton(5)}
          disabled={isButtonDisabled}
        >
          5
        </button>
      </div>
      <div>
        {/*Input field för name */}
        <form>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="comment"
            value={comment}
            placeholder="Comment"
            onChange={handleInputChange}
          />
          <input type="button" value="Submit" onClick={handleReviewSubmit} />
        </form>
      </div>
    </div>
  );
};

export default PostReview;
