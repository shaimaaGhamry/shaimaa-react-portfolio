import React, { useState } from "react";

export default function ContactMe(){
    const [name, setName] = useState("");
    const [validName, setvalidName] = useState(false);

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);

    const [message, setMessage] = useState("");
    const [validMessage, setValidMessage] = useState(false);
    
    function handleNameChange(e){
        setName(e.target.value);        
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    function handleNameBlur(){
        name.length <5
        ? setvalidName(false)
        : setvalidName(true)
    }
    function handleEmailBlur(){
        const emailRegExp = /^\S+@\S+\.\S+$/;
        if(email && emailRegExp.test(email))
            setValidEmail(true);
        else{
            setEmail("");
            setValidEmail(false)
         }
    }

    function handleMessageBlur(){
        message.length == 0
        ? setValidMessage(false)
        : setValidMessage(true)
    }
    return(
        <div className="container mt-5">
            <h1>Contact</h1>
            <div className="mb-3">
            <label htmlFor="nameField" className="form-label">Name:</label>
            <input 
                name="nameField"
                type="text"
                className={validName ? 'form-control' : 'form-control is-invalid'}      
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange} 
                onBlur={handleNameBlur} />
                {!validName && <span className="invalid-feedback">Name is required</span>}
            </div>

            <div className="mb-3">
            <label htmlFor="email">Email:</label>            
            <input 
                type="email" 
                id="email" 
                className={validEmail ? 'form-control' : 'form-control is-invalid'}      
                value={email}
                placeholder="Enter your email" 
                onChange={handleEmailChange} 
                onBlur={handleEmailBlur} />

            {!validEmail && <span className="invalid-feedback">Valid Email is required</span>}
            </div>

            <div className="mb-3">            
            <label htmlFor="message">Message:</label>            
            <textarea 
                id="message" 
                value={message}
                className={validMessage ? 'form-control' : 'form-control is-invalid'}      
                placeholder="Enter your Message" 
                onChange={handleMessageChange} 
                onBlur={handleMessageBlur} />
            {!validMessage && <span className="invalid-feedback">Message is required</span>}
            </div>

            <div className="mb-3">            
            <button type="submit">Submit</button>
            </div>

        </div>
    );
}