import React from 'react'
import Contact from '../Pages/Contact'
import { Outlet } from 'react-router-dom'


function ContactLayouts() {
  return (
    <div>
        <Contact/>
        <Outlet/>

    </div>
  )
}

export default ContactLayouts