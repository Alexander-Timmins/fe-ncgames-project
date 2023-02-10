import { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';
import AllReviews from './AllReviews';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Categories() {
  const [categories, setCategories] = useState([]);
  const { category } = useParams();
  const [sortBy, setSortBy] = useState('created_at');
  const [orderBy, setOrderBy] = useState('asc')
  
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data.categories);
    });
  }, []);

  return (
    <div>
      <div className='CategoryList'>
        <Link to='/reviews'>
          <img
            className='EachCategory'
            alt='homebutton'
            key='AllCategories'
            src='https://www.freeiconspng.com/uploads/home-button-icon-png-23.png'
          ></img>
        </Link>
        {categories.map((category) => (
          <Link key={category.slug} to={`/reviews/${category.slug}`}>
            <ul className='EachCategory'>
              {category.slug.charAt(0).toUpperCase() +
                category.slug.slice(1).replace(/-/g, ' ')}
            </ul>
          </Link>
        ))}{' '}
        <div className='dropdown'>
          <button className='dropbtn'>Sort By</button>
          <div className='dropdown-content'>
            <a
              onClick={() => {
                setSortBy('created_at');
              }}
            >
              Date
            </a>
            <a
              onClick={() => {
                setSortBy('votes');
              }}
            >
              Votes
            </a>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropbtn'>Order in</button>
          <div className='dropdown-content'>
            <a
              onClick={() => {
                setOrderBy('asc');
              }}
            >
              Ascending
            </a>
            <a
              onClick={() => {
                setOrderBy('desc');
              }}
            >
              Descending
            </a>
          </div>
        </div>
      </div>
      <AllReviews categoryInUse={category} sortBy={sortBy} order={orderBy} />
    </div>
  );
}

export default Categories;
