// SubmittedForm.js
import React from "react";
import "./FormSubmitted.css"

function SubmittedForm({ formData }) {
    return (
        <div className="display">
            <div className="ContainerDisplay">
                <h1>Submitted Form Data</h1>
                <p>First Name: {formData.firstName}</p>
                <p>Last Name: {formData.lastName}</p>
                <p>Username: {formData.username}</p>
                <p>Email: {formData.email}</p>
                <p>Password: {formData.password}</p>
                <p>Phone: {formData.phone}</p>
                <p>Country: {formData.country}</p>
                <p>City: {formData.city}</p>
                <p>Pan: {formData.pan}</p>
                <p>Aadhar: {formData.aadhar}</p>
            </div>
        </div>
    );
}

export default SubmittedForm;
