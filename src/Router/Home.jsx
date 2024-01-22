import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
function Home() {
    document.title="Stock Exchange";
    return (
        <>
            <div className="info-home">
                <h1>Trading Platform</h1>
                <p>Easily invest in stocks and crypto in Stock Trade platform</p>
                <div className="data">
                    <Link to="/Log-in">Log-in</Link>
                    <Link to="/Sign-in">Sign-up</Link>
                </div>
            </div>
            <div className="home-end">
                <div className="Query">
                    <ul>
                        <li><Link to=""><FontAwesomeIcon icon={faInstagram} /></Link></li>
                        <li><Link to=""><FontAwesomeIcon icon={faFacebook} /></Link></li>
                        <li><Link to=""><FontAwesomeIcon icon={faYoutube} /></Link></li>
                        <li><Link to=""><FontAwesomeIcon icon={faTwitter} /></Link></li>
                        <li><Link to=""><FontAwesomeIcon icon={faTelegram} /></Link></li>
                    </ul>
                    <div>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/about">About Us</Link>
                    </div>
                </div>
                <h2>Copyright StockTrade.Co.in</h2>
                <p>StockTrade@gmail.com</p>
            </div>
        </>
    )
}
export default Home;