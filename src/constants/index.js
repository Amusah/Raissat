import { consult, management, research } from "../assets/assets";

import {
  elohozino,
  samuel,
  goshen,
  sunday,
  josephine,
  christiana,
  adejoke,
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

// About Section component
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

export { navItems, about, services, faqs, aboutPage };
