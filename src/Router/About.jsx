import React from "react";
import "./CSS/About.css";
function About(){
    document.title="About - Stock Exchange";
    return(
        <div className="About-info">
            <h2>Love in every #StockTrade</h2>
            <ul>
                <li>
                    <img className="img1" src="https://static.tradingview.com/static/bundles/about-circle-large.b5caec23086ad029a5b6.svg"/>
                    <h1>50M+</h1>
                    <p>Traders and investors use our platform.</p>
                </li>
                <li>
                    <img className="img2" src="https://static.tradingview.com/static/bundles/about-top-large.942b231958deceeaeea7.svg"/>
                    <h1>#1</h1>
                    <p>Top website in the world when it comes to all things investing.</p>
                </li>
                <li>
                    <img className="img3" src="https://static.tradingview.com/static/bundles/about-star-large.6bcda2103cf40c4a8eaa.svg"/>
                    <h1>4.5</h1>
                    <p>Rating from 1M+ reviews. No other finance app are more loved</p>
                </li>
                <li>
                    <img className="img4" src="https://static.tradingview.com/static/bundles/about-pine-large.bd11958e344a20ec50b9.svg"/>
                    <h1>10M+</h1>
                    <p>Custom scripts and ideas shared by our users.</p>
                </li>
            </ul>
        </div>
    )
}
export default About;