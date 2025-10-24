// services
import {
  iconConsult,
  iconManagement,
  iconResearch,
  imageConsultancy,
  imageManagement,
  imageMentoring,
  imagePolicy,
  imageResearch,
} from "../assets/assets";

// staff Profiles images
import {
  elohozino,
  samuel,
  goshen,
  sunday,
  // josephine,
  christiana,
  adejoke,
  agric,
  publicHealth,
  sustainability,
  innovation,
  technology,
} from "../assets/assets";

// Media center images
import { locust, farmConflict, climateFarming, pestManagement } from '../assets/assets';

const navItems = [
  // {
  //   text: "Home",
  //   route: "/home",
  // },
  {
    text: "Who We Are",
    route: "/about",
  },
  {
    text: "What We Do",
    route: "/services",
  },
  {
    text: "Media center",
    route: "/media",
  },
  {
    text: "Get Involved",
    route: "/contact",
  },
];

// For About Section component
const about = {
  title: "Who We Are",
  text: "The Research Applied Institute for Sustainability in Science, Agriculture and Technology (RAISSAT) is a non-government research organization that works to promote sustainability that transforms the future through the bridging of science, agriculture and technology to create ground-breaking sustainable solutions. Our mission is rooted in the belief that critical global issues can be effectively addressed and sustainable solutions developed through impactful multidisciplinary research. Therefore, in implementing our various activities through research, education, community-based outreach, media projects and advocacy, the core values of “Sustainable Development Goals” are consistently integrated to achieve realistic and impactful results in science, agriculture and technology.",
};

const services = [
  {
    id: "consultancy",
    title: "Consultancy",
    text: "We provide expert-driven sustainability consultancy that helps organizations, governments, and communities integrate eco-conscious practices into their operations. Our team works across sectors- science, agriculture, and technology-to design solutions that are not only innovative but also practical and scalable. Whether it’s climate-smart agriculture, sustainable resource management, or green technology adoption, RAISSAT ensures your goals align with the UN Sustainable Development Goals (SDGs).",
    icon: iconConsult,
    rationale:
      "Tailored, research-backed strategies that bridge science and real-world application.Actionable insights and strategies that drive real-world sustainability impact",
    image: imageConsultancy,
  },

  {
    id: "project-management",
    title: "Project Management",
    text: "From conception to completion, we manage research projects with precision and impact in mind. RAISSAT specializes in coordinating multidisciplinary initiatives that tackle pressing global challenges-climate change, food security, renewable energy, and more. We ensure effective planning, resource mobilization, monitoring, and knowledge dissemination so that projects don’t just exist on paper but create meaningful change on the ground.",
    icon: iconManagement,
    rationale:
      "Structured project execution that turns ground-breaking ideas into transformative realities",
    image: imageManagement,
  },

  {
    id: "research-inclined-capacity-building",
    title: "Research-Inclined Capacity Building",
    text: "We design and deliver training programs that empower researchers, professionals, and institutions with the skills and tools needed to thrive in sustainability-driven innovation. Our workshops, masterclasses, and practical training modules focus on cutting-edge topics in science, agriculture, and technology, nurturing a new generation of problem-solvers ready to drive global impact.",
    icon: iconResearch,
    rationale:
      "Hands-on learning that transforms knowledge into practical solutions and career growth.",
    image: imageResearch,
  },

  {
    id: "policy-engagement-and-communication",
    title: "Policy Engagement and Communication",
    text: "RAISSAT bridges the gap between research and policy by translating complex scientific findings into actionable insights for policymakers, stakeholders, and communities. Through strategic advocacy, policy briefs, and stakeholder dialogues, we amplify evidence-based solutions that shape effective sustainable development policies. Our communications arm further ensures that sustainability narratives are accessible, engaging, and influential.",
    icon: "",
    rationale:
      "Clear, powerful communication that drives policy change and collective action.",
    image: imagePolicy,
  },

  {
    id: "youth-mentoring-and-engagement",
    title: "Youth Mentoring and Engagement",
    text: "In the journey to build sustainable, healthy, and inclusive communities, one truth remains constant: youth are not just the future, they are the now. We believe the future of sustainability lies in the hands of young innovators. These young minds are energetic, innovative, and deeply connected to the pulse of the communities we aim to impact. Through mentorship programs, fellowships, research opportunities, and interactive youth forums, RAISSAT nurtures creativity, leadership, and problem-solving skills among young people.",
    icon: "",
    rationale:
      "By connecting them with experts and platforms, we empower youth to lead sustainability initiatives in their communities and beyond.",
    image: imageMentoring,
  },
];

