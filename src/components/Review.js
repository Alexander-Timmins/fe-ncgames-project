import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getReviews} from '../utils/api'

function Reviews(reviewId){
    const [reviews, setReviews] = useState([])
    const {review} = useParams()

    useEffect(() => {
        getReviews(review).then((reviewsFromAPI) => {
            setReviews(reviewsFromAPI)
    })
}, [reviewId])


    return(
        <div>
        <ul className='List'>
          {reviews.map((review) => (
            <p className='review' key={review.review_id}>
              {review.title} 
              <img
                className='reviewImg'
                src={review.review_img_url}
                alt={review.review_body}
              ></img>
            </p>
          ))}
        </ul>
        </div>
    )
}

export default Reviews