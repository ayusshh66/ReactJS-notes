import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {

  const navigate = useNavigate()
  return (
    <><><h1>
      Contact page
    </h1>
      <button onClick={() => navigate('info')}>

        info
      </button></><button onClick={() => navigate('form')}>

        form
      </button>
      </>
      
  )
}

export default Contact