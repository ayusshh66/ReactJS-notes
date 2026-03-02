import React from 'react'
import signal from '../assets/signal.png'
import { Link, NavLink, replace, useNavigate } from 'react-router-dom'

function NavBars() {

const navigate = useNavigate()

  return (


    <div className='flex justify-around mt-10'>
        <img src={signal} alt="signal" width={60} className='h-10'/>
        <div className="ul">
        <ul className='flex gap-x-13 bg-gray-300 rounded-4xl w-[600px] justify-center items-center shadow shadow-black shadow-md '>
           <NavLink to='/' className={({isActive}) => isActive?"text-black-600 font-bold":""}> <li>Home</li></NavLink>
           <NavLink to = '/about' className={({isActive}) => isActive?"text-black-600 font-bold":""}> <li>About</li></NavLink>
           <NavLink to = '/products' className={({isActive}) => isActive?"text-black-600 font-bold":""}> <li>Products</li></NavLink>
           <NavLink to = '/contact' className={({isActive}) => isActive?"text-black-600 font-bold":""}> <li>Contact Us</li></NavLink>
        </ul>
        </div>
        <button className='bg-black h-7 w-15 rounded-md text-white hover:bg-gray-600 cursor-pointer
        ' onClick={() => navigate('/about', { replace : true })} >Login</button>

        
    </div>
  )
}

export default NavBars