import { aboutPage } from "../../constants";

const {about} = aboutPage;

const AboutFull = () => {
  return (
    <section className="px-4 sm:px-8 md:px-15 lg:px-30">
      <div className="py-16">
        <h1 className="h1 mb-4">{about.title}</h1>
        <p className="p text-xs sm:text-sm">{about.text}</p>
        <div className="flex justify-center text-midnight-green mt-5">
          {/* card */}
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
          {/* <span className="w-max">
            <p className="p text-xs leading-5 rounded-xl border-3 border-light-green p-7">
              Through capacity building, evidence-based approaches, and
              collaborative partnerships, RAISSAT is committed to shaping a
              sustainable and technologically advanced future—where science and
              innovation work hand in hand for the greater good
            </p>
          </span> */}
        </div>
      </div>
    </section>
  );
};

export default AboutFull;
