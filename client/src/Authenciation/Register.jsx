import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  const [registerData, setRegisterData] = useState({
      name: '',
      email: '',
      password: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setRegisterData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          // Your register logic here
          console.log('Register Data:', registerData);
      } catch (err) {
          console.log(err);
      }
  };

  return (
      <div className='auth-container'>
          <form onSubmit={handleSubmit} className='auth-form'>
              <h2>Register</h2>
              <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={registerData.name}
                  onChange={handleChange}
              />
              <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={registerData.email}
                  onChange={handleChange}
              />
              <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={registerData.password}
                  onChange={handleChange}
              />
              <button type="submit">Register</button>
          </form>
          <Link to="/login" className='auth-link'>Already have an account? Login here</Link>
      </div>
  );
};
export default Register;