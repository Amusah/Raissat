import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="px-4 sm:px-8 md:px-15 lg:px-30 bg-bright-gray">
      {children}
    </div>
  );
}

export default Container