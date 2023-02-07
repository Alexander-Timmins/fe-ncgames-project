import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview, getReviews } from '../utils/api';
import Comments from './Comments';
import { Link } from 'react-router-dom';

function Reviews() {
  const [review, setReview] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { review_Id } = useParams();
  console.log(reviews.length);
  useEffect(() => {
    getReview(review_Id).then((reviewFromAPI) => {
      setReview([reviewFromAPI]);
    });
  }, [review_Id]);

  useEffect(() => {
    getReviews().then((reviewsFromAPI) => {
      console.log(reviewsFromAPI);
      setReviews(reviewsFromAPI);
    });
  }, []);

  return (
    <div className='SingleReview'>
      {review.map((review) => (
        <div className='Review' key={review.review_id}>
          <h2 className='reviewTitle'>{review.title} </h2>
          <div className='imageSection'>
            <Link
              className='Nav_link'
              to={`/review/${
                +review_Id - 1 == 0 ? reviews.length : +review_Id - 1
              }`}
            >
              <img
                className='ArrowButton'
                src='https://toppng.com/uploads/preview/arrow-pointing-to-the-left-115501167743epfu1fapc.png'
              ></img>
            </Link>
            <img
              className='reviewImg'
              src={review.review_img_url}
              alt={review.review_body}
            ></img>
            <Link
              className='Nav_link'
              to={`/review/${
                +review_Id + 1 > reviews.length ? 1 : +review_Id + 1
              }`}
            >
              <img
                className='ArrowButton'
                src='https://www.pngfind.com/pngs/m/302-3023323_arrow-pointing-to-right-comments-right-arrow-png.png'
              ></img>
            </Link>
          </div>
          <h2 className='reviewOwner'>{review.owner} </h2>
          <h3 className='reviewBody'>{review.review_body}</h3>
          <h3 className='reviewUpvotes'>Upvotes: {review.votes}</h3>
        </div>
      ))}
      <div className='CommentsBox'>
        <Comments />
      </div>
    </div>
  );
}

export default Reviews;
