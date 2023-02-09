import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Navbar'>

      <Link className='review_link' to='/reviews'>
        Reviews
      </Link>
      <Link className='users_link' to='/users'>
        Users
      </Link>
    </nav>
  );
}

export default Navbar;
