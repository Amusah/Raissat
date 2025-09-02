import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutSummary from "../Components/AboutSummary";
import Services from "../Components/Services";
import FAQS from "../Components/FAQS";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

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
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Home;
