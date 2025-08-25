import { consult, management, research } from "../assets/assets";


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
    route: "/what-we-do",
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

const about = {
  title: "Who We Are",
  text: "The Research Applied Institute for Sustainability in Science, Agriculture and Technology (RAISSAT) is a non-government research organization that works to promote sustainability that transforms the future through the bridging of science, agriculture and technology to create ground-breaking sustainable solutions. Our mission is rooted in the belief that critical global issues can be effectively addressed and sustainable solutions developed through impactful multidisciplinary research. Therefore, in implementing our various activities through research, education, community-based outreach, media projects and advocacy, the core values of “Sustainable Development Goals” are consistently integrated to achieve realistic and impactful results in science, agriculture and technology.",
};

const services = [
  {
    icon: consult,
    title: "Consultancy",
    text: "We provide expert-driven sustainability consultancy that helps organizations, governments, and communities integrate eco-conscious practices into their operations.....",
  },

  {
    icon: management,
    title: "Project Management",
    text: "From conception to completion, we manage research projects with precision and impact in mind. RAISSAT specializes in coordinating multidisciplinary initiatives that tackle pressing global challenges....",
  },


  {
    icon: research,
    title: "Research-Inclined Capacity Building",
    text: "We design and deliver training programs that empower researchers, professionals, and institutions with the skills and tools needed to thrive in sustainability-driven innovation...",
  },
];

export { navItems, about, services };
