// Login.js

import React, { useEffect, useState } from 'react';
import './Register.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import Header from '../Components/Header';

function Register() {
  useEffect(() => {
    if(localStorage.getItem('user-info'))
    {
        navigate('/')
    }
  }, []) 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] =useState('')
   const navigate = useNavigate()
   

  async function regi(){
    let item ={email,username,password}
    console.log(item);
    let result =  await fetch("https://jsonplaceholder.typicode.com/posts", {
        method:'POST',
        headers: {
            "content-type":"application/json",
            "Accept":'application/json'
        },
        body:JSON.stringify(item)


    })
    result =await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    console.log(result);
    navigate('/')  


  }


  return (
    <>
 {/*  {  <Header/>} */}
    <div className="login-container">
      <div className="login-form">
        <h2>Register</h2>
      
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
         
        
        />
         <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
         
        />
        <button type="submit" onClick={regi} >Login</button>
      </div>
    </div>
    </>
  );
}

export default Register;
