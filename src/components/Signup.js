import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Signup(props) {
 let loggedIn = props.loggedIn; 
 let setLoggedIn = props.setLoggedIn;
 function signupComplete(){
  setLoggedIn(!loggedIn);    
}
return (
  <div className='enter-cont'>
      <div className="form">
      <label htmlFor="username">Type a UserName:</label>
        <input type="text" name='username' id='username' placeholder='Enter new  UserName : '/>
        <label htmlFor="email">Enter new Email:</label>
        <input type="text"  id='email' name='email' placeholder='Enter new email : '/>
        <label htmlFor="psw">Enter new Password : </label>
        <input type="password" name='psw'  id='psw'  placeholder='Enter your password: '/>
        <NavLink to={"/dashboard"}>
          <button onClick={signupComplete}>
            Sign Up 
          </button>
        </NavLink>
      </div>
  </div>
  )
}
