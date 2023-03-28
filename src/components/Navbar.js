import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
let loggedIn = props.loggedIn; 
let setLoggedIn = props.setLoggedIn;
function changeloggedin(){
 setLoggedIn(!loggedIn);
}
  return (
    <div className='navbar'>
      <div className="nav-item logo">
        <img src="https://img.freepik.com/free-vector/gradient-printing-house-logo-template_23-2149763504.jpg?size=338&ext=jpg&uid=R62141179&ga=GA1.1.1280401813.1672154300&semt=sph" alt="" />
      </div>
        <ul  className='nav-item'>
           <li>About</li>
           <li>Courses</li>
           <li>Help</li>
        </ul>
        <div className="btns nav-item">
       {
        loggedIn && <NavLink to={"/"}>
         <button onClick={changeloggedin}>Log out</button>
        </NavLink>
       }
       {
        !loggedIn && <NavLink to={"/login"}>
         <button>Log in</button>
        </NavLink>
       }
       {
        loggedIn && <NavLink to={"/dashboard"}>
         <button>dashboard</button>
        </NavLink>
       }
       {
        !loggedIn && <NavLink to={"/signup"}>
         <button>signup</button>
        </NavLink>
       }
       </div>
     </div>
  )
}
