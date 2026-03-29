import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Page from './components/Page'
import Navbar from './components/Navbar'
import { BrowserRouter } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' bg-[radial-gradient(circle_at_top,_#dbeafe,_#f1f5f9_40%,_#ffffff_80%)] h-screen relative'> 
      
      <BrowserRouter>
      
    <Page/>
     </BrowserRouter>
    </div>
    </>
  )
}

export default App
