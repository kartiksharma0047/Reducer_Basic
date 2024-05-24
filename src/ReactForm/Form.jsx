import React, { useState } from "react";
import "./Form.css";
import SubmittedForm from "./SubmittedForm"; // Import the SubmittedForm component

function App() {
    const countryCodes = {
        USA: "+1",
        INDIA: "+91",
        CHINA: "+86",
        RUSSIA: "+7"
    };

    const [formData, setFormData] = useState(null); // State to hold form data
    const [submitted, setSubmitted] = useState(false); // State to toggle between form and submitted form

    const handleEmailChange = (event) => {
        const emailInput = event.target;
        const errorMessageElement = emailInput.nextElementSibling;
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

        if (!emailPattern.test(emailInput.value)) {
            errorMessageElement.textContent = "Invalid email format";
        } else {
            errorMessageElement.textContent = "";
        }
    };

    const handleCountryChange = (event) => {
        const country = event.target.value;
        const phoneInput = document.querySelector('input[name="phone"]');
        phoneInput.value = countryCodes[country] || "";
    };

    const handlePhoneChange = (event) => {
        const phoneInput = event.target;
        const phonePattern = /^[+0-9]*$/;
        if (!phonePattern.test(phoneInput.value)) {
            phoneInput.value = phoneInput.value.slice(0, -1);
        }
    };

    const togglePasswordVisibility = () => {
        const passwordInput = document.querySelector('input[name="password"]');
        const toggleButton = document.querySelector('#togglePassword');
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleButton.textContent = "Hide";
        } else {
            passwordInput.type = "password";
            toggleButton.textContent = "Show";
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const errors = {};

        // Validation
        if (!form.firstName.value) {
            errors.firstName = "First Name is required";
        }
        if (!form.lastName.value) {
            errors.lastName = "Last Name is required";
        }
        if (!form.username.value) {
            errors.username = "Username is required";
        }
        if (!form.email.value) {
            errors.email = "E-mail is required";
        } else if (form.email.nextElementSibling.textContent) {
            errors.email = form.email.nextElementSibling.textContent;
        }
        if (!form.password.value) {
            errors.password = "Password is required";
        }
        if (!form.phone.value) {
            errors.phone = "Phone number is required";
        }
        if (!form.country.value) {
            errors.country = "Country is required";
        }
        if (!form.city.value) {
            errors.city = "City is required";
        }
        if (!form.pan.value) {
            errors.pan = "Pan No. is required";
        }
        if (!form.aadhar.value) {
            errors.aadhar = "Aadhar No. is required";
        }

        // Display error messages
        const errorElements = form.querySelectorAll('.error-message');
        errorElements.forEach(element => element.textContent = '');

        Object.keys(errors).forEach((key) => {
            const errorMessageElement = form[key].nextElementSibling;
            if (errorMessageElement) {
                errorMessageElement.textContent = errors[key];
            }
        });

        // Check if there are no errors
        if (Object.keys(errors).length === 0) {
            // Redirect to new route with form data
            const formData = {
                firstName: form.firstName.value,
                lastName: form.lastName.value,
                username: form.username.value,
                email: form.email.value,
                password: form.password.value,
                phone: form.phone.value,
                country: form.country.value,
                city: form.city.value,
                pan: form.pan.value,
                aadhar: form.aadhar.value,
            };
            setFormData(formData);
            setSubmitted(true); // Set submitted state to true to display SubmittedForm
            console.log("Form Data Submitted: ", formData);
            // You can replace this with the actual redirection logic if required
        }
    };

    return (
        <div>
            {submitted ? (
                <SubmittedForm formData={formData} />
            ) : (
                <form onSubmit={handleSubmit}>
                    <h1>React Form</h1>
                    <div>
                        <div>
                            <input type="text" name="firstName" placeholder="First Name" />
                            <span className="error-message"></span>
                        </div>
                        <div>
                            <input type="text" name="lastName" placeholder="Last Name" />
                            <span className="error-message"></span>
                        </div>
                    </div>
                    <div>
                        <input type="text" name="username" placeholder="Enter Username" />
                        <span className="error-message"></span>
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="Enter E-mail" onChange={handleEmailChange} />
                        <span className="error-message"></span>
                    </div>
                    <div className="PasswordHandle">
                        <input type="password" name="password" placeholder="Enter Password" />
                        <button type="button" id="togglePassword" onClick={togglePasswordVisibility}>Show</button>
                    </div>
                    <span className="error-message"></span>
                    <div className="DropDown">
                        <div>
                            <label>Choose a Country :</label>
                            <select name="country" onChange={handleCountryChange}>
                                <option value="">Select Country</option>
                                <option value="USA">USA</option>
                                <option value="INDIA">INDIA</option>
                                <option value="CHINA">CHINA</option>
                                <option value="RUSSIA">RUSSIA</option>
                            </select>
                            <span className="error-message"></span>
                        </div>
                        <div>
                            <label>Choose a City :</label>
                            <select name="city" className="city">
                                <option value="">Select City</option>
                                <option value="New York">New York</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Beijing">Beijing</option>
                                <option value="Moscow">Moscow</option>
                            </select>
                            <span className="error-message"></span>
                        </div>
                    </div>
                    <div>
                        <input type="text" name="phone" placeholder="Enter Phone no." onChange={handlePhoneChange} />
                        <span className="error-message"></span>
                    </div>
                    <div>
                        <input type="text" name="pan" placeholder="Enter Pan no." />
                        <span className="error-message"></span>
                    </div>
                    <div>
                        <input type="text" name="aadhar" placeholder="Enter Aadhar no." />
                        <span className="error-message"></span>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}

export default App;
