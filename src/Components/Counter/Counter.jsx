import React, { useEffect, useState } from 'react'

export default function Counter() {
  const [hour, setHour] = useState(null) 
  const [minutes, setMinutes] = useState(null) 
  const [seconds, setSeconds] = useState(null) 

    let date = new Date()
    let dateHour = date.getHours()
    let dateMinutes = date.getMinutes()
    let dateSeconds = date.getSeconds()

     useEffect(() => {
      setHour(dateHour)
      setMinutes(dateMinutes)
      setSeconds(dateSeconds)
      setInterval(() => {
        setSeconds(prevSecond => prevSecond + 1)
      }, 1000)
     })
  
 

  
  return (
    <div className='flex justify-center mt-24'>
      <span>{hour}</span>
      <span>:</span>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  )
}
