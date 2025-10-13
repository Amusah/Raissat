import { aboutPage } from "../../constants";

const { vision, mision } = aboutPage;

const VisionMission = () => {
  return (
    <section className="py-10 px-4 sm:px-8 md:px-15 lg:px-30 bg-rich-black text-white font-inter text-center">
      <div className="mb-8">
        <h1 className="mb-5 font-semibold text-xl">{vision.title}</h1>
        <p className="p leading-6">{vision.text}</p>
      </div>
      <div>
        <h1 className="mb-5 font-semibold text-xl">{mision.title}</h1>
        <p className="p leading-6">{mision.text}</p>
      </div>
    </section>
  );
}

export default VisionMission