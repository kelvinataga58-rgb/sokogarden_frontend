// import React from 'react'
import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'


const Mpesa = () => {
  // Receive the parsed data from get products
  const{product}=useLocation().state || {} //cali brackets is used for destructuring

  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  const[phone,setPhone]=useState("")

  const submit=async(e)=>{

    setLoading("Please wait.....")
    e.preventDefault()

    try {

      const data=new FormData()
      data.append("amount",product.product_cost)
      data.append("phone",phone)

      const response=await axios.post("http://papii.alwaysdata.net/api/mpesa_payment",data)
      
      console.log("The response is",response)

      setSuccess(response.data)
      setLoading("")
      
    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }

  }


  return (
    <div className="row justify-content-center">

        <h1>Make payments-Lipa na Mpesa</h1>

        <p className="text-danger">{error}</p>
        <p className="text-success">{success}</p>
        <p className="text-warning">{loading}</p>

        <p className="text-success">{product.product_name}</p>
        <p className="text-warning">{product.product_cost}</p>
       

        <div className="col-md-6 mt-4">
          <form action="" onSubmit={submit}>

        <input type="tel" placeholder="Enter your phone number starting with 254" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
     
        <br />

        <button className="btn btn-dark form control w-100">Make payment</button>
         </form>

      </div>


    </div>
  )
}

export default Mpesa