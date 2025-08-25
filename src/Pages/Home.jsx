import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutSummary from "../Components/AboutSummary";
import Services from "../Components/Services";

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
      </main>
    </>
  );
};

export default Home;
