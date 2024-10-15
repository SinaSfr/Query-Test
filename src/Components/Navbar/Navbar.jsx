import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
        <nav className='w-full bg-black flex justify-evenly items-center text-white p-4'>
          <NavLink to='/' className={({isActive}) => isActive ? 'bg-white text-black p-2 rounded-lg' : ''}>home</NavLink>
          <NavLink to='/products' className={({isActive}) => isActive ? 'bg-white text-black p-2 rounded-lg': ''}>products</NavLink>
          <NavLink to='/about-us' className={({isActive}) => isActive ? 'bg-white text-black p-2 rounded-lg': ''}>about us</NavLink>
        </nav>
  )
}
