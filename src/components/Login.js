import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';
export default function Login(props) {
 let loggedIn = props.loggedIn; 
 let setLoggedIn = props.setLoggedIn;

 function loginComplete(){
   setLoggedIn(!loggedIn);    
 }
  return (
    <div className='enter-cont'>
        <div className="form">
        <label htmlFor="username">UserName:</label>
          <input type="text" name='username' id='username' placeholder='Enter your UserName : '/>
          <label htmlFor="email">Email:</label>
          <input type="text"  id='email' name='email' placeholder='Enter your email : '/>
          <label htmlFor="psw">Password : </label>
          <input type="password" name='psw'  id='psw'  placeholder='Enter your password: '/>
          <NavLink to={"/dashboard"}>
            <button onClick={loginComplete}>
              Log In 
            </button>
          </NavLink>
        </div>
    </div>
  )
}
