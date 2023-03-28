import React, { useState } from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
export default function Home(props) {
 let loggedIn = props.loggedIn; 
 let setLoggedIn = props.setLoggedIn;
  return (
<div>
    <Navbar  loggedIn ={loggedIn} setLoggedIn={setLoggedIn}/> 
    <div className="home-cont">
      <div className="home-item" id="left-home">
        <h1>Visit us for the best !</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, perspiciatis asperiores recusandae eum alias reiciendis consequuntur aspernatur voluptates commodi minima aperiam quisquam placeat! Obcaecati dolorem ipsam nulla, libero officia esse.</p>
        <NavLink to={"/login"}>
        <button  id='home-login'>Log in</button>
        </NavLink>  
      </div>
      <div className="home-item" id="right-home">
        <img src="https://img.freepik.com/free-vector/teacher-standing-near-blackboard-holding-stick-isolated-flat-vector-illustration-cartoon-woman-character-near-chalkboard-pointing-alphabet_74855-8600.jpg?size=626&ext=jpg&uid=R62141179&ga=GA1.1.1280401813.1672154300&semt=sph" alt="loading" />
      </div>
    </div>
    <div className="card-cont">
      <div className="card">
        <h2>Web Devlopment Course</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis deleniti quasi neque? Saepe necessitatibus distinctio quod mollitia unde. Nam voluptatibus sed molestias itaque consectetur beatae repellendus similique, fuga atque rem.
        </p>
        <button> Start Now </button>

      </div>
      <div className="card">
         <h2>Mobile Devlopment Course</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis deleniti quasi neque? Saepe necessitatibus distinctio quod mollitia unde. Nam voluptatibus sed molestias itaque consectetur beatae repellendus similique, fuga atque rem.
        </p>
        <button> Start Now </button></div>
      <div className="card">
      <h2>Machine Learning  Course</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis deleniti quasi neque? Saepe necessitatibus distinctio quod mollitia unde. Nam voluptatibus sed molestias itaque consectetur beatae repellendus similique, fuga atque rem.
        </p>
        <button> Start Now </button>
      </div>
      <div className="card">
        <h2>Web Devlopment Course</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis deleniti quasi neque? Saepe necessitatibus distinctio quod mollitia unde. Nam voluptatibus sed molestias itaque consectetur beatae repellendus similique, fuga atque rem.
        </p>
        <button> Start Now </button>
      </div>
      <div className="card">
         <h2>Mobile Devlopment Course</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis deleniti quasi neque? Saepe necessitatibus distinctio quod mollitia unde. Nam voluptatibus sed molestias itaque consectetur beatae repellendus similique, fuga atque rem.
        </p>
        <button> Start Now </button></div>
      <div className="card">
      <h2>Machine Learning  Course</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis deleniti quasi neque? Saepe necessitatibus distinctio quod mollitia unde. Nam voluptatibus sed molestias itaque consectetur beatae repellendus similique, fuga atque rem.
        </p>
        <button> Start Now </button>
      </div>
    </div>
    </div>
  )
}
