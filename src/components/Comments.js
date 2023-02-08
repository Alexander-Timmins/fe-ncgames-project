import { useEffect, useState } from 'react';
import NewComment from './NewComment';
import { useParams } from 'react-router-dom';
import { getComments, voteCommentFunc } from '../utils/api';

function Comments() {
  const [comments, setComments] = useState([]);
  const [errors, setErrors] = useState(false);
  const [hasVoted, setVote] = useState(false);

  const { review_Id } = useParams();

  useEffect(() => {
    getComments(review_Id).then((commentsFromAPI) => {
      commentsFromAPI.reverse();
      setComments(commentsFromAPI);
    });
  }, [review_Id]);

  function upvote(comment) {
    if (hasVoted) {
      voteCommentFunc(comment.comment_id, -1)
        .then(() => {
          comment.votes--;
          setVote(false);
          setErrors(false);
        })
        .catch((err) => {
          comment.votes++;
          console.log(err);
          setVote(true);
          setErrors(true);
        });
    } else {
      voteCommentFunc(comment.comment_id, 1)
        .then(() => {
          comment.votes++;
          setVote(true);
          setErrors(false);
        })
        .catch((err) => {
          comment.votes--;
          console.log(err);
          setVote(false);
          setErrors(true);
        });
    }
  }

  return (
    <div className='Comments'>
      <div>
        <NewComment comments={comments} setComments={setComments} />
      </div>

      <h1 className='CommentTitle'>Comments</h1>
      {comments.map((comment) => (
        <ol key={comment.comment_id}>
          <div className='EachComment'>
            <h2 className='CommentAuthor'>
              <img
                className='userImgComment'
                src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
              ></img>{' '}
              {comment.author}
            </h2>
            <h3 className='CommentBody'>{comment.body}</h3>
            <h3 className='CommentVotes'>
              <img
                onClick={function () {
                  upvote(comment);
                }}
                className='ThumbsUp'
                src='https://blog.jdrgroup.co.uk/hubfs/Blog_Images/How%20To%20Use%20Social%20Media%20%E2%80%98Like%E2%80%99%20Buttons.png'
              ></img>{' '}
              {comment.votes}{' '}
              {errors ? <div>Try again later</div> : <div></div>}
            </h3>
          </div>
        </ol>
      ))}
    </div>
  );
}

export default Comments;
