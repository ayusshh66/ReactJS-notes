import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createSearchParams } from 'react-router-dom'


function App() {
  const data = ['','','','','','','','','']
  const [count, setCount] = useState(0)
  const [lock, setLock] = useState(false )
  

  const toggle = (e, index) => {
    if(lock) {return 0;

    } 
    if(count%2===0){
      e.target.innerHTML = `<img src ="/cross.png"> </img>`
      data[index] =  "X";
      setCount((prev) => prev + 1)

    }
    else{
      e.target.innerHTML = `<img src ="/circle.png"></img>`
      data[index] = "O";
      setCount((prev) => prev+1)
    }

    
  }

  return (
    <>
      <div className='bg-green-950 h-screen w-full flex flex-col justify-center items-center gap-4'>
        <div className='bg-green-200 size-120 flex justify-center items-center shadow-2xl shadow-black'>
          <div className='grid grid-cols-3 gap-1'>
            <div className='size-30 bg-green-500' onClick={(e) => toggle(e,0)}></div>
            <div className='size-30 bg-green-500' onClick={(e) => toggle(e,1)}></div>
            <div className='size-30 bg-green-500' onClick={(e) => toggle(e,2)}></div>
            <div className='size-30 bg-green-500' onClick={(e) => toggle(e,3)}></div>
            <div className='size-30 bg-green-500' onClick={(e) => toggle(e,4)}></div>
            <div className='size-30 bg-green-500' onClick={(e) => toggle(e,5)}></div>
            <div className='size-30 bg-green-500' onClick={(e) => toggle(e,6)}></div>
            <div className='size-30 bg-green-500' onClick={(e) => toggle(e,7)}></div>
            <div className='size-30 bg-green-500' onClick={(e) => toggle(e,8)}></div>
        </div>
        </div>
        <button className='px-4 py-3 rounded-lg flex justify-center items-center shadow-2xl shadow-black text-shadow-2xs bg-gradient-to-r from-green-600 via-green-300 to-green-800 hover:bg-green-200 text-neutral-900 w-30 text-lg
        active:scale-95 cursor-pointer'>Reset</button>
      </div>
    </>
  )
}

export default App
