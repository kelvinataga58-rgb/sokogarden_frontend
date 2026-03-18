import React from 'react'
import { useState ,useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const GetProducts = () => {

  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setProducts]=useState([])

  const navigate=useNavigate()

  // variable to store image

  const image_url="http://papii.alwaysdata.net/static/images/"

  // create a function to get our products from the api

  const fechProducts=async()=>{

    setLoading("Please wait as we retrive your products")

    try {

      const response=await axios.get("http://papii.alwaysdata.net/api/getproductdetails")
      console.log("The response is",response)
      setProducts(response.data)
      setLoading("")
      
    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }

  }

  // end of function to call the useEffect

  useEffect(()=>{
    fechProducts()

  },[])



  return (
    <div className='row'>
      <h1>Available products</h1>
      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

      {/* {loop through our products and get each product individually} */}

      {products.map((product)=>(
    
    

      <div className='col-md-3 justify-content-center'>

        <div className='card shadow m-4'>

        <img src={image_url + product.product_photo} alt="Cake" className='product_img mt-4' />

        <div className='card-body'>

          <h4 className='text-success'>{product.product_name}</h4>
          <p className='text-secondary'>{product.product_description}</p>
          <p className='text-warning'>kSh{product.product_cost}</p>
          <input type="buttom" className='btn btn-dark w-100' value="Purchase now" onClick={()=>navigate("/Mpesa",{state:{product}})}/>

        </div>

        </div>




      </div>
      ))}






        
    </div>
  )
}

export default GetProducts