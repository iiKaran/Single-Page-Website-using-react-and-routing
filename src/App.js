import logo from './logo.svg';
import './App.css';
import  {Routes , Route, Link, NavLink} from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import { useState } from 'react';
import Dashboard from './components/Dashboard';
function App() {
  const [loggedIn,setLoggedIn]=useState(false);
  return (

    <div className="App">      
    <Routes>
    <Route path="/" index element={<Home loggedIn ={loggedIn} setLoggedIn={setLoggedIn}/>}></Route>  
    <Route path="/login" element={<Login loggedIn ={loggedIn} setLoggedIn={setLoggedIn} />}></Route>  
    <Route path="/signup" element={<Signup loggedIn ={loggedIn} setLoggedIn={setLoggedIn}/>}></Route> 
    <Route path="/dashboard" element={<Dashboard loggedIn ={loggedIn} setLoggedIn={setLoggedIn}/>}></Route>  

    </Routes>
    </div>
  );
}

export default App;
