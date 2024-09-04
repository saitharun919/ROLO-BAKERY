import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Hero from './Hero'
import Aboutus from './Aboutus'
import Body from './Body'

const Home = () => {
  return (

    <div>
      
     <Carousel />
     <Hero />
     <Body />
     <Aboutus />
    </div>

  )

}

export default Home