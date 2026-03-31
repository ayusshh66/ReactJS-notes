import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  const [change, setChange] = useState("Sign-Up")

  return (
    <>
      <div 
      
      
      
      className='max-w-4xl  mx-auto flex justify-center items-center h-screen'>
        <div className='card bg-neutral-200 size-130  rounded-full '>
            <div className="status mt-20 flex justify-center font-bold">{change}</div>
            <div className='flex flex-col  max-w-xs mx-auto h-50 justify-center gap-8  mt-10'>
                {change==="Sign-Up"?(<input type="text" placeholder='name' className=' bg-neutral-300 px-4 p-2 rounded-lg flex justify-center items-center text-md' />): (<div></div>)}
                <input type="email" placeholder='email' className='bg-neutral-300 px-4 p-2 rounded-lg flex justify-center items-center text-md'  required/>
                <input type="password" placeholder='password' className='bg-neutral-300 px-4 p-2 rounded-lg flex justify-center items-center text-md'/>
            </div>
            {change==="Log-In"?(<div className='flex items-center justify-center'> forgot password? <a href="/" className='text-blue-700'>click here</a></div>):<div></div>}
            <div className='flex gap-9 justify-center my-10'>
              <button onClick={() => setChange((change) => change="Sign-Up")}
              className={`${change==="Sign-Up" ? 'bg-blue-600' : 'bg-gray-700  text-black'} text-white rounded-lg px-4 py-2 text-shadow-2xs shadow-2xl active:scale-95 cursor-pointer w-30`}>Sign Up</button>
            <button onClick={() => setChange((change) => change="Log-In")}
            className={`${change==="Log-In" ? 'bg-blue-600' : 'bg-gray-700  text-black'} text-white rounded-lg px-4 py-2 text-shadow-2xs shadow-2xl active:scale-95 cursor-pointer w-30`}>LogIn</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
