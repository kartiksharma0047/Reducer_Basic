import React, { useState } from 'react'
import ECommerceLogo from "./Images/E commerce Logo.jpg"
import { NavLink } from 'react-router-dom'
import "./Css/CommonBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';

function CommonBar() {
    const [HamBurgerBtn,SetHamburgerBtn]=useState(true);
    const [displayNavBar,SetDisplayNavBar]=useState(true);
    const HamburgerClick=()=>{
        SetHamburgerBtn(!HamBurgerBtn);
        SetDisplayNavBar(!displayNavBar);
    }
    return (
        <nav className='NavBar'>
            <img src={ECommerceLogo} alt="" />
            <FontAwesomeIcon onClick={HamburgerClick} icon={(HamBurgerBtn)?faBars:faXmark}/>
            <ul className={`NavBarInfo ${displayNavBar?"HideNavBar":""}`}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Services">Services</NavLink></li>
                <li><NavLink to="/Shop">Shop</NavLink></li>
                <li><NavLink to="/Contact">Contact Us</NavLink></li>
                <li><NavLink to="/Login">Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default CommonBar