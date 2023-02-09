import { useEffect, useState } from 'react';
import { getReviews } from '../utils/api';
import { Link } from 'react-router-dom';
import Categories from './Categories';

function AllReviews() {
  const [reviews, setReviews] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    getReviews().then((reviewsFromAPI) => {
      if (category === '') {
        setReviews(reviewsFromAPI);
      } else {
        let reviewsByCategory = reviewsFromAPI.filter(
          (review) => review.category === category
        );
        setReviews(reviewsByCategory);
      }
    });
  }, [category]);

  return (
    <div>
      <div className='CategoryList'>
        <Categories setCategory={setCategory} />
      </div>
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
    </div>
  );
}

export default AllReviews;
