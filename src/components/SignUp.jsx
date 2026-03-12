import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {

  // Initialize our hooks 

  const[username,setUsername]=useState()
  const[email,setEmail]=useState()
  const[phone,setPhone]=useState()
  const[password,setPassword]=useState()


  return (
    <div className='row justify-content-center'>

      <div className='col-md-6 card shadow'>

        <h1>Sign up</h1>

        <form action="">
          {username}

          <input type="text" placeholder='Enter your username' className='form-control'value={username}onChange={(e)=>setUsername(e.target.value)}/>
          <br />
          <br />

          <input type="email" placeholder='Enter your email' className='form-control' value={email}onChange={(e)=>setEmail(e.target.value)}/>
          <br />
          <br />

          <input type="tel" placeholder='Enter Phone number' className='form-control'value={phone}onChange={(e)=>setPhone(e.target.value)}/>
          <br />
          <br />
          

          <input type="password" placeholder='Enter password' className='form-control'value={password}onChange={(e)=>setPassword(e.target.value)}/>
          <br />
          <br />

          <input type="submit" value="SignUp" className='btn bg-primary text-white w-100'/> 
          <br />

          <p>Already have an  account? <Link to="SignIn">SignIn</Link></p>






        </form>


      </div>

      

    </div>
    
  )
}

export default SignUp