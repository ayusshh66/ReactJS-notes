import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'


const newElement = React.createElement(
  "a",
  {
    href : "https://www.google.com",
    target : "_blank"

  },
  "click here to enter in google"
)


createRoot(document.getElementById('root')).render(
  
 newElement

)
