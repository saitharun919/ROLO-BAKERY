import React, { useState } from 'react'
import './feedback.css'
const Feedback = () => {
    const [value,setValue] = useState({
        fullname:'',
        number:'',
        mail:'',
        date:'',
        loation:'',
        message:'',
        file:''
    })
    const {fullname,password,mail,date,location,message,file} = value
    const changeHandle = (e) => {
        setValue({...value,[e.target.name]:[e.target.value]})
    }
    const submitHandle = e =>{
        e.preventDefault()
        console.log(value)

    }
      return (
    <div className='feedback'>
        <div className='feedback-section1'>
            <h1>Feedback</h1>
        </div>
        <div className='feedback-section2'>
            <p style={{marginTop:'2rem'}}>At Eggfree Cakes we value honest feedback and we are keen to hear about your experience with us.</p>
        </div>
        <form className='form' onSubmit={submitHandle}>
            <input type="text" placeholder='Full Name' name='fullname' value={fullname}onChange={changeHandle} />
            <input type='int' placeholder='Phone Number' name='number'value={password} onChange={changeHandle} />
            <input type='email' placeholder='Email' name='mail' value={mail} onChange={changeHandle} />
            <input type= 'date' placeholder='DOB' name='date' value={date} onChange={changeHandle}/>
            <input type='text' placeholder='Location' name='location' value={location} onChange={changeHandle}/>
            <input type='text' placeholder='Comments' name='message' value={message} onChange={changeHandle}/>
            <input type='file' placeholder='Insert File' name='file' value={file} onChange={changeHandle}/>
            <input type='submit' name='submit'></input>
        </form>
    </div>
  )
}

export default Feedback
