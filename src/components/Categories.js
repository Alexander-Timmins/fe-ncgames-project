import { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';

function Categories({setCategory}) {

    const [categories, setCategories] =useState([])
    console.log(categories)
    useEffect(() => {
        getCategories().then((data) => {
          setCategories(data.categories);
        });
      }, []);

    return (
        <div className="CategoryList">
          <img className="EachCategory" onClick={function () {setCategory('')}} src='https://www.freeiconspng.com/uploads/home-button-icon-png-23.png'></img>
            {categories.map((category) => (
                <ul onClick={function () {setCategory(category.slug)}} className="EachCategory" key={Math.random()}>{category.slug.charAt(0).toUpperCase() + category.slug.slice(1).replace(/-/g, ' ')}</ul>
            ))}

        </div>
        
    )
}

export default Categories