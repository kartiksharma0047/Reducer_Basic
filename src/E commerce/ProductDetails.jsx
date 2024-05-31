import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./Css/ProductDetails.css";
import { CartContext } from './FrontPage.jsx'
import { CartCountContext } from './FrontPage.jsx';

function ProductDetails() {
    const id = useParams();
    const ID = id.id;
    const [data, SetData] = useState();
    const [NullProduct, setNullProduct] = useState(null);
    const { cart, SetCart } = useContext(CartContext);
    const { cartCount, SetCartCount } = useContext(CartCountContext);

    useEffect(() => {
        const storedCartCount = JSON.parse(localStorage.getItem('CartCount')) || 0;
        SetCartCount(storedCartCount);
    }, [SetCartCount]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('CartItems')) || [];
        SetCart(storedCartItems);
    }, [SetCart]);

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
        fetch(`https://fakestoreapi.com/products/${ID}`)
            .then((resolve) => resolve.json())
            .then((data) => {
                SetData(data);
                setNullProduct(data);
            });
    }, []);
    if (!NullProduct) {
        return <div className='Loading'>Loading...</div>
    }
    return (
        <div className='productDetails'>
            <div className='DetailsLeft'>
                <img src={data.image} alt="" />
            </div>
            <div className='DetailsRight'>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <h3>Price : <span>{data.price}$</span></h3>
                <button onClick={(e) => AddToCart(e, data.id)}>Add To Cart</button>
            </div>
            <Link className='cartIcon' to={'/Shop/Cart'}>
                <FontAwesomeIcon icon={faCartShopping} />
                <p className='cartCount'>{cartCount}</p>
            </Link>
        </div>
    )
}

export default ProductDetails