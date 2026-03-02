import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBars from './Components/NavBars'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact' 
import Products from './Pages/Products'
import {Routes , Route} from 'react-router-dom'
import ContactLayouts from './layouts/ContactLayouts'
import ContactInfo from './Components/ContactInfo'
import ConactForm from './Components/ContactForm'





function App() {
  const [count, setCount] = useState(0)
   
  return (
    <>
     <div>
      <NavBars/>
    
      <div className='flex justify-center items-center h-screen w-screen font-extrabold text-6xl '>
        <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/products' element = {<Products/>} />
        <Route path='/contact' element = {<ContactLayouts/>} >
         <Route path  = 'info' element = {<ContactInfo/ >}/>
         <Route path = "form" element = {<ConactForm/>}/>

        </Route>
        </Routes>
      </div>
    
     </div>
    </>
  ) 
}

export default App
