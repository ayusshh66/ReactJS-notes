import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function User() {

    

    const {userid} = useParams()
  return (
    <div>User {userid}</div>
  )
}

export default User