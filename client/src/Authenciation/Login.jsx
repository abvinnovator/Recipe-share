import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import "./auth.css";

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Your login logic here
            console.log('Login Data:', loginData);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='auth-container'>
            <form onSubmit={handleSubmit} className='auth-form'>
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
            <Link to="/register" className='auth-link'>Don't have an account? Register here</Link>
        </div>
    );
};



export default Login;
