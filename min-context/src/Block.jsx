import React, { useContext } from 'react'
import { NameContext } from './assets/api/Context'

function Block() {
    const name = useContext(NameContext)
  return (
    <div>RikhniKhal : {name}</div>
  )
}

export default Block