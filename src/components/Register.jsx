import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Auth.scss';

const Register = ({ setUser }) => {

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 let navigate = useNavigate();

 // get the users array from local storage
 let users = JSON.parse(localStorage.getItem("users") || "[]")

 const register = (e) => {
  try {
   e.preventDefault();

   // create a user object
   let user = {
    id: Math.random(),
    email,
    password,
   }

   // push the new user object to the users array
   users.push(user)

   // add the updated users array to local storage
   localStorage.setItem("users", JSON.stringify(users));

   // set the user state with current user data
   setUser(user)

   // save the user object in session storage
   sessionStorage.setItem('user', JSON.stringify(user));

   // redirect to home page after successful register
   navigate("/");
  } catch (error) {
   console.error(error)
  }
 }

 return (
  <div className='register-page'>
   <div className="header">
    <img src="../images/star.svg" alt="" className='icon' />
    <h1>App Name</h1>
   </div>
   <form onSubmit={register}>
    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
    <button>Register</button>
    <div className="divider"></div>
    <NavLink to='/login' className='btn'>Login</NavLink>
   </form>
  </div>
 )
}

export default Register