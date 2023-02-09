import { useEffect, useState } from 'react';
import { getReviews } from '../utils/api';
import { Link } from 'react-router-dom';
const dayjs = require('dayjs')

function AllReviews(props) {
  const [reviews, setReviews] = useState([]);


  useEffect(() => {

    getReviews(props).then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI);
    })
  }, [props]);

  return (
    <div>
      <div className='ReviewList'>
        {reviews.map((review) => (<Link className='Nav_link' to={`/review/${review.review_id}`}>
          <div className='Reviews' key={review.review_id}>
            <h2 className='ReviewTitle'>{review.title} </h2>
            <div className='AllReviewsImageSection'>
              
                <img
                  className='AllReviewsImg'
                  src={review.review_img_url}
                  alt={review.review_body}
                ></img>
              
              <h4 key={review.created_at} className="AllReviewsDate">{dayjs(review.created_at).format('DD/MM/YYYY')}</h4>
              <h4> <img
              className='ThumbsUpAllReviews'
              src='https://blog.jdrgroup.co.uk/hubfs/Blog_Images/How%20To%20Use%20Social%20Media%20%E2%80%98Like%E2%80%99%20Buttons.png'
            ></img> {review.votes}</h4>
            </div>
          </div></Link>
        ))}
      </div>
    </div>
  );
}

export default AllReviews;
