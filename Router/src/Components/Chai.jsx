import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Chai() {
    const data = useLoaderData()
  return (
    <div>
      {data.map((flw) => {
        return  <Link>
                 <h1>{flw.followers}</h1>
                </Link>

      })}
    </div>
  )
}

export default Chai

export const gitHubInfoLoader = async()=>{
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}

