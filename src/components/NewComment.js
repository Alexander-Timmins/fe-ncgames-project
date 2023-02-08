import { useParams } from 'react-router-dom';

function NewComment() {

  const { review_Id } = useParams();
  return (
    <div>
      <form action="/action_page.php">
<input type="text" id="NewComment" name="NewComment"></input>
<br></br>
  <input type="submit" value="Comment"></input>
   </form>
    </div>
  );
}

export default NewComment;
