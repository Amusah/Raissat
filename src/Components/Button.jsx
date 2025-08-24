import React from 'react'

const Button = ({ children, className="", ...props  }) => {
  return (
    <button>{children}</button>
  )
}

export default Button