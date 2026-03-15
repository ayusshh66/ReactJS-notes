import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function footer() {
  return (
    <>
    <footer className="bg-gray-100 border-t mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold">
            your<span className="text-orange-500">logo</span>
          </Link>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-700">RESOURCES</h3>

          <div className="flex flex-col gap-2 text-gray-600">
            <NavLink to="/" className="hover:text-orange-500">
              Home
            </NavLink>

            <NavLink to="/about" className="hover:text-orange-500">
              About
            </NavLink>

            <NavLink to="/contact" className="hover:text-orange-500">
              Contact
            </NavLink>
          </div>
        </div>

        {/* Follow us */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-700">FOLLOW US</h3>

          <div className="flex flex-col gap-2 text-gray-600">
            <a href="https://github.com" target="_blank" className="hover:text-orange-500">
              Github
            </a>

            <a href="#" className="hover:text-orange-500">
              Discord
            </a>

            <a href="#" className="hover:text-orange-500">
              Twitter
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-700">LEGAL</h3>

          <div className="flex flex-col gap-2 text-gray-600">
            <Link to="/privacy" className="hover:text-orange-500">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-orange-500">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom bar */}

      <div className="border-t py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600">

          <p>© 2023 hiteshchoudhary. All Rights Reserved.</p>

          

        </div>
      </div>

    </footer>
    </>
  )
}

export default footer