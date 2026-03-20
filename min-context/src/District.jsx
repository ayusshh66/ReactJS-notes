import React, { useContext } from 'react'
import Block from './Block'
import { NameContext } from './assets/api/Context'

function District() {
    const name = useContext(NameContext)
  return (
    <>
    <div>Pauri garhwal = {name}</div>
    <Block/>
    </>
  )
}

export default District