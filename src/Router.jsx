import React, { useState } from 'react'
import {
 BrowserRouter,
 Routes,
 Route,
} from "react-router-dom";

// components
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';

const Router = () => {
 // state for existing user
 const [user, setUser] = useState();

 return (
  <div>
   <BrowserRouter>
    <Routes>
     {!user && (
      <>
       <Route path='/login' element={<Login setUser={setUser} />} />
       <Route path='/register' element={<Register setUser={setUser} />} />
      </>
     )}
     <Route path='/' element={<Home setUser={setUser} user={user} />} />
    </Routes>
   </BrowserRouter>
  </div>
 )
}

export default Router