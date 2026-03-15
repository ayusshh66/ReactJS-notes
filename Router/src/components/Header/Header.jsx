import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function header() {
  return (
    <>
     <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          your<span className="text-orange-500">logo</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-gray-600 font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "hover:text-orange-500"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "hover:text-orange-500"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "hover:text-orange-500"
            }
          >
            Contact
          </NavLink>

          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-orange-500"
          >
            Github
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-gray-600 hover:text-black"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Get started
          </Link>

        </div>

      </div>
    </header>
    </>
  )
}

export default header