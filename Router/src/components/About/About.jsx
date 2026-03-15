import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-center">

      <h1 className="text-4xl font-bold mb-6">
        About Us
      </h1>

      <p className="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae molestias reprehenderit illo cupiditate. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Accusantium
        exercitationem minima doloribus quae impedit.
      </p>

      <div className="mt-10">
        <img
          src="https://illustrations.popsy.co/gray/team-work.svg"
          alt="about"
          className="mx-auto w-96"
        />
      </div>

    </div>
  )
}

export default About