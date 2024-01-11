import { NavLink } from "react-router-dom";
import React from "react";
import "./CSS/Display.css";
import "./Home";
function Layout(){
    document.title="Stock Exchange";
    return(
        <>
        <div className="Head">
            <h1>Stock Trade</h1>
            <ul className="Headinfo">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
        </div>
        </>
    )
}
export default Layout;