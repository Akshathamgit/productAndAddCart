import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'



import './Header.css'
import { ShoppingBasketOutlined, ShoppingCart } from '@material-ui/icons';

function Header({cartItems}) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    
      <Navbar.Brand href="#home">E -Commerce</Navbar.Brand>
      <Nav className="me-auto">
        {
          localStorage.getItem("user-info") ? 
          <>
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/cart" className='cart'>
            <ShoppingCart/>
            <sup> <span className='cart-length'>{ cartItems.length === 0 ?" " : cartItems.length}</span></sup></Link>

          
          </> : 
          <>
          
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        
          </>
        }
        {/* <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link> */}

      </Nav>
    
  </Navbar>
  )
}

export default Header