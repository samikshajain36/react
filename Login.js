import { useState } from 'react';

const Login = ()=>{
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
return (
  <div className='login'>
      <form className='login_form'>
        <h1>Login</h1>
        <input type="email"  placeholder='Enter your email'  value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password"  placeholder='Enter your password'  value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button type='submit' className='submit-btn'>Signup</button>
      </form>
  </div>
);

};
export default Login;
