import React from 'react'
import Container from './Container'
import {Link,NavLink} from 'react-router-dom'


function Navbar() {
    const links = [{
        href : "/founder",
        title : "founders"
    },{
        href : "/guide",
        title : "Guide"
    },
    {
        href : "/docs",
        title : "docs"
    },
    {
        href : "/pricing",
        title : "Price"
    },{
        href : "/login",
        title : "Login"
    }];

  return (
    <div className='flex justify-between px-4  '>
        <div className="img">
            <Link to = "/">
            <img src="/logo.svg" alt="logo"
            draggable = {false}
            loading='lazy'
            width={100}
            height={100}
             />
            </Link>
        </div>
        <div className='flex items-center gap-4'>
            {links.map((links,index) => (
                <NavLink to={links.href} key={index}
                className={(isActive) => isActive? "text-black text-neutral-800 font-medium hover:text-neutral-500 transition duration-200" : "" }>
                    {links.title}
                </NavLink>
            ))}
        <button className='bg-[#2679F3] px-4 py-2 rounded-lg text-white font-medium
        shadow-lg text-shadow-lg tracking-wide hover:bg-blue-600 transition duration-200 cursor-pointer'>Get Started</button>

        </div>


        

    </div>
  )
}

export default Navbar