import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="screen w-fu
      ll h-screen">
        <div className="colorBar flex flex-wrap justify-center ">
          <div className="colours fixed flex flex-wrap justify-center bottom-12 bg-yellow-950">
            <button className='bg-red-900'>
              red
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
