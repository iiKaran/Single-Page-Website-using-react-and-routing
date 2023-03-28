import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function Signup(props) {
 let loggedIn = props.loggedIn; 
 let setLoggedIn = props.setLoggedIn;
 const navigate = useNavigate();
 function signupComplete(){
  if(signupform.username.length===0 ||signupform.email.length===0||signupform.psw.length===0)
  {
    setSignUpForm({
      username:"",
      email:"",
      psw:""
    })
    toast.error("Enter The Data Carefully ")
     return ;  
  }
  setLoggedIn(!loggedIn);    
  navigate("/dashboard"); 
}

const [signupform,setSignUpForm] = useState({
  username:"",
  email:"",
  psw:""
})
function changeHandler(event){
  setSignUpForm((prev)=>({...prev,[event.target.name]:event.target.value}))
}
return (
  <div className='enter-cont'>
      <div className="form">
      <label htmlFor="username">Type a UserName:</label>
        <input type="text" name='username' id='username' 
        value = {signupform.username} onChange={changeHandler} placeholder='Enter new  UserName : '/>
        <label htmlFor="email">Enter new Email:</label>
        <input type="text"  id='email' name='email' placeholder='Enter new email : ' value = {signupform.email} onChange={changeHandler}/>
        <label htmlFor="psw">Enter new Password : </label>
        <input type="password" name='psw'  id='psw'  placeholder='Enter your password: ' value = {signupform.psw} onChange={changeHandler}/>
        {/* <NavLink  > */}
          <button onClick={signupComplete}>
            Sign Up 
          </button>
        {/* </NavLink> */}
      </div>
  </div>
  )
}
