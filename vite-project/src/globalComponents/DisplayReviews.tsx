import React, { useEffect, useState } from "react";
import { useAPIState } from "../store/APIState";
import { reviewInterface } from "../Types";

interface DisplayReviewsProps {
  recipeID: string;
}

const DisplayReviews = (props: DisplayReviewsProps) => {
 
  const {fetchReviews, reviewList} = useAPIState()
  //const [reviews, setReviews] = useState<reviewInterface[]>([]);

  useEffect(() => {
    fetchReviews(props.recipeID);
    console.log("FETCH REVIEWS TEST")
    
  }, []);
  // const updateReviews = async () => {
  //   const tempReviews = await fetchReviews(props.recipeID);
  //   setReviews(tempReviews);
  // };
 
  return (
    <>
      <div>
        
        {reviewList.map((review, index) => (
          <div key={index} style={{border: "solid"}}>
            <div>{review.name}</div> 
            <div>{review.comment}</div> 
            <div>{review.createdAt?.slice(0, 10)}</div> 
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayReviews;
