import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.scss';

const Home = ({ setUser, user }) => {

 let navigate = useNavigate();

 const logout = () => {
  // remove user from session storage
  sessionStorage.removeItem('user')
  setUser(null)
  // redirect to login page
  navigate("/login");
 }

 // get saved session data && save to user state
 let data = sessionStorage.getItem('user');
 useEffect(() => {
  setUser(JSON.parse(data))
 }, [])


 return (
  <div className='home-page'>
   <div className="header">
    <img src="../images/star.svg" alt="" className='icon' />
    <h1>App Name</h1>
   </div>


   <div className="welcome">
    {user && (
     <>
      <h1> Welcome </h1>
      <h1>{user?.email}</h1>
     </>
    )}

    {!user && (
     <h1>Invalid login data</h1>
    )}
   </div>
   <div className="divider"></div>
   <div className="logout">
    <button onClick={logout}>Logout</button>
   </div>

  </div >
 )
}

export default Home