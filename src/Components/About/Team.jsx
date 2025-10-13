import React, { useState } from "react";
import Card from "./Card";

import { aboutPage } from "../../constants";
import Modal from "./Modal";

const { team } = aboutPage;

const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(null);

  const handleToggleModal = (id) => {
    setIsModalOpen(!isModalOpen);
    setId(id);
  }

  return (
    <div className="relative py-8 font-inter px-4 sm:px-4 md:px-15 lg:px-30">
      <h1 className="h1 text-center mb-4">The Board</h1>
      <p className="p leading-6 mb-6 text-center">
        Business Advisor | Legal Advisor | Academic Advisors - Science,
        Agriculture and Technology | Grants Advisors | Influencers
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-16">
        {team.slice(0, 4).map((member, index) => (
          <Card
            key={index}
            name={member.name}
            role={member.role}
            img={member.image}
            profileSummary={member.profileSummary}
            handleToggleModal={() => handleToggleModal(member.id)}
          />
        ))}
      </div>
      {/* <ul className="list-disc px-4 text-xs sm:text-sm">
        <li>Business Advisor</li>
        <li>Legal Advisor</li>
        <li>Academic Advisors - Science, Agriculture and Technology</li>
        <li>Grants Advisors</li>
        <li>Influencers</li>
      </ul> */}
      <div className="w-full text-center mt-[100px]">
        <span className="text-xl w-2 bg-midnight-green btn text-bright-gray font-semibold">
          Meet the Team
        </span>
        <p className="mt-6 p leading-6">
          Professional headshots and short profiles of research expertise and
          capabilities as it relates to the future advancement of RAISSAT
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {team.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            role={member.role}
            img={member.image}
            profileSummary={member.profileSummary}
            handleToggleModal={() => handleToggleModal(member.id)}
          />
        ))}
      </div>
      {/* Card Modal */}
      {isModalOpen && (
        <div className="h-screen fixed top-0 left-0 flex justify-center items-center w-full bg-black/50 z-50 px-3 sm:px-8 md:px-15 lg:px-30">
          <Modal memberId={id} handleToggleModal={handleToggleModal} />
        </div>
      )}

      <div className="mt-20">
        <hr class="border-t-1 border-rich-black" />

        {/* Our Impact */}
        <h1 className="h1 text-center mt-10">Our Impact</h1>
        <p className="p leading-6 my-4 text-center">
          Our Impact The Research Applied Institute for Sustainability in
          Science, Agriculture and Technology (RAISSAT) started off in 2021 as a
          group of multidisciplinary researchers who were passionate about
          implementing research projects that have global impact and capable of
          improving human, animal as well as environmental health, offering
          sustainable solutions for the future. This group of research
          professionals actively mentor several youth aspiring to become astute
          researchers, implement relevant field projects with actionable
          insights, participate in both specialized and multidisciplinary
          research projects with sustainable solutions and continue to produce
          articles on sustainability which captures agricultural, science and
          technological research advancements from a global perspective.
        </p>
      </div>
    </div>
  );
};

export default Team;
