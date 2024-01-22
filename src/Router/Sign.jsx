import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Signin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import img2 from "./Images/Stock_img_2.webp"
import img1 from "./Images/Stock_img_1.webp"
import img3 from "./Images/Stock_img_3.webp"
import img4 from "./Images/Stock_img_4.webp"




function Sign() {
  const [counter, setCounter] = useState(1);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      console.log("Kartik");
      document.getElementById(`radio${counter}`).checked = true;
      setCounter((prevCounter) => (prevCounter % 4) + 1);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [counter]);

  const FormSubmit = () => {
    setFname("");
    setLname("");
    setMail("");
    setPass("");
  }

  document.title = "Sign - Stock Exchange";

  return (
    <div className="Sign-info">
      <div className="sign-container">
        <div className="sign-box1">
          <div className="slider">
            <div className="slides">
              {/* Radio Button Starts */}
              <input type="radio" name="radio-btn" id="radio1" defaultChecked />
              <input type="radio" name="radio-btn" id="radio2" />
              <input type="radio" name="radio-btn" id="radio3" />
              <input type="radio" name="radio-btn" id="radio4" />
              {/* Radio Button Ends */}

              {/* Slides Image Starts */}
              <div className="slide first radio1">
                <img src={img2} alt="" />
              </div>
              <div className="slide radio2">
                <img src={img1} alt="" />
              </div>
              <div className="slide radio3">
                <img src={img3} alt="" />
              </div>
              <div className="slide radio4">
                <img src={img4} alt="" />
              </div>
              {/* Slides Image Ends */}

              {/* Auto Navigation Starts */}
              <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
              </div>
              {/* Auto Navigation Ends */}
            </div>
            {/* Manual Navigation Starts */}
            <div className="navigation-manual">
              <label htmlFor="radio1" className="manual-btn"></label>
              <label htmlFor="radio2" className="manual-btn"></label>
              <label htmlFor="radio3" className="manual-btn"></label>
              <label htmlFor="radio4" className="manual-btn"></label>
            </div>
            {/* Manual Navigation Ends */}
          </div>
        </div>
        <div className="sign-box2">
          <h1>Create your Account</h1>
          <form action="">
            <div className="name_entry">
              <input type="text" id="firstname" pattern="[A-Za-z\s]{1,}" placeholder="First name" required value={fname} />
              <input placeholder="Last name" type="text" id="lastname" pattern="[A-Za-z\s]{1,}" value={lname} required />
            </div>
            <input placeholder="Email" type="email" id="emailname"
              value={mail} required />
            <input placeholder="Password" type="password" id="passwordname" value={pass} required />
            <button onClick={FormSubmit} type="submit">Create Account</button>
          </form>
          <p>Already have an account? <Link to="/Log-in">Log-in</Link></p>
          <div className="or">
            <p></p>
            <h3>or</h3>
            <p></p>
          </div>
          <div className="otherOption">
            <h1 className="otherOption-h1"><FontAwesomeIcon className="face_book-logo" icon={faFacebook} />Singup with Facebook</h1>
            <h1 className="otherOption-h2"><FontAwesomeIcon icon={faGoogle} />Signup with Google</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