// FAQs

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "RAISSAT provides a range of services, including consultancy, training, and research project management. Our focus is on applied science, agriculture, sustainability, and technology. We aim to empower communities through innovative solutions.",
  },

  {
    question: "How can i get involved?",
    answer:
      "You can get involved by participating in our training programs or collaborating on research projects. We welcome partnerships that align with our mission. Visit our website for more information on opportunities.",
  },

  {
    question: "Where are you located?",
    answer:
      "RAISSAT operates globally, with a focus on local communities. Our headquarters are located in Ibadan, Abraka, Lagos, Ogun, Bayelsa, Yobe - Nigeria. We also have various project sites worldwide.",
  },

  {
    question: "What is your mission?",
    answer:
      "Our mission is to advance scientific research and practical training to empower communities. We focus on sustainability, food security, and technological progress. Through collaboration, we aim to create innovative solutions for a better future.",
  },

  {
    question: "How can I contact you?",
    answer:
      "You can contact us through our website's contact form or by emailing us directly. We are here to answer any questions you may have. Reach out today to learn more about our services.",
  },
];

const aboutPage = {
  about: {
    title: "About Us",
    text: "The Research Applied Institute for Sustainability in Science, Agriculture and Technology (RAISSAT) is a non-government research organization that works to promote sustainability that transforms the future through the bridging of science, agriculture and technology to create ground-breaking sustainable solutions. Our mission is rooted in the belief that critical global issues can be effectively addressed and sustainable solutions developed through impactful multidisciplinary research. Therefore, in implementing our various activities through research, education, community-based outreach, media projects and advocacy, the core values of “Sustainable Development Goals” are consistently integrated to achieve realistic and impactful results in science, agriculture and technology. As a leading organization actively engaged in research and training, RAISSAT is dedicated to advancing knowledge, driving innovation, and empowering communities through science-based solutions. Our team of global experts collaborates on groundbreaking research, practical training programs, and outreach initiatives designed to foster resilience and prosperity in communities locally and globally with emphasis on sustainable practices that effectively and efficiently balance economic growth, social equity, and environmental stewardship.",
  },

  vision: {
    title: "Our Vision",
    text: "To be a globally recognized leader in applied multidisciplinary research and training that integrates sustainability in science, agriculture, and technology, promoting innovation and empowering researchers with the knowledge, skills, and methodologies to address global challenges and build a more sustainable future.",
  },

  mision: {
    title: "Our Mission",
    text: "RAISSAT is committed to advancing scientific research and practical training for sustainable practices at the intersection of applied science, agriculture, and technology. We strive to empower individuals and organizations through knowledge, innovation, and collaborative action that promotes sustainable development, food security, and technological progress for a better future",
  },

  team: [
    {
      id: crypto.randomUUID(),
      name: "Elohozino O. Benneth",
      role: "Executive Director, RAISSAT",
      image: elohozino,
      profileSummary:
        "Elohozino Benneth is a distinguished research strategist, thought leader, and dynamic mentor whose career reflects a relentless pursuit of innovation, sustainability, and impact across science, agriculture, and technology. As the Executive Director of the Research Applied Institute for Sustainability in Science, Agriculture and Technology",
      profileFull: (
        <>
          <p className="mb-4">
            As a seasoned leader of multidisciplinary teams, she empowers
            researchers and practitioners alike to explore new frontiers in
            agricultural sustainability, technology integration, and scientific
            advancement. As an animal scientist and passionate welfare advocate
            at heart, Elohozino has championed the ethical treatment of animals
            in research and production systems. Her voice resonates across
            national and international platforms, where she engages in seminars,
            workshops, and policy dialogues to promote humane practices and
            improve animal welfare standards.
          </p>
          <p className="mb-4">
            Beyond her technical leadership, Elohozino is a powerful force in
            business development, leveraging her strategic foresight and
            relationship-building expertise to forge impactful partnerships,
            attract funding, and position RAISSAT as a thought leader in
            sustainable innovation.
          </p>
          <p className="mb-4">
            Elohozino Benneth is a distinguished research strategist, thought
            leader, and dynamic mentor whose career reflects a relentless
            pursuit of innovation, sustainability, and impact across science,
            agriculture, and technology. As the Executive Director of the
            Research Applied Institute for Sustainability in Science,
            Agriculture and Technology (RAISSAT), she leads with vision,
            integrity, and a deep commitment to fostering transformative change
            through evidence-based solutions.
          </p>
          <p className="mb-4">
            Holding dual Master’s degrees in Animal Behaviour and Welfare from
            Queens University Belfast, as well as Business Leadership and
            Management from Robert Gordon University, alongside a prestigious
            Chartered Management Institute (CMI) certification in Strategic
            Management and Leadership Practice, she exemplifies the perfect
            synergy of scientific expertise and executive acumen. Her
            multifaceted background equips her to guide RAISSAT’s
            multidisciplinary teams in tackling real-world challenges through
            rigorous research, innovative program design, and sustainable
            development strategies.
          </p>
          <p className="mb-4">
            Elohozino’s extensive experience coordinating complex projects and
            leading high-impact research initiatives sets her apart as a
            trailblazer in her field. She has consistently demonstrated
            excellence in orchestrating collaborative research environments,
            optimizing team performance, and translating scientific insights
            into scalable solutions that drive long-term value.
          </p>
          <p>
            Her ability to anticipate emerging trends and align research outputs
            with stakeholder needs ensures RAISSAT remains at the forefront of
            relevant, actionable science. At her core, Elohozino is a mentor –
            cultivating talent, nurturing young scientists, and building a
            legacy of excellence through knowledge sharing and professional
            development. Her passion for capacity building and inclusive
            leadership continues to inspire the next generation of researchers
            and changemakers. Under her leadership, RAISSAT is not just a
            research institution—it is a movement for sustainable
            transformation, a hub for collaborative ingenuity, and a beacon for
            future-forward science. Elohozino Benneth stands as a formidable
            leader, uniquely equipped to propel RAISSAT—and its partners—into a
            more sustainable, equitable, and innovative future.
          </p>
        </>
      ),
    },

    {
      id: crypto.randomUUID(),
      name: "Samuel I. Ogah",
      role: "Lead Executive, Business Development - Projects & Grants (Research)",
      image: samuel,
      profileSummary:
        "A dedicated researcher and academic with a decade-strong foundation in aquaculture and animal science. He holds Bachelor's and Master's degrees in Aquaculture.",
      profileFull: (
        <>
          <p className="mb-4">
            Samuel Ogah is a dedicated researcher and academic with a
            decade-strong foundation in aquaculture and animal science. He holds
            Bachelor's and Master's degrees in Aquaculture. He is currently
            affiliated to the Joseph Sarwuan Tarka University Makurdi, Nigeria
            where he holds a tenured academic and research position. His
            academic and professional journey reflects a deep commitment to
            advancing sustainable agricultural and aquatic systems, with a
            significant interest in data management, food safety, and
            environmental stewardship. He brings all this experience together in
            heading the college of Agriculture at RAISSAT.
          </p>
          <p className="mb-4">
            With international experience and a multicultural perspective,
            Samuel brings valuable insights into research collaboration,
            training program development, and institutional governance. His
            areas of focus include fisheries management, and agricultural
            innovation tailored to emerging economies. He is a member of the
            Fisheries Society of Nigeria and the Malaysian Fisheries Society. He
            holds research collaborations across Africa in countries like
            Malawi, South Africa and Ghana working on mitigating the risk of
            antimicrobial resistance in African aquaculture.
          </p>
          <p className="mb-4">
            He brings proposal and grant winning experience of 3 years in the
            development sector, leading teams that won over $150,000 in
            development grants for food security and animal welfare. A skill he
            transfers to RAISSAT heading its grant application unit. Samuel also
            brings a passion for community engagement and capacity building,
            especially within African and Latin American contexts. As a board
            member, he contributes strategic leadership and a forward-thinking
            approach to research and training initiatives that bridge science
            and society.
          </p>
        </>
      ),
    },

    {
      id: crypto.randomUUID(),
      name: "Goshen David Miteu",
      role: "Lead Executive for Innovation & Project Implementation (Research)",
      image: goshen,
      profileSummary: "An ambitious and forward-thinking Biomedical Scientist that derives fulfillment in knowing that his work has an impact in the direction that the field is moving forward.",
      profileFull: (
        <>
          <p className="mb-4">
            Goshen David Miteu is an ambitious and forward-thinking Biomedical
            Scientist that derives fulfillment in knowing that his work has an
            impact in the direction that the field is moving forward. As the
            Director of the School of Science and Lead Executive for Innovation
            & Project Implementation (Research), he is instrumental in shaping
            and steering projects that address global challenges with
            sustainable solutions.
          </p>
          <p className="mb-4 italic font-semibold">
            Academic journey and excellence Goshen’s foundational training was
            at Caleb University, Lagos, Nigeria, where he graduated with a
            First-Class Honours degree in Biochemistry, achieving an impressive
            CGPA of 4.90/5.00. He was also the overall best
            student/valedictorian of his cohort and earned multiple prizes. He
            earned a Master’s degree with distinction in Biotechnology from the
            University of Nottingham, United Kingdom as a Commonwealth Scholar.
            Alongside the prestigious commonwealth scholarship, he has also won
            reputable awards like the I-Scholar Initiative Award and the
            Education, USA Membership Award in 2021. His academic rigor is
            further defined by an array of published works in reputable
            peer-reviewed international journals with growing numbers of
            citations, each contributing to the growing body of knowledge in
            biomedical research.
          </p>
          <p className="mb-4">
            <span className="font-semibold">Professional Distinctions</span>
            Goshen’s leadership extends well beyond academia. His scholarly
            contributions have earned him membership in several esteemed
            professional organizations. He is a full member of the Sigma Xi
            Scientific Research Honor Society. This is an exclusive community
            that recognizes significant scholarly achievements and contributions
            to scientific advancement. This prestigious society is home to more
            than 200 Nobel prize winners where membership is by
            invitation/nomination for scholarly achievements and contributions
            to the advancement of knowledge in the field.
          </p>
          <p>
            He also holds membership in the Society for Experimental Biology and
            Medicine, which acknowledges individuals actively engaged in
            experimental and biomedical research, and the Nigerian Society of
            Biochemistry and Molecular Biology (NSBMB). This demonstrates his
            continued engagement with the scientific community locally and
            internationally. He is also a collaborative leader and community
            advocate, evident in the multidisciplinary work attached to his
            profile. He is deeply intentional about building sustainable
            networks, often volunteering and partnering with scientists and
            organisations across the globe to make more impact through academic
            and community project
          </p>
        </>
      ),
    },

    {
      id: crypto.randomUUID(),
      name: "Sunday G. James",
      role: "Lead Executive, Operations & Logistics",
      image: sunday,
      profileSummary:
        "A passionate and impact-driven professional committed to advancing sustainability through the integration of science, agriculture, and technology.",
      profileFull: (
        <>
          <p className="mb-4">
            Sunday Godwin James is a passionate and impact-driven professional
            committed to advancing sustainability through the integration of
            science, agriculture, and technology. With a Bachelor of Science
            degree in Applied Biology from Ebonyi State University, Nigeria, he
            has cultivated a multidisciplinary career dedicated to creating
            innovative agricultural solutions and strengthening food systems for
            resilient and sustainable development.
          </p>
          <p className="mb-4 italic">
            As the Lead Executive for Operations and Logistics at the Research
            Applied Institute for Sustainability in Science, Agriculture, and
            Technology (RAISSAT), Sunday plays a central role in driving the
            organization’s mission. He ensures the seamless execution of field
            operations, manages technical operations and equipment acquisition,
            and provides vital technical expertise that supports RAISSAT’s
            research and project teams. Through his work, Sunday embodies
            RAISSAT’s values by bridging research, education, and
            community-based outreach to deliver sustainable solutions that align
            with the Sustainable Development Goals (SDGs). His dedication lies
            in empowering farming communities, strengthening agricultural value
            chains, and ensuring that science-driven solutions translate into
            real-world impact.
          </p>
          <p className="mb-4">
            Beyond his operational expertise, Sunday has contributed to research
            in agriculture, food traceability, and climate-smart agriculture,
            co-authoring peer-reviewed publications and engaging in over 200
            literature reviews. His work underscores a strong commitment to
            evidence-based, ethical, and scalable solutions for global food
            systems.
          </p>
        </>
      ),
    },

    // {
    //   id: crypto.randomUUID(),
    //   name: "Josephine O. Adebayo",
    //   role: "Lead Executive, Corporate Administrative Communications",
    //   image: josephine,
    //   profile:
    //     "A pioneering researcher in aquaculture sustainability and nutrigenomics, serving as the Lead Executive for Corporate Administrative Communications at the Research Applied Institute for Sustainability in Science, Agriculture and Technology (RAISSAT).",
    // },

    {
      id: crypto.randomUUID(),
      name: "Christianah Oki",
      role: "Senior Compliance and Outreach/Youth Engagement Officer",
      image: christiana,
      profileSummary:
        "A dedicated parasitologist, conservationist, and global health researcher whose work integrates science, agriculture, and technology to address some of the world’s most pressing sustainability challenges.",
      profileFull: (
        <>
          <p className="mb-4">
            Christianah Oki is a dedicated parasitologist, conservationist, and
            global health researcher whose work integrates science, agriculture,
            and technology to address some of the world’s most pressing
            sustainability challenges. With a multidisciplinary focus on
            neglected tropical diseases (NTDs), wildlife conservation, climate
            change, reproductive health, and community-based interventions, she
            is deeply committed to advancing the Sustainable Development Goals
            (SDGs) through applied research and advocacy.
          </p>
          <p className="mb-4">
            In her role as Senior Compliance and Outreach Officer & Youth
            Engagement Officer at the Research Applied Institute for
            Sustainability in Science, Agriculture and Technology (RAISSAT),
            Christianah leads efforts to strengthen institutional compliance,
            foster strategic partnerships, and expand outreach initiatives. She
            actively engages youth and local communities in research-driven
            programs, ensuring inclusivity and sustainability in RAISSAT’s work.
            Her contributions bridge global health, environmental
            sustainability, and policy advocacy, driving innovative,
            evidence-based solutions that impact both local and global
            communities.
          </p>
          <p className="mb-4">
            Through her leadership, Christianah champions the integration of
            science, agriculture, and technology in tackling issues at the nexus
            of infectious diseases, environmental health, and sustainable
            development, amplifying RAISSAT’s mission of transforming the future
            through multidisciplinary research and action.
          </p>
        </>
      ),
    },

    {
      id: crypto.randomUUID(),
      name: "Adejoke A. Ododor",
      role: "Administrative Secretary",
      image: adejoke,
      profileSummary:
        " An Administrative Secretary at the Research Applied Institute for Sustainability in Science, Agriculture and Technology (RAISSAT), where she plays a pivotal role in ensuring smooth organizational operations that support the institute’s mission",
      profileFull: (
        <>
          <p className="mb-4">
            Adejoke Ododor is an Administrative Secretary at the Research
            Applied Institute for Sustainability in Science, Agriculture and
            Technology (RAISSAT), where she plays a pivotal role in ensuring
            smooth organizational operations that support the institute’s
            mission of advancing sustainable solutions through multidisciplinary
            research, education, outreach, and advocacy.
          </p>
          <p className="mb-4">
            With strong expertise in office administration, organizational
            management, and communication, Adejoke provides the administrative
            backbone that enables RAISSAT’s research and community initiatives
            to thrive. She is responsible for coordinating executive schedules,
            facilitating effective communication across departments, and
            ensuring seamless documentation and record-keeping to maintain
            transparency and accountability.
          </p>
          <p className="mb-4">
            Her meticulous attention to detail, excellent organizational
            abilities, and proactive approach in managing tasks align with
            RAISSAT’s values of professionalism, sustainability, and impactful
            results. Adejoke is dedicated to fostering an efficient and
            collaborative work environment where science, agriculture, and
            technology intersect to shape sustainable futures
          </p>
        </>
      ),
    },
  ],
};

