import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CommonBar from './CommonBar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Shop from './Shop';
import ContactUs from './ContactUs';
import './Css/FrontPage.css';
import ShopOutlet from './ShopOutlet';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Login from './Login';

const CartContext = createContext({});
const CartCountContext = createContext(0);

function App() {
    document.title = "E-Commerce";
    const [cart, SetCart] = useState([]);
    const [cartCount, SetCartCount] = useState(0);

    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = "https://www.chatbase.co/embed.min.js";
        script1.defer = true;
        script1.setAttribute("chatbotId", "04JW2eZ8Say945JYWqgb0");
        script1.setAttribute("domain", "www.chatbase.co");

        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.embeddedChatbotConfig = {
                chatbotId: "04JW2eZ8Say945JYWqgb0",
                domain: "www.chatbase.co"
            };
        `;

        document.body.appendChild(script1);
        document.body.appendChild(script2);

        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        };
    }, []);

    return (
        <>
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
                            <Route path="/Login" element={<Login />} />
                        </Routes>
                    </BrowserRouter>
                </CartCountContext.Provider>
            </CartContext.Provider>
            <iframe
                src="https://www.chatbase.co/chatbot-iframe/04JW2eZ8Say945JYWqgb0"
                title="Chatbot"
                width="0%"
                style={{ height: '0%', minHeight: '0px' }} // Ensure correct dimensions as per your requirement
                frameBorder="0" // Correct attribute name
            ></iframe>
        </>
    );
}

export { CartContext, CartCountContext };
export default App;
