import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function Login(props) {
 let loggedIn = props.loggedIn; 
 let setLoggedIn = props.setLoggedIn;
 const navigate = useNavigate();
 function loginComplete(){
  
  if(loginform.username.length===0 ||loginform.email.length===0||loginform.psw.length===0)
  {
    setloginform({
      username:"",
      email:"",
      psw:""
    });
    toast.error("Enter The Data Carefully ")
     return ;  
  }
  setLoggedIn(!loggedIn);    
  navigate("/dashboard"); 
 }
 const [loginform,setloginform] = useState({
  username:"",
  email:"",
  psw:""
})
function changeHandler(event){
  setloginform((prev)=>({...prev,[event.target.name]:event.target.value}))
}


  return (
    <div className='enter-cont'>
        <div className="form">
        <label htmlFor="username">UserName:</label>
          <input type="text" name='username' id='username' value={loginform.username} onChange={changeHandler} placeholder='Enter your UserName : '/>
          <label htmlFor="email">Email:</label>
          <input type="text"  id='email' value={loginform.email} onChange={changeHandler} name='email' placeholder='Enter your email : '/>
          <label htmlFor="psw">Password : </label>
          <input type="password" name='psw'  id='psw' value={loginform.psw} onChange={changeHandler}  placeholder='Enter your password: '/>
            <button onClick={loginComplete}>
              Log In 
            </button>
        </div>
    </div>
  )
}
