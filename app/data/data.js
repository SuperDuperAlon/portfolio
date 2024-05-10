import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiSend } from 'react-icons/fi';

const social = [
  {
    name: "gh",
    icon: <FaGithub />,
    link: "https://github.com/SuperDuperAlon",
    delay: 0.6
  },
  {
    name: "li",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/alon-mlievski-6756aa74/",
    delay: 0.7
  },
  {
    name: "wa",
    icon: <FaWhatsapp />,
    link: "https://wa.me/972504438778",
    delay: 0.8
  },
  {
    name: "mail",
    icon: <FiSend />,
    link: "mailto:alonmlievski@gmail.com",
    delay: 0.9
  },
  {
    name: "fb",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/alon.mlievski",
    delay: 1.0
  },
];

const projects = [
  {
    name: "Anyplace",
    description:
      "An e2e Airbnb clone using client and server side tools. Was built as a final project at Coding Academy with my partners Noah Markovich and Yarden Zeron",
    image: "/assets/Screenshots/anyplace.jpg",
    url: "https://anyplace-h06h.onrender.com/",
    stack: [
      "React",
      "Redux",
      "Javascript",
      "Node",
      "Express",
      "Sass",
      "Socket.io",
      "MongoDB",
    ],
  },
  {
    name: "Boarder",
    description: "A Trello clone built using Sonny Sangha's Trello tutorial. In this tutorial I learned how to use technologies such as Tailwind CSS, Zustand, Appwrite, Typescript, etc.",
    image: "/assets/Screenshots/boarder.jpg",
    url: "https://boarder-flame.vercel.app/",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Appwrite.io",
      "Beautiful DnD",
      "Headless UI",
    ],
  },
  {
    name: "Car Showcase",
    description: "A full car showcase built using Javascript Mastery's tutorial. In this project I learned how to use Headless UI and Typescript",
    image: "/assets/Screenshots/car_app.jpg",
    url: "https://car-showcase-six-tawny.vercel.app/",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Headless UI",
    ],
  },
  {
    name: "Web Portfolio",
    description: "This website",
    url: "https://portfolio-superduperalon.vercel.app/",
    image: "/assets/Screenshots/portfolio.jpg",
    stack: ["React", "Next.js", "Sass", "Javascript", "Framer-Motion"],
  },
  {
    name: "Minesweeper",
    description: "The classic game - Sprint #1 project at Coding Academy",
    url: "https://superduperalon.github.io/Minesweeper/",
    image: "/assets/Screenshots/minesweeper.jpg",
    stack: ["Javascript", "CSS"],
  },
  {
    name: "MemeGen",
    description: "Meme Generator - Sprint #2 at Coding Academy",
    url: "https://superduperalon.github.io/Meme-Generator/",
    image: "/assets/Screenshots/memegen.jpg",
    stack: ["Javascript", "CSS"],
  },
];

const otherProjects = [
  {
    name: "Simon",
    description: "The classic game - Angela Yu Udemy Course",
    url: "https://superduperalon.github.io/Meme-Generator/",
    stack: ["Javascript", "CSS"],
  },
  {
    name: "Movie Seats",
    description: "Brad Traversy Udemy Course",
    url: "https://superduperalon.github.io/Minesweeper/",
    stack: ["Javascript", "CSS"],
  },
];

const experience = [
  {
    name: "Prequel",
    website: "https://prequel.tv/",
    position: "Publishers Account Manager",
    date: "June 2021 - October 2022",
    actions: [
      "Managing premium international and local supply-side accounts",
      "Researching ad-servers - Found a way to keep the company compliant with a premium SSP, generating a 6-digit profit in 7 months",
      "Assisting and mentoring fellow junior team members",
      "While at the company, we've managed to break monthly, quarterly, and yearly profit records",
    ],
  },
  {
    name: "Zippor Media",
    website: "https://www.zippormedia.com/",
    position: "Publishers Account Manager",
    date: "July 2019 - March 2020",
    actions: [
      "Managing more than 50 international and local accounts supply side accounts",
      "Generating data-based actionable items to increase revenue and ROI",
      "Grew mutual activity by 15% with more than 30 accounts",
      "While at the company - we've managed to break consecutive profit records",
    ],
  },
  {
    name: "Meirovitch Public Relations",
    website: "https://www.meirovitch.com/",
    position: "Account Executive",
    date: "August 2015 - June 2019",
    actions: [
      "Co-leading the international activity at the agency",
      "Forming relationships with tech journalists and analysts across the globe",
      "Generating media exposure in 10+ languages, and 50+ countries. In outlets such as Techcrunch, Forbes, etc.",
      "While at the company - its clientele doubled, a 100% increase",
    ],
  },
  {
    name: "Meretz",
    website: "https://meretz.org.il/",
    position: "Regional Campaign Manager",
    date: "October 2014 - January 2015",
    actions: [
      "Co-managing Meretz's electoral campaign in southern Israel",
      "Working with members of Knesset and their advisors",
      "Coordinating activities and events for candidates",
      "Managing a team of 20 volunteers",
    ],
  },
  {
    name: "Ashdodim Movement",
    website: "https://www.facebook.com/AshdodimMovement/",
    position: "Head of Communications",
    date: "March 2014 - July 2015",
    actions: [
      "Part of the managing team, leading the media front in communal projects in the movement",
      "Creating and managing content for social media",
      "Promoting and leading various activities: youth-oriented politics course, social media campaign against the local water company, an orthodox-secular religious seminary, etc.",
    ],
  },
];

export { social, projects, otherProjects, experience } 