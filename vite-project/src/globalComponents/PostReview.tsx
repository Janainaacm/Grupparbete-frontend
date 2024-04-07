import React, { useState } from "react";
import { useAPIState } from "../store/APIState";
import { commentInterface } from "../Types";

interface PostReviewProps {
  recipeId: string
}

const PostReview = ({recipeId}: PostReviewProps) => {
  const { postComment, postRating } = useAPIState();
  const [rating, setRating] = useState<number>();
  const [name, setName] = useState<string>();
  const [comment, setComment] = useState<string>();


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    if (name === 'name') {
    setName(value)
  } else if (name === 'comment') {
    setComment(value)
  }
    
  }
  
  const handleSubmit = async () => {
    
    if (rating !== undefined) {
     postRating(recipeId,rating)
    }
  }
 
  console.log("Rating: ",rating)
  console.log("setName: ",name)
  console.log("setComment", comment)


  return (
    <div>
      <div>
        {/* buttons for rating*/}
        <button onClick={() => setRating(1)}>1</button>
        <button onClick={() => setRating(2)}>2</button>
        <button onClick={() => setRating(3)}>3</button>
        <button onClick={() => setRating(4)}>4</button>
        <button onClick={() => setRating(5)}>5</button>
      </div>
      <div>
        {/*Input field för name */}
        <form>
          <input type="text" name="name" value={name} placeholder="Name" onChange={handleInputChange} />
          <input type="text" name="comment" value={comment} placeholder="Comment" onChange={handleInputChange} />
          <input type="button" value="Submit" onClick={handleSubmit}/>
        </form>
      </div>
    </div>
  );
};

export default PostReview;
