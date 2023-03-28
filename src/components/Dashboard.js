import React from 'react'
import Navbar from './Navbar'
export default function Dashboard(props) {
 let loggedIn = props.loggedIn; 
 let setLoggedIn = props.setLoggedIn;
  return (
    <div>
     <Navbar loggedIn ={loggedIn} setLoggedIn={setLoggedIn} />
      entered to the web 
    </div>
  )
}
