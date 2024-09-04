import React, { useState } from 'react'
import './feedback.css'
const Feedback = () => {
    const [values,setValues] = useState({

    })
      return (
    <div className='feedback'>
        <div className='feedback-section1'>
            <h1>Feedback</h1>
        </div>
        <div className='feedback-section2'>
            <p>At Eggfree Cakes we value honest feedback and we are keen to hear about your experience with us.</p>
        </div>
        <from className='form'>
            <input type='text' placeholder='Full Name' name='fullname' />
            <input type='int' placeholder='Phone Number' name='number' />
            <input type='email' placeholder='Email' name='mail'/>
            <input type= 'date' placeholder='DOB' name='date'/>
            <input type='text' placeholder='Location' name='location'/>
            <input type='text' placeholder='Comments' name='message'/>
            <input type='file' placeholder='Insert File' name='file'/>
            <button>Submit</button>
        </from>
    </div>
  )
}

export default Feedback
