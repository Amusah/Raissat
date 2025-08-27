import React, { useState } from "react";

import { faqs } from "../constants";
import Accordion from "./Accordion";

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleToggle(index) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="py-15 px-8 sm:px-12 bg-bright-gray flex flex-col sm:flex-row gap-8 w-full sm:h-[70vh]">
      <div className="sm:w-[40%] flex flex-col gap-4 text-center sm:text-left mx-auto">
        <h1 className="font-base text-3xl sm:text-4xl md:text-5xl font-inter text-midnight-green">
          FAQs
        </h1>
        <p className="font-inter text-xs">
          Discover answers to your questions about RAISSAT and how we can assist
          you.
        </p>
        <button className="btn w-32 bg-midnight-green mx-auto sm:mx-0">Connect</button>
      </div>
      <div className="sm:w-[60%] mx-auto">
        {faqs.map((faq, index) => (
          <Accordion
            data={faq}
            index={index}
            handleToggle={handleToggle}
            isOpen={activeIndex === index}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQS;
