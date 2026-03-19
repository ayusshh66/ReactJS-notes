import React from 'react'
import { useRef, useState,useCallback,useEffect } from 'react'
function Password() {

  const [length,setlength] = useState(0)
  const[number,setnumber] = useState(false)
  const[character,setcharacter] = useState(false)
  const[password,setpassowrd] = useState("")

  const passwordRef = useRef(null)

  const copyToClipBoard =  useCallback(() =>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])


  const passswordGenerator = useCallback(() =>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(number) str+="1234567890"
    if(character) str+="!@#$%^&*()~_+}{"

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass+=str.charAt(char)
    }

    setpassowrd(pass)
  },[length,number,character])

  useEffect(() =>{
    passswordGenerator() 
  },[length,number,character,passswordGenerator])



  return (
    <>
    <div className='w-[700px] h-[500px] bg-blue-900 ml-90 mt-15 p-4 rounded-lg' >
      <div className="containers  ">
        <div className="searchEngine flex ">
          <input type="text"
          readOnly
          placeholder='   password'
          value={password}
          ref={passwordRef}
          className='flex-7 p-1 bg-white '
        />
        <button className='bg-amber-700 text-white rounded-full p-1 flex-1/12 '
        onClick={copyToClipBoard}>Copy</button>
        </div>
        <div className="options text-white flex justify-evenly items-center mt-10">
          <div className='length'>
            <input type="range"
            max={100}
            min={0}
            onChange={(e) => setlength(e.target.value) }
            value={length} />
            <label > <input type="number" 
            value={length}
            onChange={(e)=> setlength(e.target.value)}
            className='w-10 bg-white text-black'/></label>
          </div>
          <div className="number">
          <input type="checkbox"
          defaultChecked = {number}
          onChange={() => setnumber((prev) => !prev)}
          />
          <label>number </label>
          </div>
          <div className="character">
            <input type="checkbox"
            onChange={()=> setcharacter((prev) => !prev)}
            defaultChecked = {character} />
            <label>character</label>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Password