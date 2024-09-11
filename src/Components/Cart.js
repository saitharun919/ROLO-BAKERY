import React from 'react'
import './Cart.css'
const Cart = ( {cartItems, removeFromCart} ) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>your cart is empty</p>
      ) : (
        <ul className='cart-items'>
            {cartItems.map((item, index) =>(
                <li key={index}>
                        <img className='images' src={item.imgSrc} />
                        <a className='cake-name' >{item.item}</a>
                        <button onClick={()=>removeFromCart(index)}>Remove</button>
                </li>
            )
            
            )}
        </ul>
      )
          }
    </div>
  )
}

export default Cart
