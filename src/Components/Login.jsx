import React,{useEffect} from 'react'
import Header from '../Components/Header'
import {useNavigate} from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('user-info'))
    {
        navigate('/')
    }
  }, []) 
  return (
    <div>
     {/*  { <Header/>} */}
        <h1>login</h1>
    </div>
  )
}

export default Login