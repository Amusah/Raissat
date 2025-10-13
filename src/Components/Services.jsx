import {useNavigate} from "react-router";

import { services } from "../constants";
import {truncateText} from "../utils";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-rich-black p-16 text-center">
      <div className="flex flex-col gap-5 mb-20">
        <h1 className="text-[36px] text-white font-medium font-inter">
          What We Do
        </h1>
        <h1 className="h1 text-indian-yellow">
          Comprehensive Solutions for <br /> Sustainable Development
        </h1>
        <p className="text-white font-inter">
          At RAISSAT, we blend science, agriculture, and technology into
          powerful solutions that drive sustainability and transformation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.slice(0, 3).map((service, index) => (
          <div key={index} className="card">
            <img src={service.icon} alt="icon" />
            <h2>{service.title}</h2>
            <p>{truncateText(service.text, 25)}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('services')} className="btn bg-indian-yellow mt-15">Learn More</button>
    </section>
  );
};

export default Services;
