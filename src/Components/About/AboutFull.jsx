import { aboutPage } from "../../constants";
// import ImpactPhilosopy from "./ImpactPhilosopy";
import Container from "../Container";

const { about } = aboutPage;

const AboutFull = () => {
  return (
    <>
      <Container className="">
        <div className="py-16">
          <h1 className="h1 mb-4 text-midnight-green">{about.title}</h1>
          <p className="p text-xs sm:text-sm">{about.text}</p>
          {/* <div className="flex justify-center text-midnight-green mt-5">
          // card
          <span className="w-max">
            <ul className="font-inter p leading-7 list-disc rounded-xl border-3 border-light-green p-7">
              <li>
                Science: We prioritize research that delivers tangible impact,
                leveraging scientific methods to address real-world problems
                across sectors.
              </li>
              <li>
                Agriculture: By integrating modern research with traditional
                practices, we empower the agricultural sector with solutions for
                food security, resource efficiency, and rural development.
              </li>
              <li>
                Technology: We drive the adoption and development of
                technological innovations, equipping individuals and
                organizations with the tools needed for a future-ready society.
              </li>
              <li>
                Through capacity building, evidence-based approaches, and
                collaborative partnerships, RAISSAT is committed to shaping a
                sustainable and technologically advanced future—where science
                and innovation work hand in hand for the greater good
              </li>
            </ul>
          </span>
         // {<span className="w-max">
            <p className="p text-xs leading-5 rounded-xl border-3 border-light-green p-7">
            Through capacity building, evidence-based approaches, and
              collaborative partnerships, RAISSAT is committed to shaping a
              sustainable and technologically advanced future—where science and
              innovation work hand in hand for the greater good
            </p>
          </span> }
        </div> */}
        </div>
      </Container>
      <section className="py-10 bg-rich-black font-inter">
        <Container>
          <div className="mb-8">
            <h1 className="mb-5 font-semibold text-xl text-indian-yellow">
              Our Impact Philosophy
            </h1>
            <p className="p leading-6 text-white">
              At RAISSAT, impact is intentional.
            </p>
            <p className="p leading-6 text-white">
              We measure success not by the number of reports written but by the
              lives improved, the systems strengthened, and the policies
              changed.
            </p>

            <div>
              <p className="p mb-5 mt-8 text-white">
                Every project we undertake is built on five core pillars that
                define our approach:
              </p>
              <ol className="p leading-6 text-white space-y-2 list-decimal">
                <li>
                  <span className="font-bold">Evidence-Based Action - </span>
                  Science that informs and transforms.
                </li>
                <li>
                  <span className="font-bold">Collaborative Innovation - </span>
                  Partnerships that amplify reach and relevance.
                </li>
                <li>
                  <span className="font-bold">Capacity Development - </span>
                  Building people before programs.
                </li>
                <li>
                  <span className="font-bold">Policy Integration - </span>
                  Embedding science into governance.
                </li>
                <li>
                  <span className="font-bold">Sustainability First - </span>
                  Ensuring progress lasts beyond projects.
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </section>
      {/* <ImpactPhilosopy /> */}
    </>
  );
};

export default AboutFull;
