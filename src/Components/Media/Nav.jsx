import React from "react";
import { NavLink, Link } from "react-router";

import Container from "../Container";

const Nav = () => {
  return (
    <Container className="py-12">
    <nav className="w-4/5 mx-auto py-4 px-12 rounded-3xl bg-midnight-green">
      <ul className="flex justify-between">
        {["All", "Blogs", "Media", "Articles", "News letters", "Resources"].map(
          (link) => (
            <li className="text-white font-inter font-medium text-sm md:text-md lg:text-lg" key={link}>
              <Link>{link}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  </Container>
  );
};

export default Nav;
