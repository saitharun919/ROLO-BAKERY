import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Hero from './Hero'
import Aboutus from './Aboutus'
import Body from './Body'

const Home = ({ addToCart }) => {
  return (

    <div>
      
     <Carousel />
     <Hero addToCart= {addToCart}/>
     <Body />
     <Aboutus />
    </div>

  )

}

export default Home