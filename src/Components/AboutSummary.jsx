import React from 'react'

import { about } from '../constants'

const AboutSummary = () => {
  return (
    <section className="font-inter bg-bright-gray flex flex-col justify-center items-center gap-8 p-12">
      <h1 className="text-[36px] text-midnight-green font-medium">
        {about.title}
      </h1>
      <p className="text-center leading-7">{about.text}</p>
      <button className='btn bg-indian-yellow'>Learn More</button>
    </section>
  );
}

export default AboutSummary