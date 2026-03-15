import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

      {/* Left Image */}
      <div>
        <img
          src="https://illustrations.popsy.co/gray/web-design.svg"
          alt="hero"
          className="w-full"
        />
      </div>

      {/* Right Content */}
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Download Now <br />
          <span className="text-gray-500">Lorem Ipsum</span>
        </h1>

        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus, labore. Lorem ipsum dolor sit amet.
        </p>

        <Link
          to="/"
          className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600"
        >
          Download now
        </Link>
      </div>

    </div>
  )
}

export default Home