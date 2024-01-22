import React, { useState, useEffect, useContext } from 'react';
import './Css/Cart.css';
import { CartContext } from './FrontPage.jsx';
import { CartCountContext } from './FrontPage.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfo, faShield } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  const { cart, SetCart } = useContext(CartContext);
  const { cartCount, SetCartCount } = useContext(CartCountContext);
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [discount, SetDiscount] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resolve) => resolve.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  // Item quantity handling
  const btnClicked = (e, ItemID, count, operator) => {
    e.preventDefault();
    const updatedCartData = cartData.map(item => {
      if (item.id === ItemID) {
        const newCount = (operator === '+') ? item.count + 1 : item.count - 1;
        return { ...item, count: newCount };
      }
      return item;
    });

    setCartData(updatedCartData);

    if (operator == "+") {
      const tempPlus = parseInt(cartCount) + 1;
      localStorage.setItem('CartCount', JSON.stringify(tempPlus));
      SetCartCount(tempPlus);

      const updatedCart = [...cart, ItemID];
      localStorage.setItem('CartItems', JSON.stringify(updatedCart));
      SetCart(updatedCart);
    } else {
      const tempMinus = parseInt(cartCount) - 1;
      localStorage.setItem('CartCount', JSON.stringify(tempMinus));
      SetCartCount(tempMinus)

      const indexOfItemToRemove = cart.indexOf(ItemID);
      if (indexOfItemToRemove !== -1) {
        const updatedCart = [...cart.slice(0, indexOfItemToRemove), ...cart.slice(indexOfItemToRemove + 1)];
        localStorage.setItem('CartItems', JSON.stringify(updatedCart));
        SetCart(updatedCart);
      }
    }
  };

  // Remove item from cart
  const RemoveItem = (ItemId, count) => {
    const tempCount = parseInt(cartCount) - count;
    localStorage.setItem('CartCount', JSON.stringify(tempCount));
    SetCartCount(tempCount)
    const updatedCart = cart.filter((item) => item !== ItemId);
    localStorage.setItem('CartItems', JSON.stringify(updatedCart));
    SetCart(updatedCart);
  }

  // Date Handling
  const calculateDeliveryDate = (ID) => {
    const currentDate = new Date();
    const deliveryDate = new Date(currentDate);
    deliveryDate.setDate(currentDate.getDate() + (ID % 2 === 0 ? 3 : 4));
    const options = { day: 'numeric', month: 'short', weekday: 'short' };
    return deliveryDate.toLocaleDateString(undefined, options);
  };

  // Cart Item handling
  const countOccurrences = (itemId) => {
    return cart.reduce((count, cartItemId) => {
      return cartItemId === itemId ? count + 1 : count;
    }, 0);
  };
  useEffect(() => {
    const uniqueCart = [...new Set(cart)];
    const cartData = uniqueCart.map((itemID) => {
      const tempData = data.find((item) => item.id == itemID);
      const count = countOccurrences(itemID);
      return { ...tempData, count };
    })

    setCartData(cartData);
  }, [cart, data]);

  // To get Cart Count
  useEffect(() => {
    const storedCartCount = JSON.parse(localStorage.getItem('CartCount')) || 0;
    SetCartCount(storedCartCount);
  }, [SetCartCount]);

  // To get Cart Data
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('CartItems')) || [];
    SetCart(storedCartItems);
  }, [SetCart]);

  // Pricing item
  const PriceItem = () => {
    const calculateDiscount = (total) => {
      if (total <= 250) {
        return total * 0.15;
      } else if (total > 250 && total <= 400) {
        return total * 0.08;
      } else if (total > 440 && total <= 700) {
        return total * 0.19;
      } else if (total > 700 && total <= 1000) {
        return total * 0.25;
      } else {
        return total * 0.3;
      }
    };

    const totalPrice = cartData.reduce((total, item) => {
      const itemTotal = item.price * item.count;
      return total + itemTotal;
    }, 0);

    const tempDiscount = calculateDiscount(totalPrice);

    useEffect(() => {
      SetDiscount(tempDiscount.toFixed(2));
    }, [tempDiscount]);

    return totalPrice.toFixed(2);
  };


  return (
    <div className='CartLayout'>
      <ul className='CartItemDetail'>
        {cartData && cartData.map((item, index) => (
          <li key={index}>
            <div className='CartItemDetailLeft'>
              <div className='CartItemDetailLeftChild'>
                <img src={item.image} alt={item.title} />
              </div>
              <div className='CartItemDetailRightChild'>
                <h1>{item.title}</h1>
                <h2>$&nbsp;{item.price}</h2>
              </div>
            </div>
            <div className='CartItemDetailMid'>
              {item.count === 1 ? (
                <button disabled value="-">
                  -
                </button>
              ) : (
                <button onClick={(e) => btnClicked(e, item.id, item.count, "-")}>
                  -
                </button>
              )}
              <input type="text" value={countOccurrences(item.id)} disabled />
              {item.count === 99 ? (
                <button disabled value="+">
                  +
                </button>
              ) : (
                <button onClick={(e) => btnClicked(e, item.id, item.count, "+")}>
                  +
                </button>
              )}
            </div>
            <div className='CartItemDetailRight'>
              <h2 className='date'>Delivery by {calculateDeliveryDate(item.id)}</h2>
              <button onClick={() => RemoveItem(item.id, item.count)} className="button-pushable" role="button">
                <span className="button-shadow"></span>
                <span className="button-edge"></span>
                <span className="button-front text">
                  Remove Item
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className='PriceDetails'>
        <div className='ItemPrice'>
          <h1>PRICE DETAILS</h1>
          <div className='Price'>
            <h1>Price ({cartCount} item)</h1>
            <h2>${PriceItem()}</h2>
          </div>
          <div className='DiscountPrice'>
            <h1>Discount</h1>
            <h2>-${discount}</h2>
          </div>
          <div className='DeliveryPrice'>
            <h1>Delivery Charges&nbsp;<FontAwesomeIcon title='Get Free Delivery On Order Above $250' icon={faInfo}/></h1>
            {(Number(PriceItem()) <= 250) ? (
              <h2>$5</h2>
            ) : (
              <h2>
                <span className='underLine'>$5</span>&nbsp;
                <span className='GreenColor'>Free</span>
              </h2>
            )}
          </div>
          <div className='TotalPrice'>
            <h1>Total Amount</h1>
            <h2>$ {(Number(PriceItem()) <= 250) ? (Number(PriceItem())-discount+5).toFixed(2) :(Number(PriceItem())-discount).toFixed(2)}</h2>
          </div>
          <div className='PriceHighlights'>
            <h1>You will save ${discount} on this order</h1>
          </div>
        </div>
        <div className='PlaceOrder'>
          <button>Place Order</button>
          <div className='ExtraDetails'>
            <div className='ShieldCheck'>
              <FontAwesomeIcon icon={faShield} />
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <p>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
