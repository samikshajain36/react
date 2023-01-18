import React, { useState } from 'react';

function Signup() {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

return (
  <div className='signup'>
      <form className='signup_form'>
        <h1>Sign Up</h1>
        <input type="name" placeholder='Enter your name'  value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type="email"  placeholder='Enter your email'  value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password"  placeholder='Enter your password'  value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button type='submit' className='submit-btn'>Submit</button>
      </form>
  </div>
);
  
};

export default Signup;

