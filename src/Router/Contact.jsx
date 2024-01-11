import React, { useState } from "react";
import "./CSS/Contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
function Contact() {
    document.title = "Contact - Stock Exchange";
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [num, setNum] = useState();
    const [message,setMessage]=useState("");
    function FormSubmit(event) {
        event.preventDefault();
        if(num.length===10){
            setMail("");
            setMessage("");
            setName("");
            setNum("");
            alert("Your Request Has Been Sent");
        }
        else{
            alert("Enter 10 digit Phone number");
        }
    }

    return (
        <div className="Contact-info">
            <h1>GET IN TOUCH</h1>
            <h2><FontAwesomeIcon icon={faPhone} />Phone: +2 (02) 2737 6756</h2>
            <p><FontAwesomeIcon icon={faEnvelope} /> EMAIL: Stock.Exchange@SEmail.com</p>
            <div className="Location L1">
                <FontAwesomeIcon icon={faLocationDot} />
                <h4>134,Tonk Road,Jaipur,Rajasthan,India</h4>
            </div>
            <div className="Location L2">
                <FontAwesomeIcon icon={faLocationDot} />
                <h4>6736 Nana Forge, Vandervortburgh,Australia</h4>
            </div>
            <div className="Location L3">
                <FontAwesomeIcon icon={faLocationDot} />
                <h4>600 Runolfsdottir Landing, East Gordon,Canada</h4>
            </div>
            <form action="">
                <div className="Form">
                    <div className="user-details">
                        <input
                            type="text"
                            placeholder="Your Name *"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email *"
                            required
                            value={mail}
                            onChange={(e1) => { setMail(e1.target.value) }}
                        />
                        <input
                            type="number"
                            placeholder="Your Phone *"
                            required
                            value={num}
                            onChange={(e2) => { setNum(e2.target.value) }}
                        />
                    </div>
                    <div className="user-issue">
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Your Message *"
                            required
                            value={message}
                            onChange={(e3)=>{setMessage(e3.target.value)}}
                            >
                        </textarea>
                    </div>
                </div>
                <div className="btn">
                    <button type="submit" onClick={FormSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Contact;