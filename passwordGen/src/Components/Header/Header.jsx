import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div >
        <div className="container bg-amber-100 shadow-amber-500  h-12 flex  items-center justify-between">
            <div className="logo">
              <button>
                <NavLink to="/"
                className={({isActive}) => isActive? "text-orange-500" : "hover:text-orange-500"}>
                  MY LOGO 
                </NavLink>
              </button>
              

            </div>
            <div className="links flex gap-12 items-center">
              
                <NavLink to='/'
              className={({isActive}) => {
                return isActive ? "text-orange-500":" hover:text-orange-500"
              }}>
                  HOME
              </NavLink>
              

              <NavLink to="/about" 
              className={({isActive}) => {
                return isActive?"text-orange-500":" hover:text-orange-500"
              }}  >
              ABOUT
              </NavLink>
              
              

            </div>
            <div className="login">
             <button className='bg-amber-950 rounded-full p-1'>
               <NavLink to="/password"
              
              className={({isActive}) => {
                return isActive? "text-orange-500" : "hover:text-orange-500"
              }}>
                PASSWORD

              </NavLink>
             </button>

            </div>
        </div>
    </div>
    </>
  )
}

export default Header