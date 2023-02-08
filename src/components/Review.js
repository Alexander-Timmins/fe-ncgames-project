import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview, getReviews, voteReviewFunc } from '../utils/api';
import Comments from './Comments';
import { Link } from 'react-router-dom';

function Reviews() {
  const [review, setReview] = useState({});
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const [vote, setVote] = useState(false);
  const { review_Id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReview(review_Id).then((reviewFromAPI) => {
      setReview(reviewFromAPI);
      setIsLoading(false);
    });
  }, [review_Id]);

  useEffect(() => {
    getReviews().then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI);
    });
  }, []);

  const upvote = () => {
    if (vote === false) {
      voteReviewFunc(review_Id, 1)
        .then(() => {
          setVote(true);
          setErrors(false);
          review.votes++;
        })
        .catch((err) => {
          review.votes--;
          console.log(err);
          setVote(false);
          setErrors(true);
        });
    } else {
      voteReviewFunc(review_Id, -1)
        .then(() => {
          setVote(false);
          setErrors(false);
          review.votes--;
        })
        .catch((err) => {
          review.votes++;
          console.log(err);
          setVote(true);
          setErrors(true);
        });
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className='SingleReview'>
      {
        <div className='Review' key={review.review_id}>
          <h2 className='reviewTitle'>{review.title} </h2>
          <div className='imageSection'>
            <Link
              className='Nav_link'
              to={`/review/${
                +review_Id - 1 === 0 ? reviews.length : +review_Id - 1
              }`}
            >
              <img
                className='ArrowButton'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Eo_circle_red_arrow-left.svg/512px-Eo_circle_red_arrow-left.svg.png?20200417173028'
              ></img>
            </Link>
            <img
              className='ReviewImg'
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
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Eo_circle_red_arrow-right.svg/2048px-Eo_circle_red_arrow-right.svg.png'
              ></img>
            </Link>
          </div>
          <h2 className='reviewOwner'>{review.owner} </h2>
          <h3 className='reviewBody'>{review.review_body}</h3>
          <h3 className='CommentVotes'>
            <img
              onClick={upvote}
              className='ThumbsUp'
              src='https://blog.jdrgroup.co.uk/hubfs/Blog_Images/How%20To%20Use%20Social%20Media%20%E2%80%98Like%E2%80%99%20Buttons.png'
            ></img>{' '}
            {review.votes} {errors ? <div>Try again later</div> : <div></div>}
          </h3>
        </div>
      }
      <div className='CommentsBox'>
        <Comments />
      </div>
    </div>
  );
}

export default Reviews;
