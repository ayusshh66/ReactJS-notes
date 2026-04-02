import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const arr = [{
    Q : "What is the name of the PM of India",
    Crct : "Modi",
    O1 : "Modi",
    O2 : "u",
    O3 : "u",
    O4 : "u",
  },
{
    Q : "what is 2+ 2",
    Crct : "Modi",
    O1 : "4",
    O2 : "5",
    O3 : "6",
    O4 : "8",
  },
{
    Q : "how are u ",
    Crct : "Modi",
    O1 : "g",
    O2 : "uy",
    O3 : "jft",
    O4 : "sfefes",
  },
{
    Q : "gess",
    Crct : "Modi",
    O1 : "ugsegs",
    O2 : "usegseges",
    O3 : "ugsegsegg",
    O4 : "uknknkjnkjn",
  },]
  const [index,setIndex] = useState(0)
  const [selected , setSelected] = useState(null)
  const [answer, setAnswer] =  useState(false)
  // react does not update 2 states so its a wrong approach
  // const len = arr.length - 1
  // const [question, setQuestion] = useState(arr[index].Q)
  const update = () => {
    if(index < arr.length-1){
       setIndex((prev) => prev + 1)
       setSelected(null)
       return setAnswer(false)
    }
  }
  const reset = () => {
    return setIndex(0)
  }

  const correct = (value) => {
     setSelected(value);
     return setAnswer(true)


  }

  


  return (
    <>
      <div className='bg-slate-800 h-screen w-full flex justify-center items-center'>
        <div className='w-full flex flex-col gap-5 justify-center items-center'>
          <button className='bg-slate-400 rounded-lg px-4 py-2 text-lg hover:scale-125 active:scale-95 transition-all duration-300 hover:bg-slate-300 cursor-pointer'>Start Quiz</button>
              <div className=' size-180 bg-neutral-300 flex items-center flex-col'>
                    <div className="ques text-3xl  mt-20 w-full h-5  flex justify-center" >
                      {arr[index].Q}
                    </div>
                    <div className="answers flex flex-col gap-4 mt-20 ">
                      <button
                        onClick={() => correct(arr[index].O1)}
                        className={`${selected === arr[index].O1
                          ? selected === arr[index].Crct
                            ? "bg-green-300"
                            : "bg-red-300"
                          : "bg-neutral-400"} w-100 h-10 rounded-lg font-normal px-4 py-2 cursor-pointer hover:scale-105 active:scale-95`}
                      >
                        {arr[index].O1}
                      </button>
                      <button
                        onClick={() => correct(arr[index].O2)}
                        className={`${selected === arr[index].O2
                          ? selected === arr[index].Crct
                            ? "bg-green-300"
                            : "bg-red-300"
                          : "bg-neutral-400"} w-100 h-10 rounded-lg font-normal px-4 py-2 cursor-pointer hover:scale-105 active:scale-95`}
                      >
                        {arr[index].O2}
                      </button>
                      <button
                        onClick={() => correct(arr[index].O3)}
                        className={`${selected === arr[index].O3
                          ? selected === arr[index].Crct
                            ? "bg-green-300"
                            : "bg-red-300"
                          : "bg-neutral-400"} w-100 h-10 rounded-lg font-normal px-4 py-2 cursor-pointer hover:scale-105 active:scale-95`}
                      >
                        {arr[index].O3}
                      </button>
                      <button
                        onClick={() => correct(arr[index].O4)}
                        className={`${selected === arr[index].O4
                          ? selected === arr[index].Crct
                            ? "bg-green-300"
                            : "bg-red-300"
                          : "bg-neutral-400"} w-100 h-10 rounded-lg font-normal px-4 py-2 cursor-pointer hover:scale-105 active:scale-95`}
                      >
                        {arr[index].O4}
                      </button>
                    </div>
                    <div className='flex gap-4'>
                      <button onClick={update}
              className='bg-slate-500 px-4 py-3 rounded-full shadow-xs shadow-black text-shadow-2xs font-medium cursor-pointer mt-10 active:scale-95'>next question</button>
                    <button  onClick={reset}
              className='bg-slate-500 px-4 py-3 rounded-full shadow-xs shadow-black text-shadow-2xs font-medium cursor-pointer mt-10 active:scale-95'>Reset Quiz</button>
                    </div>
              </div>
        </div>
      </div>
    </>
  )
}

export default App
