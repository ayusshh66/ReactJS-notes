import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Followers() {

    const data = useLoaderData()  
    // NOT OPTIMAL METHOD
    // const [data,setdata] = useState([])
    // useEffect(()    => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(res => res.json())
    //     .then(data => setdata(data))
    // })
  return (
    <div>Followers : {data.followers}</div>
  )
}

export default Followers

export const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/hiteshchoudhary")
    return res.json()
}