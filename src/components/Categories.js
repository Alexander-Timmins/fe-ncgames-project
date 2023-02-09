import { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';
import AllReviews from './AllReviews';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Categories() {
  const [categories, setCategories] = useState([]);
  const { category } = useParams();

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
            className='EachCategory' key="AllCategories"
            src='https://www.freeiconspng.com/uploads/home-button-icon-png-23.png'
          ></img>
        </Link>
        {categories.map((category) => (
          <Link key={category.slug} to={`/reviews/${category.slug}`}>
            <ul className='EachCategory' >
              {category.slug.charAt(0).toUpperCase() +
                category.slug.slice(1).replace(/-/g, ' ')}
            </ul>
          </Link>
        ))}
      </div>
      <AllReviews categoryInUse={category} />
    </div>
  );
}

export default Categories;