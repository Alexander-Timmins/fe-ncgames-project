import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Navbar'>
      <Link className='Nav_link' to='/'>
        Home
      </Link>
      <Link className='Nav_link' to='/review'>
        Reviews
      </Link>
      <Link className='Nav_link' to='/users'>
        Users
      </Link>
    </nav>
  );
}

export default Navbar;
