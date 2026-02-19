import React from 'react'

function card({username}) { 
  return (
    <div> 
        <div className='bg-black text-yellow-50'>
            <p>
                hi there i am {username} and this is my card component   
            </p>
            <button className='bg-yellow-950 cursor-cell'>
                visit my website
            </button>
        </div>
    </div>
  )
}

export default card