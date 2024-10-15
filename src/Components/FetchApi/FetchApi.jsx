import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'


export default function FetchApi() {
    const [pageUrl, setPageUrl] = useSearchParams()
    const [datas, setDatas] = useState([])
    const [query, setQuery] = useState("")
     
    const getApi = () => {
        axios.get("https://670b6fe8ac6860a6c2cc0655.mockapi.io/products")
        .then(res => setDatas(res.data))
    }
    useEffect(() => {
        getApi()
    }, [])

    useEffect(() => {
        setQuery(pageUrl.get("category"))
    }, [pageUrl])


    const querysetter = (text) => {
        setPageUrl({ category: text })
    }
 
  return (
    <>
        <button className='bg-red-400 p-4 ml-2' onClick={() => querysetter("complected")}>Complected</button>
        <button className='bg-red-400 p-4 ml-2' onClick={() => querysetter("uncomplected")}>Uncomplected</button>
        <button className='bg-red-400 p-4 ml-2' onClick={() => querysetter("all")}>All</button>
        <div className='flex justify-between'>
        {
           query === "all" ? datas?.map((data => <p>{data.complected}</p>)) : datas?.filter(data => data.complected === query)?.map(item => <p>{item.complected}</p>)
        }
        
       </div>
    </>
  )
}
