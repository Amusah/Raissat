import { aboutPage } from "../../constants";

const { vision, mision } = aboutPage;

const VisionMission = () => {
  return (
    <section className="p-8 bg-rich-black text-white font-inter">
      <div className="mb-8">
        <h1 className="mb-5 font-semibold">{vision.title}</h1>
        <p className="text-xs sm:text-sm leading-6">{vision.text}</p>
      </div>
      <div>
        <h1 className="mb-5 font-semibold">{mision.title}</h1>
        <p className="text-xs sm:text-sm leading-6">{mision.text}</p>
      </div>
    </section>
  );
}

export default VisionMission