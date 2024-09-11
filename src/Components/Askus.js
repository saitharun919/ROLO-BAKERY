import React, { useState } from 'react'
import logo from './Image/logo.jpg'
import './askus.css'
const Askus = () => {
  const [values, setValues] = useState({
    name:'',
    email:'',
    number:'',
    message:''
  })
  const handleChange = (e) =>{
    setValues({...values, [e.target.name]:[e.target.value]})
  }
  const submitHandle = (e) =>
    e.preventDefault();

  return (
    <div>
        <div className='contact-us'>
        <div className='submit-form'>
          <h1 className='customer'>ASK US</h1>
          <form onSubmit={submitHandle}> 
          <input type='text' placeholder='Full Name' name='name' onChange={(e) => handleChange(e)}></input><br></br><br></br>
          <input type='email' placeholder='Email' name='email'onChange={(e) => handleChange(e)}></input><br></br><br></br>
          <input type='int' placeholder='Number' name='number'onChange={(e) => handleChange(e)}></input><br></br><br></br>
          <input type='text' placeholder='Message'style={{height:'7rem'}} name='message' onChange={(e) => handleChange(e)}></input><br></br><br></br>
          <button className='btn-btn customer'>Submit</button>
          </form>
        </div>
        <div className='Customer-relations'>
          <img src={logo} style={{height:'4rem',width:'4rem',alignItems:'center',justifyContent:'center',display:'grid'}}></img>
          <h1 className='customer' style={{margin:'1rem 0rem 0rem 1rem'}}>Customer Relations</h1>
          <p className='customer' style={{margin:'1rem 1rem 1rem 1rem'}}>At Rolo Bakers, we pride ourselves on our customer service and the quality of our products. If you feel you are not satisfied with the service or product you received, please email customer relations at hello@rolobakers.com or call at XXXXXXXXXXXX and one of our friendly team members will get back to you.</p>
        </div>
    </div>
    <div className='address'>
      <div className='section1'>
        <h4>Head office</h4>
      </div>
      <div className='section2'>
        <span>Inspire Arena, 15, Narsingi - Puppalaguda Main Rd,</span>
          <span> Narsingi, Puppalguda, Hyderabad,</span>
          <span>Telangana 500089, India</span>
      </div>
    </div>
    </div>
  )
}

export default Askus