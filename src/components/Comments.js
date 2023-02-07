import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from '../utils/api';

function Comments() {
  const [comments, setComments] = useState([]);

  const { review_Id } = useParams();

  useEffect(() => {
    getComments(review_Id).then((commentsFromAPI) => {
      setComments(commentsFromAPI);
    });
  }, [review_Id]);

  console.log(comments);

  return (
    <div className="Comments">
        <h1 className="CommentTitle">Comments</h1>
      {comments.map((comment) => (
        <ul key={comment.comment_id}>
            <h2 className="CommentAuthor">{comment.author}</h2>
          <h3 className="CommentBody">{comment.body}</h3>
          <h3 className="CommentVotes"><img className="ThumbsUp" src="http://clipart-library.com/new_gallery/4-46046_graphic-techflourish-collections-yellow-thumbs-up-emoji-android.png"></img> {comment.votes}</h3>
        </ul>
      ))}
    </div>
  );
}

export default Comments;
