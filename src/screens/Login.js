import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { useStateValue } from '../context';

function Login() {
    const [, dispatch] = useStateValue();
    const [loginCredentials, setLoginCredentials] = useState({EmailId:"", password:""})
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/loginuser", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({EmailId: loginCredentials.EmailId, password: loginCredentials.password})
        })
        const json = await response.json()
        if(!json.success) {
            alert("Enter Valid Credentials")
        }
        else {
            const userData = {"authToken": json.authToken, "emailId": json.emailId};
            localStorage.setItem("user", JSON.stringify(userData))
            // console.log(localStorage.getItem(json.authToken))
            const user = JSON.parse(localStorage.getItem("user"));
            console.log("hello user", user);


            dispatch({
                type: 'SET_USER',
                user: user
            })
            navigate('/');
        }
    }

    // const handlenav = () => {
    //     navigate("/signup")
    // }
    const handleChange = (e) => {
        e.preventDefault();
        setLoginCredentials({...loginCredentials, [e.target.name]: e.target.value})
        e.target.style.border = "2px solid lightgreen";
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="login_header">
                    <h1>Login</h1>
                    <div className="login_container">
                        <p>Login to account</p>
                        <label htmlFor="EmailId">Email ID</label>
                        <input type="text" name="EmailId" placeholder="Enter your Email Id..." required onChange={handleChange}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={loginCredentials.password} placeholder="Enter your Password..." required onChange={handleChange}/>
                        <div className="login_buttons">
                            <button type="submit">Login</button>
                            {/* <button onClick={handlenav}>New User?</button> */}
                            <button><Link to="/signup" style={{color:"white", textDecoration: "none"}}>New User?</Link></button>
                        </div>
                        <br/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;