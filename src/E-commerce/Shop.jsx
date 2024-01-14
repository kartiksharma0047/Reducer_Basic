import React, { useState, useEffect } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import "./Css/Shop.css";

function Shop() {
  const [data, setData] = useState([]);
  const [sets, setsData] = useState(new Set());
  const { categories } = useParams();

  useEffect(() => {
    if (categories) {
      fetch(`https://fakestoreapi.com/products/category/${categories}`)
        .then((resolve) => resolve.json())
        .then((data) => {
          setData(data);
        });
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((resolve) => resolve.json())
        .then((data) => {
          setData(data);
          const categories = new Set(data.map(item => item.category));
          setsData(categories);
        });
    }
  }, [categories]);

  function truncate(text) {
    let length = 50;
    if (text.length <= 50) {
      return text;
    } else {
      return text.slice(0, length) + "...";
    }
  }

  return (
    <div className='ShopLayout'>
      <ul className='ItemCategories'>
        {Array.from(sets).map((item) => (
          <li key={item}>
            <NavLink to={`/Shop/${item}`} activeclassname="ActiveCategories">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className='ItemList'>
        {data.map((item) => (
          <li title={item.title} key={item.id}>
            <Link to={`/Shop/product/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h1>{truncate(item.title)}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
