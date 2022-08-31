import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Auth.scss';

const Login = ({ setUser }) => {

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('')

 let navigate = useNavigate();

 // get the users from local storage & parse the data
 let getUsers = localStorage.getItem('users')
 let users = JSON.parse(getUsers)

 // clear error when input fields are empty
 useEffect(() => {
  if (email.length === 0 || password.length === 0) {
   setError(null)
  }
 }, [email, password])

 const login = (e) => {
  e.preventDefault();
  // loop through users to find match
  users.forEach(user => {
   if (email === user.email && password === user.password) {
    setUser(user)

    // save the user object in session storage
    if (email && password) {
     sessionStorage.setItem('user', JSON.stringify(user));
     return navigate('/')
    }

   }
   // check for invalid login data
   return setError('Invalid login data')
  })
 }

 return (
  <div className='login-page'>
   <div className="header">
    <img src="../images/star.svg" alt="" className='icon' />
    <h1>App Name</h1>
   </div>
   <form onSubmit={login}>
    {error && <p className='error'>{error}</p>}
    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
    <button>Login</button>
    <div className="divider"></div>
    <NavLink to='/register' className='btn'>Register</NavLink>
   </form>
  </div>
 )
}

export default Login