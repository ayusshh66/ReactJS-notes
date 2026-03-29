import React from 'react'

function Hero() {
  return (
   <div className='px-4 py-2 flex flex-col items-center w-full my-20 '>
    <div className="px-4 py-1 badge flex justify-center border border-gray-200 bg-gray-100 text-gray-600 rounded-full 
    font-medium hover:bg-gray-200 transition duration-200 cursor-pointer ">Income taxed and R&D tax credits are due by April 15 </div>

    <div>
        <h1 className='text-7xl font-medium text-center tracking-tight text-black mt-10'>Magically simplify <br/> accounting and taxes</h1>
    </div>
    <p className='max-w-2xl mt-5 text-center text-neutral-600 font-medium mx-auto text-normal'>Automated bookkeeping. Effortless tax filing. Financial clarity. Set up in 10 mins. Back to building by 1:30am.</p>
    <div className='flex justify-center mt-8 gap-6'>
        <button className='bg-[#2679F3] px-4 py-2 rounded-lg text-white font-medium
        shadow-lg text-shadow-lg tracking-wide hover:bg-blue-600 transition duration-200 cursor-pointer'>Get Started</button>
        <button className='font-medium text-black hover:bg-gray-300 rounded-lg px-4 py-2 transition duration-200 cursor-pointer 
        hover:shadow-md '>Pricing</button>
    </div>
    <img src="/heroui.webp" alt="" 
    className='max-w-6xl mt-20 rounded-lg border-neutral-200 border-1 max-auto shadow-2xl object-cover '
    />
   </div>

  )
}

export default Hero