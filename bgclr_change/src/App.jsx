import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Color, setColor] = useState("white")
 

  return (
    
      <div className='page w-full min-h-full ' style={{ backgroundColor: Color,}}>
        <div className="box bg-slate-500 rounded-full h-12 flex  justify-around items-center mt-10">
          <button className='bg-red-500 text-white rounded-full p-2 cursor-pointer' onClick={() => setColor("red")}>red</button>
          <button className='bg-yellow-500 text-white rounded-full p-2 cursor-pointer' onClick={() => setColor("yellow")}>yellow</button>
          <button className='bg-blue-500 text-white rounded-full p-2 cursor-pointer' onClick={() => setColor("blue")}>blue</button>
          <button className='bg-green-500 text-white rounded-full p-2 cursor-pointer' onClick={() => setColor("green")}>green</button>
        </div>
      </div>
    
    
  )
}

export default App
