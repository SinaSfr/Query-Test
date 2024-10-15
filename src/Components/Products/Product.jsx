import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Product() {
  const [datas, setDatas] = useState([])

 useEffect(() => {
  axios.get("https://fakestoreapi.com/products")
  .then(res => setDatas(res.data))
  .catch(error => console.log(error))
 }, [])

  return (
    <div className='flex flex-wrap gap-12 justify-evenly'>
      {datas.map((data) => (
       <div className='max-w-80 border border-solid border-black rounded-md'>
        <Link to={`/products/${data.id}`} >
        <div className='flex justify-center border-b border-black'>
        <img src={data.image} alt="" className='size-52'/>
        </div>
        <h2 className='text-lg font-bold'>{data.title}</h2>
        </Link>
        <h3>{data.category}</h3>
        <p>{data.description}</p>
       </div>
      ))}
    </div>
  )
}
