import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import Product from './Components/Product';
import Login from './Components/Login';
import Protected from './Components/Protected';
import Register from './Components/Register';
import Cart from './Components/Cart';
import list from './Components/Data';
import { useState } from 'react';

function App() {

  const {productItems} =list;
  const [cartItems, setCartItems] = useState([])

  const handleAddCart =(product) => {
    const ProductExist =cartItems.find((item)=> item.id === product.id);
  if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...ProductExist, quantity: ProductExist.quantity +1}: item))
    }  else {
      setCartItems([...cartItems, {...product, quantity:1}])
    }
  }

  const handleAdd =(product) => {
    const ProductExist =cartItems.find((item)=> item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...ProductExist, quantity: ProductExist.quantity +1}: item))
    }  else {
      setCartItems([...cartItems, {...product, quantity:1}])
    }
  }


  const handleRemove =(product) => {
    const ProductExist =cartItems.find((item)=> item.id === product.id);
    if(ProductExist.quantity ===1){
      setCartItems(cartItems.filter((item) => item.id !== product.id))
     
    }  else {
      setCartItems(
        cartItems.map((item) => item.id ===product.id ? {...ProductExist, quantity: ProductExist.quantity -1} : item)
      )
    }
  }

  const handleClear =() => {
    setCartItems([])
  }
  return (
    <div>
      
    <div className="App">
    <Header cartItems={cartItems}/>
      <Routes productItems={productItems} cartItems={cartItems} handleAddCart={handleAddCart} handleAdd={handleAdd} 
      handleRemove={handleRemove} handleClear={handleClear}>

      <Route path="/register"  element={<Register/>}> </Route>
      <Route path="/login"  element={<Login/>}> </Route>

      <Route path="/"  element={<Protected Cmp={Home}/>}> </Route>
      <Route path="/product"  element={<Product handleAddCart={handleAddCart} handleAdd={handleAdd} handleRemove={handleRemove}/>}> </Route>
      <Route path="/cart"  element={<Cart cartItems={cartItems} handleAdd={handleAdd} handleRemove={handleRemove} handleClear={handleClear} />}> </Route>
      
      

      </Routes>

      
    </div>
    </div>
  );
}

export default App;
