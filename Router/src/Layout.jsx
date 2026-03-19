import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../src/components/Header/Header'
import Followers from './components/Followers/Followers'

function Layout() {
  return (
    <>
    <Header/>
    
    <Outlet/>
    
    <Footer/>
    </>
    
  )
}
// dw
export default Layout