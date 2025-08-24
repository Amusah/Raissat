import React, { useLayoutEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import { logo, logoMd, hamburger, close } from "../assets/assets";

import { navItems } from "../constants";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // check mobile screen size
  useLayoutEffect(() => {
    const isMediumScreen = window.matchMedia("(max-width: 639px)");

    const handleScreenSizeChange = (e) => {
      setIsMobile(e.matches);
    };

    // init screen size state
    handleScreenSizeChange(isMediumScreen);

    isMediumScreen.addEventListener("change", handleScreenSizeChange);

    return () =>
      isMediumScreen.removeEventListener("change", handleScreenSizeChange);
  }, []);

  function handleToggleNav() {
    setToggleNav((prev) => !prev);
    console.log(toggleNav)
  }

  return (
    <nav className="nav flex justify-between items-center bg-bright-gray text-midnight-green font-inter">
      <Link to="/">
        <img className="hidden min-[990px]:block" src={logo} alt="Logo" />
        <img className="hidden max-[990px]:block" src={logoMd} alt="Logo" />
      </Link>
      {/* {toggleNav && ( */}
      <ul
        className={`flex flex-col gap-5 sm:gap-2 sm:flex-row items-center justify-evenly md:w-[60%] mobile-menu ${
          isMobile && toggleNav ? "block" : "hidden"
        }`}
      >
        {/* Nav toggler close btn */}
        <img
          onClick={handleToggleNav}
          className="absolute top-7 right-5 sm:hidden"
          src={close}
          alt="cose-btn"
        />

        {navItems.map((item, idx) => (
          <li key={idx} className="text-[1rem] sm:text-base">
            <NavLink to={item.route}>{item.text}</NavLink>
          </li>
        ))}
        <li className=" hidden min-[990px]:block">
          <button className="btn bg-midnight-green">Education</button>
        </li>
        <li className="hidden max-sm:block">
          <NavLink to="education">Education</NavLink>
        </li>
      </ul>
      {/* )} */}
      <button className="btn bg-midnight-green hidden max-[990px]:block max-sm:hidden">
        Education
      </button>
      <img
        onClick={handleToggleNav}
        className={`size-8 block sm:hidden ${toggleNav ? "hidden" : ""}`}
        src={hamburger}
        alt="hamburger"
      />
    </nav>
  );
};

export default Navbar;
