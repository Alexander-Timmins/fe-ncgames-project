import { Link } from 'react-router-dom';

function Navbar(user) {
  return (
    <nav className='Navbar'>

      <Link className='review_link' to='/reviews'>
        Reviews
      </Link>
      <Link className='users_link' to='/users'>
        Users
      </Link><h3 className="LoggedIn">Logged in as : {user.user}</h3>
      
    </nav>
  );
}

export default Navbar;
