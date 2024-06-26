import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
    const [credentials, setCredentials] = useState({name:"", EmailId:"", password:"", location:""})
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: credentials.name, location: credentials.location, EmailId: credentials.EmailId, password: credentials.password})
            // body: new FormData(document.getElementById("form"))
        });
        const json = await response.json()
        console.log(json);
        if(!json.success) {
            alert("Enter Valid Credentials")
        }
        else {
            navigate('/');
        }
    }
    const handleChange = (e) => {
        e.preventDefault()
        // const inputs = document.getElementsByClassName("SignUp-container")[0].getElementsByTagName("input")
        // inputs.forEach(input => {
        //     input.style.border = "2px solid red";
        // })
        setCredentials({...credentials,[e.target.name]: e.target.value})
        e.target.style.border = "2px solid lightgreen";
    }

    const handleAlreadyUserClick = () => {
        navigate('/login')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="SignUp-header">
                    <h1>Sign Up</h1>
                    <div className="SignUp-container">
                    <p>Please fill in this form to create an account</p>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter Name...' name="name" value={credentials.name} onChange={handleChange} required/>
                    <label htmlFor="EmailId">Email</label>
                    <input type="text" placeholder="Enter valid Email Id..." name="EmailId" value={credentials.EmailId} required onChange={handleChange}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password..." name="password" value={credentials.password} required onChange={handleChange}/>
                    <label htmlFor="location">Location</label>
                    <input type="text" placeholder="Enter Location..." name="location" value={credentials.location} required onChange={handleChange}/>
                    <div className='signup_button'>
                        <button type="submit">Sign Up</button>
                        <button className="login_button" onClick={handleAlreadyUserClick}>Already a User</button>
                    </div>
                    <br/>
                    </div>
                </div>
            </form>
        </div>
    )
}