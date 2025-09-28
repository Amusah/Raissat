import { iconConsult, iconManagement, iconResearch } from "../assets/assets";

// staff Profiles images
import {
  elohozino,
  samuel,
  goshen,
  sunday,
  josephine,
  christiana,
  adejoke,
  agric,
  publicHealth,
  sustainability,
  innovation,
  technology
} from "../assets/assets";

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

// About Section component
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
    rationale: "Tailored, research-backed strategies that bridge science and real-world application.Actionable insights and strategies that drive real-world sustainability impact",
    image: ''
  },

  {
    id: "project-management",
    title: "Project Management",
    text: "From conception to completion, we manage research projects with precision and impact in mind. RAISSAT specializes in coordinating multidisciplinary initiatives that tackle pressing global challenges-climate change, food security, renewable energy, and more. We ensure effective planning, resource mobilization, monitoring, and knowledge dissemination so that projects don’t just exist on paper but create meaningful change on the ground.",
    icon: iconManagement,
    rationale: "Structured project execution that turns ground-breaking ideas into transformative realities",
    image: ''
  },

  {
    id: "research-inclined-capacity-building",
    title: "Research-Inclined Capacity Building",
    text: "We design and deliver training programs that empower researchers, professionals, and institutions with the skills and tools needed to thrive in sustainability-driven innovation. Our workshops, masterclasses, and practical training modules focus on cutting-edge topics in science, agriculture, and technology, nurturing a new generation of problem-solvers ready to drive global impact.",
    icon: iconResearch,
    rationale: "Hands-on learning that transforms knowledge into practical solutions and career growth.",
    image: ''
  },

  {
    id: "policy-engagement-and-communication",
    title: "Policy Engagement and Communication",
    text: "RAISSAT bridges the gap between research and policy by translating complex scientific findings into actionable insights for policymakers, stakeholders, and communities. Through strategic advocacy, policy briefs, and stakeholder dialogues, we amplify evidence-based solutions that shape effective sustainable development policies. Our communications arm further ensures that sustainability narratives are accessible, engaging, and influential.",
    icon: "",
    rationale: "Clear, powerful communication that drives policy change and collective action.",
    image: ''
  },

  {
    id: "youth-mentoring-and-engagement",
    title: "Youth Mentoring and Engagement",
    text: "In the journey to build sustainable, healthy, and inclusive communities, one truth remains constant: youth are not just the future, they are the now. We believe the future of sustainability lies in the hands of young innovators. These young minds are energetic, innovative, and deeply connected to the pulse of the communities we aim to impact. Through mentorship programs, fellowships, research opportunities, and interactive youth forums, RAISSAT nurtures creativity, leadership, and problem-solving skills among young people.",
    icon: "",
    rationale: "By connecting them with experts and platforms, we empower youth to lead sustainability initiatives in their communities and beyond.",
    image: ''
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
      name: "Elohozino O. Benneth",
      role: "Executive Director",
      image: elohozino,
      profile:
        "Elohozino Benneth is a distinguished research strategist, thought leader, and dynamic mentor whose career reflects a relentless pursuit of innovation, sustainability, and impact across science, agriculture, and technology. ",
    },

    {
      name: "Samuel I. Ogah",
      role: "Samuel I. Ogah Lead Executive, Business Development - Projects & Grants (Research)",
      image: samuel,
      profile:
        "A dedicated researcher and academic with a decade-strong foundation in aquaculture and animal science. He holds Bachelor's and Master's degrees in Aquaculture.",
    },

    {
      name: "Goshen David Miteu",
      role: "Lead Executive for Innovation & Project Implementation (Research)",
      image: goshen,
      profile:
        "An ambitious and forward-thinking Biomedical Scientist that derives fulfillment in knowing that his work has an impact in the direction that the field is moving forward.",
    },

    {
      name: "Sunday G. James",
      role: "Lead Executive, Operations & Logistics",
      image: sunday,
      profile:
        "A passionate and impact-driven professional committed to advancing sustainability through the integration of science, agriculture, and technology.",
    },

    {
      name: "Josephine O. Adebayo",
      role: "Lead Executive, Corporate Administrative Communications",
      image: josephine,
      profile:
        "A pioneering researcher in aquaculture sustainability and nutrigenomics, serving as the Lead Executive for Corporate Administrative Communications at the Research Applied Institute for Sustainability in Science, Agriculture and Technology (RAISSAT).",
    },

    {
      name: "Christianah Oki",
      role: "Senior Compliance and Outreach/Youth Engagement Officer",
      image: christiana,
      profile:
        "A dedicated parasitologist, conservationist, and global health researcher whose work integrates science, agriculture, and technology to address some of the world’s most pressing sustainability challenges.",
    },

    {
      name: "Adejoke A. Ododor",
      role: 'Administrative Secretary',
      image: adejoke,
      profile:
        " An Administrative Secretary at the Research Applied Institute for Sustainability in Science, Agriculture and Technology (RAISSAT), where she plays a pivotal role in ensuring smooth organizational operations that support the institute’s mission",
    }
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

export { navItems, about, services, faqs, aboutPage, whatWeDo };
