import React from "react";

import { hero } from "../assets/assets";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${hero}` }}
      className="w-full h-lvh bg-cover bg-top bg-no-repeat flex flex-col items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-rich-black/40" />

      <div className="z-10 flex flex-col gap-6 sm:gap-8 text-center p-3">
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-Albert-sans text-white">
          Empowering Communities <br /> Through Science and Innovation
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white font-inter sm:w-[70%] mx-auto">
          At RAISSAT, we bridge the gap between research and real-world
          applications, focusing on Applied Science, Agriculture,
          Sustainability, and Technology.
        </p>
        <button className="btn bg-indian-yellow w-32 mx-auto">
          Get Involved
        </button>
      </div>
    </section>
  );
};

export default Hero;
