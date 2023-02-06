import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../utils/api';

function Reviews(reviewId) {
  const [reviews, setReviews] = useState([]);

  const { review } = useParams();

  useEffect(() => {
    getReviews(review).then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI);
    });
  }, [reviewId]);


  return (
    <div className='ReviewList'>
      {reviews.map((review) => (
        <div className='Review' key={review.review_id}>
          <h2 className='reviewTitle'>{review.title} </h2>
          <img
            className='reviewImg'
            src={review.review_img_url}
            alt={review.review_body}
          ></img>
          <h2 className='reviewOwner'>{review.owner} </h2>
          <h3 className='reviewBody'>{review.review_body}</h3>
          <h3 className='reviewUpvotes'>Upvotes: {review.votes}</h3>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
