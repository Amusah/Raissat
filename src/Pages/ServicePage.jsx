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
        <div className="py-20 flex flex-col min-[89px]:flex-row gap-10 justify-center">
          <img src={service.images[0]} alt="service-image" loading="eager" />
          <div className="font-inter">
            <h1 className="font-semibold text-2xl mb-4">{service.title}</h1>
            <p className="mb-5">{service.text}</p>
            <span className="font-semibold flex flex-col gap-2">
              <h2>Why it Stands out:</h2>
              <p className="font-normal">{'service.rationale'}</p>
            </span>
          </div>
        </div>
        <span className="mx-auto font-inter flex flex-col gap-2 items-center cursor-pointer">
          <p className="text-lg">What we Do</p>
          <img
            onClick={handleNavigate}
            className="size-10 "
            // src={iconBack}
            alt="Go back button"
          />
        </span>
      </section>
    </Container>
  );
};

export default ServicePage;
