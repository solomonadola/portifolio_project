import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Admexai",
    iconBg: "#383E56",
    date: "March 2022 - Augest 2023",
    points: [
      "Collaborated with teams to develop a solar need estimation calculator web app.",
      "Worked with front-end developers to integrate the calculator with the user interface.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Ensured that the calculator was scalable, secure, and efficient.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Agri-Smart",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - JUl 2023",
    points: [
      "Developing and maintaining mobile applications using React Nativev and other related technologies.",
      "Collaborated with teams to develop a mobile app for the smart irrigation system using React Native.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Back-end Developer",
    company_name: "Agri-smart",
    iconBg: "#383E56",
    date: "Sep 2022 - Jul 2023",
    points: [
      "Developing and maintaining a backend api's using different Nodejs.",
      "Collaborated with teams to develop different APIs for the smart irrigation system.",
      "Worked with front-end developers to integrate the APIs with the user interface.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Hub",
    description:
      "CarHub is a modern single-page application built with Next.js 13. It allows users to easily find detailed specifications for any vehicle. The application has advanced search functionality and a responsive design with Tailwind CSS. CarHub was developed by collaborating with teams and working with front-end developers to integrate the APIs with the user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Solar Calculator",
    description:
      "A solar calculator is a tool that estimates the solar energy potential of a given location. It takes into account factors such as roof size, shape, shading, local weather, and electricity prices to provide an estimate of the savings that can be achieved by installing solar panels. The calculator can also help determine the size of the solar panel system needed to meet the energy needs of a household or business.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Smart irrigation",
    description:
      " smart irrigation system is a software that uses machine learning algorithms to optimize water usage in agriculture. It consists of a mobile app and backend API that allows users to monitor and control the irrigation system remotely. The system is designed to be scalable, secure, and efficient.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