const whatWeDo = [
  {
    title: "Agriculture & Food Security:",
    description:
      "Agriculture remains the backbone of many African economies, yet it is often seen as outdated or unattractive by young people. RAISSAT will engage students in agritech, sustainable farming practices, and value chain innovation, thereby shifting this mindset and harnessing youth potential in transforming Africa’s agricultural landscape. Example: The students can be supported to launch smart farms, run campus-based agribusiness incubators, or lead research on local crop adaptation and food preservation methods.",
    image: agric,
    flexDirection: "",
  },
  {
    title: "Public Health Advocacy:",
    description:
      "Students are natural communicators. When empowered with accurate health information, they can lead peer education campaigns, organize campus health outreaches, and promote awareness on issues like infectious diseases, hygiene, mental health, and reproductive health. Example: A student-led RAISSAT health club on campus can host awareness days on neglected tropical diseases, emerging infectious diseases, malaria prevention, or mental health.",
    image: publicHealth,
    flexDirection: "row-reverse",
  },

  {
    title: "Environmental Sustainability:",
    description:
      "Young people are often the most passionate environmental stewards. Through clubs, projects, and innovation challenges, they can contribute fresh ideas to conservation, recycling, climate action, and wildlife protection. Example: Students can lead campus tree-planting drives, research indigenous biodiversity, or create awareness campaigns around endangered species.",
    image: sustainability,
    flexDirection: "",
  },

  {
    title: "Research and Innovation:",
    description:
      "Universities and polytechnics are research hubs. When the students are getting engaged, RAISSAT taps into a pool of talent eager to explore practical solutions. The students can contribute to data collection, surveys, community-based participatory research, and even co-author publications. Example: RAISSAT will collaborate with academic departments to integrate student-led research into its community projects",
    image: innovation,
    flexDirection: "row-reverse",
  },
  {
    title: "Technology for Social Impact:",
    description:
      "Tertiary institutions are fertile ground for digital innovation. The students can design mobile apps, build websites, or manage digital campaigns that amplify RAISSAT’s impact and connect underserved communities with resources. Example: A campus tech club could design an app to track water quality or create animated videos for health education in local languages.",
    image: technology,
    flexDirection: "",
  },
];

