import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutSummary from "../Components/AboutSummary";
import Services from "../Components/Services";
import FAQS from "../Components/FAQS";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <AboutSummary />
        <Services />
        <FAQS />
      </main>
    </>
  );
};

export default Home;
