import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Contactus from './Components/Contactus'
import Aboutus from './Components/Aboutus'
import Askus from './Components/Askus'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Privacy from './Components/Privacy'
import Feedback from './Feedback'
import './App.css'
const App = () => {
  return (
<div>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/Aboutus" element={<Aboutus />}/>
      <Route path="/Askus" element={<Askus />}/>
      <Route path='/Privacy' element={<Privacy/>} />
      <Route path='/Feedback' element={<Feedback />} />
    </Routes>
  </BrowserRouter>
 
   <Footer />
</div>
  )
}

export default App