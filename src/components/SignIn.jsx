import React, { useState } from 'react'
import {Await, Link, useNavigate} from 'react-router-dom'
import axios from "axios";

const SignIn =()=>{

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const[error,setError]=useState("");
  const[loading,setLoading]=useState("");
  const[success,setSuccess]=useState("");

  const navigate = useNavigate();

  const submit=async(e)=>{
  

    e.preventDefault()
    setLoading("Please wait as we upload your details")

    try {
       const data=new FormData();

      data.append("email",email);
      data.append("password",password);
     

    const response = await axios.post("http://papii.alwaysdata.net/api/signin",data);
   
      setLoading("")

      // Check is the response has user item

      if (response.data.user){
        // If user is Found, Store user details in local storage
        localStorage.setItem("user",JSON.stringify(response.data.user));
        setSuccess(response.data.message);

        //Redirect to /getproducts component

        setTimeout(()=>{
          navigate("/")

        },200)
      }
      else{
        // Usert not found, show error message

        setError(response.data.message)
      }

      // reset your form

      setEmail("")
      setPassword("")


    } catch (error) {
     
      
    }
  }






return (
    <div className='row justify-content-center'>

      <div className='col-md-6 card shadow'>

        <h1>Signin</h1>

        <form action="" onSubmit={submit}>

          <p className='text-danger'>{error}</p>
          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>

          
          <input type="email" placeholder='Enter your email' className='form-control' value={email}onChange={(e)=>setEmail(e.target.value)} required/>
          <br />
          <br />

          <input type="password" placeholder='Enter your password' className='form-control' value={password}onChange={(e)=>setPassword(e.target.value)}required/>

          <br />
          <br />

          <input type="submit" value="signin" className='btn bg-success text-white w-100'/>
          <br />
          <br />

          <p>Don't have an account? <Link to="/SignUp">SignUp</Link></p>

          
          
        </form>

      </div>

    </div>
  )
}


export default SignIn