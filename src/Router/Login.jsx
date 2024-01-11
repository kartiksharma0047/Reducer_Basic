import React, { useState } from "react";
import "./CSS/Login.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faExclamation, faEye, faEyeSlash, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

function Login() {
    document.title = "Login - Stock Exchange";
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passShow, setPassShow] = useState(false);
    const [forgetPass, setForgetPass] = useState(false);
    const [emailError, setEmailError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPass(e.target.value);
    };

    const handlePassword = () => {
        setPassShow(!passShow);
    };

    const handleForgetPassword = () => {
        setForgetPass(true);
    };
    const logedin=(e)=>{
        e.preventDefault();
        setEmail("");
        setPass("");
    }

    const ChangeForgetPassword = () => {
        if (!email) {
            setEmailError("Email is required");
            return;
        }
        alert("OTP is sent to linked email");
        setForgetPass(false);
        setEmailError("");
        setEmail("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div className="Login-info">
            <div className="container"></div>
            <div className="container2">
                <div className="left">
                    <img src="src\Router\Images\Login-page-character1.png" alt="Character" />
                </div>
                <div className="right">
                    {forgetPass ? (
                        <div className="forgotPassword">
                            <FontAwesomeIcon icon={faExclamation} />
                            <h3>Forgot Password</h3>
                            <p>Enter your email and we'll send you a link to reset your password</p>
                            <form onSubmit={(event) => { event.preventDefault() }}>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    required
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setEmailError("");
                                    }}
                                />
                                <FontAwesomeIcon className="icon-envelope" icon={faEnvelope} />
                                <button type="submit" onClick={ChangeForgetPassword}>Submit</button>
                            </form>
                        </div>
                    ) : (
                        <div>
                            <p>
                                New User? <Link to="/Sign-in">Sign up</Link>
                            </p>
                            <h1>Welcome Back!</h1>
                            <h2>Login to continue</h2>
                            <form onSubmit={handleSubmit}>
                                <FontAwesomeIcon icon={faUser} />
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                <FontAwesomeIcon icon={faLock} />
                                <input
                                    type={passShow ? "text" : "password"}
                                    value={pass}
                                    onChange={handlePasswordChange}
                                    placeholder="Enter Password"
                                    required
                                />
                                {pass.length > 0 ? (
                                    <FontAwesomeIcon
                                        onClick={handlePassword}
                                        icon={passShow ? faEyeSlash : faEye}
                                        className="eye-icon"
                                    />
                                ) : null}
                                <div className="login-btn">
                                    <button className="btn1" type="submit" onClick={logedin}>
                                        Login
                                    </button>
                                    <button className="btn2" type="reset" onClick={handleForgetPassword}>
                                        Forgot Password
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
