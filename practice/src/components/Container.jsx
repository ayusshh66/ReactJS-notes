import React from 'react'

function Container({ children, className }) {
  return <div className={`max-w-6xl mx-auto px-4 md:py-4 ${className}`}>{children}</div>
}

export default Container