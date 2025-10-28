import React from 'react'

import Container from './Container'
import { about } from '../constants'

const AboutSummary = () => {
  return (
    <Container>
      <section className="font-inter bg-bright-gray flex flex-col justify-center items-center gap-8 p-12">
        <h1 className="text-[36px] text-midnight-green font-medium">
          {about.title}
        </h1>
        <p className="text-center leading-7">{about.text}</p>

        <h1 className="text-[28px] text-midnight-green font-medium">
          Our Mission
        </h1>
        <p className="text-center leading-7">
          To turn knowledge into impact by transforming research into real-world
          solutions, building human capacity, and advancing policy across
          science, agriculture, and technology.
        </p>

        <h1 className="text-[28px] text-midnight-green font-medium">
          Our Vision
        </h1>

        <p className="text-center leading-7">
          A world where science, technology, and integrity unite to secure
          prosperity, nourish communities, and safeguard the planet for
          generations to come.
        </p>
        <button className="btn bg-indian-yellow mt-8">Learn More (who we are)</button>
      </section>
    </Container>
  );
}

export default AboutSummary