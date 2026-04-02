import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [question, setQuestion] = useState(arr[])

  const arr = [{
    Q : "What is the name of the PM of India",
    Crct : "Modi",
    O1 : "u",
    O2 : "u",
    O3 : "u",
    O4 : "u"
  }]

  return (
    <>
      <div className='bg-slate-800 h-screen w-full flex justify-center items-center'>
        <div className='w-full flex flex-col gap-5 justify-center items-center'>
          <button className='bg-slate-400 rounded-lg px-4 py-2 text-lg hover:scale-125 active:scale-95 transition-all duration-300 hover:bg-slate-300 cursor-pointer'>Start Quiz</button>
              <div className=' size-150 bg-neutral-300 flex items-center flex-col'>
                    <div className="ques">
                      question
                    </div>
                    <div className="answers">
                      <ul></ul>
                      <ul></ul>
                      <ul></ul>
                      <ul></ul>
                    </div>
              </div>
        </div>
      </div>
    </>
  )
}

export default App
