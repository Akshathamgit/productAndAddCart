import React from 'react'
import './Cart.css'
import Header from './Header'

const Cart =({cartItems,handleAdd,handleRemove, handleClear}) => {

  const totalPrice  = cartItems.reduce((price,item) => price + item.quantity* item.price,0)

  

  return (
    <>
    {/* <Header/> */}
    <div className='cart-items'>
        <h1 className='heading'> Cart Items</h1>
        <div className='item-clear'>
          {cartItems.length >=1 && (
            <button className='btn-clear' onClick={handleClear}> Clear Cart</button>
          )}
        </div>
       
       {cartItems.length === 0 && (
        <div className='cart-empty'>No items in cart</div>
       )}

       <div>
        {cartItems.map((item)=> (
          
          <div key={item.id} className='cart-list-item'>
            <img 
            className="img-item" src={item.img} alt={item.title} />
            <div className='cart-item-name'>{item.title}</div>
            <div className='cart-item-fun'>
              <button className='cart-item-add' onClick={()=> handleAdd(item)}>+ </button>
              
              <button className='cart-item-remove' onClick={()=> handleRemove(item)}>-</button>
            </div>
            <div className='cart-item-price'>
              {item.quantity} -${item.price}

            </div>

          </div>
        ))}
       </div>

       <div className='cart-item-total-price-name'>Total Price
       <div className='cart-item-total-price'> ${totalPrice}</div>
       
       </div>
       
       


    </div>
    </>
  )
}

export default Cart