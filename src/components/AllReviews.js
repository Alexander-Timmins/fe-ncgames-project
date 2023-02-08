import { useEffect, useState } from 'react';
import { getReviews } from '../utils/api';
import { Link } from 'react-router-dom';

function AllReviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI);
    });
  }, []);
  return (
    <div className='ReviewList'>
      {reviews.map((review) => (
        <div className='Reviews' key={review.review_id}>
          <h2 className='ReviewTitle'>{review.title} </h2>
          <div className='AllReviewsImageSection'>
            <Link className='Nav_link' to={`/review/${review.review_id}`}>
              <img
                className='AllReviewsImg'
                src={review.review_img_url}
                alt={review.review_body}
              ></img>
            </Link>
          </div>
  
        </div>
      ))}
    </div>
  );
}

export default AllReviews;
