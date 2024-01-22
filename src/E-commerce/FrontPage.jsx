import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CommonBar from './CommonBar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Shop from './Shop';
import ContactUs from './ContactUs'
import "./Css/FrontPage.css"
import ShopOutlet from './ShopOutlet';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import { createContext } from 'react';
const CartContext = createContext({});
const CartCountContext = createContext(0);


function App() {
    document.title = "E-Commerce"
    const [cart, SetCart] = useState([]);
    const [cartCount, SetCartCount] = useState(0);
    return (
        <CartContext.Provider value={{ cart, SetCart }}>
            <CartCountContext.Provider value={{ cartCount, SetCartCount }}>
                <BrowserRouter>
                    <CommonBar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Services' element={<Services />} />
                        <Route path='/Shop' element={<ShopOutlet />}>
                            <Route path='Product/:id' element={<ProductDetails />} />
                            <Route index element={<Shop />} />
                            <Route path=':categories' element={<Shop />} />
                            <Route path='Cart' element={<Cart />} />
                        </Route>
                        <Route path='/Contact' element={<ContactUs />} />
                    </Routes>
                </BrowserRouter>
            </CartCountContext.Provider>
        </CartContext.Provider>
    )
}
export { CartContext };
export {CartCountContext};
export default App;