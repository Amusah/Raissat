import React from 'react'

const Container = ({ children, className = '' }) => {
  return (
    // <div className={`px-4 sm:px-8 md:px-15 lg:px-30 bg-bright-gray ${className}`}>
    <div
      className={`w-full sm:w-[90%] md:w-[70%] mx-auto max-sm:px-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container