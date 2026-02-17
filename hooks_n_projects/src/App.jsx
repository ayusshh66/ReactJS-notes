import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let removed  =     setremoveValue( CounterValue = CounterValue - 1)


  // this should be a variable to be functioned rather than assigning it as a constant
  let [removeValue, setremoveValue] = useState(0)

  let [currentValue, setcurrentValue] =  useState(0)

  let [CounterValue, setCounterValue] = useState(0)


  // let counterValue = 0
  const addValue = () => {
    // counterValue = counterValue + 1
    // setCounterValue(CounterValue =  CounterValue+1)
    // console.log("value added", CounterValue);
    if( CounterValue >=0 &&  CounterValue <20 ){

      setCounterValue(CounterValue = CounterValue + 1)
      setcurrentValue(currentValue = currentValue + 1)

      console.log("clicked", CounterValue);
      
    }

    
    
  }
  
  const removei = () =>{
    // setremoveValue( CounterValue = CounterValue - 1)
    // console.log("value removed ", removeValue);
    
    if (CounterValue > 0 && currentValue >0 ) {
      // setCounterValue( CounterValue = CounterValue - 1)
      setcurrentValue(currentValue = currentValue - 1)
      setremoveValue(removeValue = removeValue + 1)
      
    }
    
  }
  

  return (
    <>
      <h1>click count </h1>
      <h3>counter value : {CounterValue} </h3>
      <button onClick={addValue}>add</button>
      <br />
      <button onClick={removei}>remove</button>
      <p> current value : {currentValue}</p>
      <p> no. of removed value : {removeValue}</p>
    </>
  )
}

export default App