const media = {
  blogs: [
    {
      title: "Ethiopia's Battle Against the Locust Invation",
      body: "RAISSAT has embarked on an inspiring journey to empower smallholder farmers by providing them with extensive training in sustainable soil management techniques and effective water conservation practices. Over the past few ",
      author: "Elohozino O. Benneth",
      authorProfile: elohozino,
      date: "June 10, 2024",
      thumbnail: locust,
    },

    {
      title: "Conflict Between Herdsmen and Farmers in North Central Nigeria",
      body: "Through the innovative application of cutting-edge science and extensive trials led by dedicated farmers, RAISSAT has successfully introduced a diverse range of natural pest control methods that are revolutionizing the agricultural landscape.",
      author: "Goshen David Miteu",
      authorProfile: elohozino,
      date: "June 10, 2024",
      thumbnail: farmConflict,
    },

    {
      title: "Integrated Pest Management Program - West Africa",
      body: "AISSAT has embarked on an inspiring journey to empower smallholder farmers by providing them with extensive training in sustainable soil management techniques and effective water conservation practices. Over the past few ",
      author: "Goshen David Miteu",
      authorProfile: elohozino,
      date: "June 10, 2024",
      thumbnail: pestManagement,
    },
  ],
  articles: [
    {
      title: "Understanding Monkey Pox: A Growing Concern in Congo DRC",
      body: "RAISSAT has embarked on an inspiring journey to empower smallholder farmers by providing them with extensive training in sustainable soil management techniques and effective water conservation practices. Over the past few ",
      author: "Christianah Oki",
      date: "June 10, 2024",
    },

    {
      title: "Mad Cow Disease: A Brief Overview of BSE",
      body: "Through the innovative application of cutting-edge science and extensive trials led by dedicated farmers, RAISSAT has successfully introduced a diverse range of natural pest control methods that are revolutionizing the agricultural landscape. ",
      author: "Adejoke A. Ododor",
      date: "June 10, 2024",
    },

    {
      title: "Climate-Resilient Farming Initiative - Northern Ghana",
      body: "RAISSAT has embarked on an inspiring journey to empower smallholder farmers by providing them with extensive training in sustainable soil management techniques and effective water conservation practices. Over the past few  ",
      author: "Samuel I. Ogah",
      date: "June 10, 2024",
    },
  ],
  newsletters: [],
  resources: [],
};

export { navItems, about, services, faqs, aboutPage, whatWeDo, media };
