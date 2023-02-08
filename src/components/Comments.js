import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments, voteCommentFunc } from '../utils/api';

function Comments() {
  const [comments, setComments] = useState([]);
  const [errors, setErrors] = useState(false);
  const [currentComment, setCurrentComment] = useState([]);
  const [vote, setVote] = useState(false);

  const { review_Id } = useParams();

  useEffect(() => {
    getComments(review_Id).then((commentsFromAPI) => {
      setComments(commentsFromAPI);
    });
  }, [review_Id]);

  function upvote(comment) {
    console.log('vote');
    if (vote === false) {
      voteCommentFunc(comment.comment_id, 1)
        .then(() => {
          setVote(true);
          setErrors(false);
          comment.votes++;
        })
        .catch((err) => {
          comment.votes--;
          console.log(err);
          setVote(false);
          setErrors(true);
        });
    } else {
      voteCommentFunc(comment.comment_id, -1)
        .then(() => {
          setVote(false);
          setErrors(false);
          comment.votes--;
        })
        .catch((err) => {
          comment.votes++;
          console.log(err);
          setVote(true);
          setErrors(true);
        });
    }
  }

  return (
    <div className='Comments'>
      <h1 className='CommentTitle'>Comments</h1>
      {comments.map((comment) => (
        <ol key={comment.comment_id}>
          <h2 className='CommentAuthor'>{comment.author}</h2>
          <h3 className='CommentBody'>{comment.body}</h3>
          <h3 className='CommentVotes'>
            <img
              onClick={function () {
                upvote(comment);
              }}
              className='ThumbsUp'
              src='https://png.pngtree.com/png-vector/20210629/ourlarge/pngtree-red-youtube-like-button-png-image_3538748.jpg'
            ></img>
            {comment.votes} {errors ? <div>Try again later</div> : <div></div>}
          </h3>
        </ol>
      ))}
    </div>
  );
}

export default Comments;
