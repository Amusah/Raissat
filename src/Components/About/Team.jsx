import React from "react";
import Card from "./Card";

import { aboutPage } from "../../constants";

const { team } = aboutPage;

const Team = () => {
  return (
    <div className="p-8 font-inter">
      <h1 className="h1 text-center mb-4">The Board</h1>
      <p className="p leading-6 mb-6">
        This will comprise of 10 advisors with high societal influence, years of
        experience across different economic/academic backgrounds capable of
        boosting the credibility and stance of the organisation. The BOD will
        also sit as members on this team totalling 15.
      </p>
      <ul className="list-disc px-4 text-xs sm:text-sm">
        <li>Business Advisor</li>
        <li>Legal Advisor</li>
        <li>Academic Advisors - Science, Agriculture and Technology</li>
        <li>Grants Advisors</li>
        <li>Influencers</li>
      </ul>
      <div className="w-full text-center mt-8">
        <span className=" w-2 bg-midnight-green btn text-bright-gray font-semibold">
          Meet the Board
        </span>
        <p className="mt-6 p leading-6">
          Professional headshots and short profiles of research expertise and
          capabilities as it relates to the future advancement of RAISSAT
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {team.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            role={member.role}
            img={member.image}
            profile={member.profile}
          />
        ))}
      </div>
      <h1 className="h1 mt-20">Our Impact</h1>
      <p className="p leading-6 my-4">
        Our Impact The Research Applied Institute for Sustainability in Science,
        Agriculture and Technology (RAISSAT) started off in 2021 as a group of
        multidisciplinary researchers who were passionate about implementing
        research projects that have global impact and capable of improving
        human, animal as well as environmental health, offering sustainable
        solutions for the future. This group of research professionals actively
        mentor several youth aspiring to become astute researchers, implement
        relevant field projects with actionable insights, participate in both
        specialized and multidisciplinary research projects with sustainable
        solutions and continue to produce articles on sustainability which
        captures agricultural, science and technological research advancements
        from a global perspective.
      </p>
    </div>
  );
};

export default Team;
