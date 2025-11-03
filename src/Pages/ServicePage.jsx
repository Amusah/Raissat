import { useParams, useNavigate } from "react-router";

import Container from "../Components/Container";
import { services } from "../constants";
import { whatWeDo } from "../constants";
import { iconBack } from "../assets/assets";

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  // const service = services.find((service) => service.id === serviceId);

  const service = whatWeDo.find((service) => service.id === serviceId);
  console.log(service)

  const handleNavigate = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/services");
    }
  };

  if (!service) {
    return <div>Page not found</div>;
  }

  return (
    <Container>
      <section className="min-h-screen flex flex-col py-8">
        <div className="py-20 flex flex-col md:flex-row gap-10 justify-center">
          <div className="w-full md:w-[50%] h-80  overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={service.images[0]}
              alt="service-image"
              loading="eager"
            />
          </div>
          <div className="font-inter w-full md:w-[50%]">
            <h1 className="font-semibold text-2xl mb-4">{service.title}</h1>
            <p className="font-bold p leading-7 mt-4">{service.subTitle}</p>
            <p className="font-normal p leading-7">{service.detailedDescription}</p>
            <ul className="">
              {service.focusAreas.map((area, index) => (
                <li key={index} className="p mt-2 list-disc list-inside">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <span className="mx-auto font-inter flex flex-col gap-2 items-center cursor-pointer">
          <p className="text-lg">What we Do</p>
          <img
            onClick={handleNavigate}
            className="size-10 "
            src={iconBack}
            alt="Go back button"
          />
        </span>
      </section>
    </Container>
  );
};

export default ServicePage;
