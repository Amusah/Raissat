import React from "react";
import { whiteLogoRound } from "../assets/assets";

const CTA = () => {
  return (
    <section className="bg-rich-black">
      <div className="p-10 flex flex-col justify-center items-center gap-6">
        <img className="size-22" src={whiteLogoRound} alt="Brand-logo" />
        <h1 className="h1 text-indian-yellow font-medium text-center">
          Join Us Today to Unlock Your Potential!
        </h1>
        <button className="btn text-xs md:text-sm bg-indian-yellow">
          Become a member
        </button>
      </div>
    </section>
  );
};

export default CTA;
