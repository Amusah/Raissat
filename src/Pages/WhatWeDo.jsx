import React from "react";

import { Link } from "react-router";
import { whatWeDo } from "../constants";
import { services } from "../constants";


const Card = ({ title, description, image, direction }) => {
  const flexDirection = direction === 'row-reverse' ? 'md:flex-row-reverse' : 'md:flex-row'
  return (
    <div className={`flex flex-col ${flexDirection} gap-5 font-inter not-last:mb-10`}>
      <img src={image} alt="image" />
      <div>
        <h2 className="font-medium text-xl mb-3">{title}</h2>
        <p className="p">{description}</p>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  const serviceObj = Object.fromEntries(services.map(service => [service.id, service]));
  console.log(serviceObj['consultancy']);

  return (
    <section className="bg-bright-gray px-8 lg:px-30 py-20">
      <div className=" flex flex-col md:flex-row mx-auto w-full gap-5 md:gap-16 justify-center items-center">
        <div className="w-full md:w-2/3">
          <h1 className="h1 text-midnight-green">What We Do</h1>
          <p className="p leading-6 mt-4">
            At RAISSAT, we blend science, agriculture, and technology into
            powerful solutions that drive sustainability and transformation.
            Each of our services is designed to deliver real impact—shaping a
            future where innovation meets responsibility.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-1 p-4 rounded-2xl font-medium text-midnight-green text-center justify-center w-full md:w-1/2">
          <span className="flex gap-3 justify-between">
            <Link to={`${serviceObj['consultancy'].id}`} className="link w-1/2">Consultancy</Link>
            <Link to={`${serviceObj['project-management'].id}`} className="link w-1/2">Project Management</Link>
          </span>
          <Link to={`${serviceObj['policy-engagement-and-communication'].id}`} className="link">Policy Engagement and Communication</Link>
          <Link to={`${serviceObj['research-inclined-capacity-building'].id}`} className="link">Research-Inclined Capacity Building</Link>
          <Link to={`${serviceObj['youth-mentoring-and-engagement'].id}`} className="link">Youth Mentoring and Engagement</Link>
        </div>
      </div>
      <p className="my-20 p">
        We focus on several critical areas, public health, environmental
        sustainability, research, advocacy, and technology for development. The
        students in tertiary institutions are uniquely positioned to drive
        progress across each of these themes. Here is how this involves the
        students
      </p>
      <div>
       {whatWeDo.map(whatWeDo => ( <Card
          title={whatWeDo.title}
          description={whatWeDo.description}
          image={whatWeDo.image}
          direction={whatWeDo.flexDirection}
        />))}
      </div>
    </section>
  );
};

export default WhatWeDo;
