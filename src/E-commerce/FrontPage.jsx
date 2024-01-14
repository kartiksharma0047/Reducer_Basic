import React from 'react'
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


function App() {
    document.title = "E-Commerce"
    return (
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
                </Route>
                <Route path='/Contact' element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;