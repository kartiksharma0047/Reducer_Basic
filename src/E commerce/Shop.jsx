import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./Css/Shop.css";
import { CartContext } from './FrontPage.jsx'
import { CartCountContext } from './FrontPage.jsx';

function Shop() {
  const [data, setData] = useState([]);
  const [sets, setsData] = useState(new Set());
  const { categories } = useParams();
  const { cart, SetCart } = useContext(CartContext);
  const {cartCount, SetCartCount} = useContext(CartCountContext);


  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('CartItems')) || [];
    SetCart(storedCartItems);
  }, [SetCart]);

  useEffect(() => {
    const storedCartCount = JSON.parse(localStorage.getItem('CartCount')) || 0;
    SetCartCount(storedCartCount);
  }, [SetCartCount]);

const AddToCart = (e, productId) => {
  e.preventDefault();
  SetCartCount((prevCount) => {
    const newCount = prevCount + 1;
    localStorage.setItem('CartCount', JSON.stringify(newCount));
    return newCount;
  });
  SetCart((prevCart) => {
    const newCart = [...prevCart, productId];
    localStorage.setItem("CartItems", JSON.stringify(newCart));
    return newCart;
  });
};

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
    let length = 18;
    if (text.length <= 18) {
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
      <Link className='cartIcon' to={'/Shop/Cart'}>
        <FontAwesomeIcon icon={faCartShopping} />
        <p className='cartCount'>{cartCount}</p>
      </Link>
      <ul className='ItemList'>
        {data.map((item) => (
          <li title={item.title} key={item.id}>
            <Link to={`/Shop/product/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h1>{truncate(item.title)}</h1>
              <button onClick={(e) => AddToCart(e, item.id)}>Add To Cart</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
