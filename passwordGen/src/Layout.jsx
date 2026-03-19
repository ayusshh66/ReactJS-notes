import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'


function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layout