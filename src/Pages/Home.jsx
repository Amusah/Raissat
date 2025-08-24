import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutSummary from "../Components/AboutSummary";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <AboutSummary />
      </main>
    </>
  );
};

export default Home;
