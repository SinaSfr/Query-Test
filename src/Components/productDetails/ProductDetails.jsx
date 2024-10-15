import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductDetails() {
  const {id} = useParams()
  const [productDatas, setProductDatas] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => setProductDatas(res.data))
  })

  const clickHandler = () => {
    navigate(-1)
  }
  return (
    <>
      <div className='max-w-80 border border-solid border-black rounded-md mx-auto'>
        <img src={productDatas.image} alt="" className='size-52'/>
        <h2>{productDatas.title}</h2>
        <h3>{productDatas.category}</h3>
        <p>{productDatas.description}</p>
      </div>
      <button className='bg-red-500 p-2' onClick={clickHandler}>come back</button>
    </>
  )
}
