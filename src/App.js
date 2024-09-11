import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Contactus from './Components/Contactus'
import Aboutus from './Components/Aboutus'
import Askus from './Components/Askus'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Privacy from './Components/Privacy'
import Feedback from './Feedback'
import Cart from './Components/Cart'
import './App.css'
const App = () => {
  const [cart,setCart] = useState([]);
  const addToCart= (item) =>{
    setCart((prevCart) => [...prevCart, item]);
  }
  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => prevCart.filter((item, index) => index !== itemToRemove))
  }
  return (
<div>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home addToCart = {addToCart} />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/Aboutus" element={<Aboutus />}/>
      <Route path="/Askus" element={<Askus />}/>
      <Route path='/Privacy' element={<Privacy/>} />
      <Route path='/Feedback' element={<Feedback />} />
      <Route path= '/Cart' element={<Cart cartItems= {cart} removeFromCart= {removeFromCart}/>} />
    </Routes>
  </BrowserRouter>
 
   <Footer />
</div>
  )
}

export default App