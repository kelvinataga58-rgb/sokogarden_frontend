import React, { useState } from 'react'

import axios from 'axios'

const AddProducts = () => {

  const[product_name,setProduct_name]=useState("")
  const[product_description,setProduct_description]=useState("")
  const[product_cost,setProduct_cost]=useState("")
  const[product_photo,setProduct_photo]=useState("")

  const[success,setSuccess]=useState("")
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")

  const submit=async(e)=>{

    e.preventDefault()
    setLoading("PLease wait")

    try {

      const data=new FormData();
      data.append("product_name",product_name)
      data.append("product_description",product_description)
      data.append("product_cost",product_cost)
      data.append("product_photo",product_photo)

      const response=await axios.post("http://papii.alwaysdata.net/api/addproducts",data)

      setLoading("")

      setSuccess(response.data.message)

      setProduct_name("")
      setProduct_description("")
      setProduct_cost("")
      setProduct_photo("")

    }

    catch (error) {
      setLoading("")
      setError(error.message)
    }


  }



  return (

    <div className='row justify-content-center'>

      <div className='card shadow col-md-6'>

        <form action="" onSubmit={submit}>

          <h1>Upload products</h1>

          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>
          <p className='text-warning'>{loading}</p>

          <input type="text" placeholder='Enter product Name' className='form-control' value={product_name} onChange={(e)=>setProduct_name(e.target.value)}/>
          <br />
          <br />

          <textarea name="" id="" placeholder='Describe your Product' className='form-control'required value={product_description} onChange={(e)=>setProduct_description(e.target.value)}></textarea>
          <br />
          <br />

          <h5>Upload product photo</h5>

          <input type="no" placeholder='Enter product cost' className='form-control' required value={product_cost} onChange={(e)=>setProduct_cost(e.target.value)}/>
          <br />
          <br />

          <input type="file" className='form-control'  onChange={(e)=>setProduct_photo(e.target.files[0])} accept='image/*'/>


          <input type="submit" value="Upload Product" className='form-control w-100 bg-info text-white'/>

        



        </form>



      </div>
    </div>







  )







































  
}

export default AddProducts