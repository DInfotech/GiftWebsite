import React from 'react';

import Navbar from './Navbar';

const Signup = () => {
    return (  <div>
           <Navbar />
  
    <div className='Signupdiv'>
     
 

    <div className='text'>
    
        <div className='signUpbox'>
        <h1 className='signuuheading'>Sign Up</h1>
            <div className='names'>
               
            <hr className='underline' />
        <input className='signuptext' type="text" placeholder='First Name' />
        <input className='signuptext' type="text" placeholder='Last Name' />
        </div>
        <hr className='underline' />
        <input className='signupemail' type="email" placeholder='email' ></input>
        <hr className='underline' />
        <input className='signupdate' type="date" ></input>
        <hr className='underline' />
        <input className='signupassword' type="text" placeholder='password' />
        <hr className='underline' />
        <button className='signubutton'>Sign Up</button>
        
        </div>
      
    </div>

    </div>
    </div>
  )
}

export default Signup
