function Home() {
  return (
    <div className='Home'>
      <h2>
        <p>
          Hello and welcome to my Northcoders project. This app is designed to
          showcase exactly what I am capable of creating using backend JS and
          front end react, JSX, CSS and HTML. The following will give a brief
          idea of how to navigate the app and use its functions.
        </p>
        <p className='Instructions'>
          <li>
            Clicking the logo at the top of the screen will return you to this
            page
          </li>
          <li>
            Click on reviews in the navigation bar to see an overview of all
            reviews in the API
          </li>
          <li>
            Click on users in the navigation bar to see a portfolio of all users
            found in the API
          </li>
          <li>
            Inside of reviews you are able to click on any of the categories
            shown under the navigation bar to view only the reviews of the given
            category
          </li>
          <li>
            You are also able to sort the reviews via the sorting options found
            to the right of the category list
          </li>
          <li>
            Clicking on any of the reviews will then open a new page relating to
            that specific review and the comments that have been left for that
            review
          </li>
          <li>
            You are able to swap between the reviews using the arrow buttons
            next to the review image, or return to the review list using the Nav
            bar
          </li>
          <li>
            Inside each review you are able to leave comments, upvote both
            reviews and comments and delete comments
          </li>
          <li>
            When leaving a comment the API will automatically assign which ever
            user you are logging in as as the owner of the comment
          </li>
          <li>
            Inside the users page you are able to log in as a different user
          </li>
        </p>
      </h2>
    </div>
  );
}

export default Home;
