import React from 'react'
import { whiteLogo } from '../assets/assets'

const CTA = () => {
  return (
    <section className='bg-rich-black'>
      <div className='p-10 flex flex-col justify-center items-center gap-5'>
        <img className='size-19' src={whiteLogo} alt="Brand-logo" />
        <h1 className="h1 text-indian-yellow">
          Join Us Today to Unlock Your Potential!
        </h1>
        <button className="btn text-xs md:text-sm bg-indian-yellow">Become a member</button>
      </div>
    </section>
  );
}

export default CTA