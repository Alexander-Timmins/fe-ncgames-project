import { useParams } from 'react-router-dom';
import { postComment } from '../utils/api';
import { useState } from 'react';

function NewComment({ comments, setComments }) {
  const user = 'tickle122';
  const [comment, setComment] = useState('');
  const [error, setErrors] = useState(false);
  const { review_Id } = useParams();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment[0] !== undefined) {
      postComment(review_Id, user, comment).then((response) => {
        setErrors(false);
        setComments([response.comment, ...comments]).catch((err) => {
          console.log(err);
          setComments([...comments]);
          setErrors(true);
        });
      });
    }
    setComment('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='CommentBox'
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></input>
        <button className='submitButton' type='submit'>
          Comment
        </button>
        <h1>{error ? 'Something went wrong, please try again later' : ''}</h1>
      </form>
    </div>
  );
}

export default NewComment;
