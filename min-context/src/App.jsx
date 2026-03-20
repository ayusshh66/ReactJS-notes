import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {NameContext} from  './assets/api/Context'
import Country from './Country'
function App() {
  const [name, setname] = useState("")

  return (
    <>
      <NameContext.Provider value={name}>
        <select value = {name} onChange={(e) => setname(e.target.value)}>
          <option value="ayush">AYUSH</option>
          <option value="AKKU">AKKU</option>
          <option value="GOLU">GOLU</option>
        </select>
        <button onClick={() => setname("")}>remove</button>
        <div className='text-4xl flex flex-col '>
          <div className='bg-red-700'>Asia</div>
          <Country/>
        </div>
      </NameContext.Provider>
    </>
  )
}

export default App
