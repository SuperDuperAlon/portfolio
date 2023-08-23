import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiSend } from 'react-icons/fi';

const social = [
    {
        name: "gh",
        icon: <FaGithub />,
        link: "https://github.com/SuperDuperAlon",
    },
    {
        name: "li",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/alon-mlievski-6756aa74/",
    },
    {
        name: "wa",
        icon: <FaWhatsapp />,
        link: "https://wa.me/972504438778",
    },
    {
        name: "mail",
        icon: <FiSend />,
        link: "mailto:alonmlievski@gmail.com",
    },
    {
        name: "fb",
        icon: <FaFacebook />,
        link: "https://www.facebook.com/alon.mlievski",
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
        "Managing multiple video publisher accounts",
        "Analyzing and reporting Video Ads data and KPIs from various servers",
        "Cultivating relationships and negotiating with publishers",
        "Managing Ad-ops personnel",
      ],
    },
    {
      name: "Zippor Media",
      website: "https://www.zippormedia.com/",
      position: "Publishers Account Manager",
      date: "July 2019 - March 2020",
      actions: [
        "Managing multiple video publisher accounts",
        "Analyzing and reporting Video Ads data and KPIs from various servers",
        "Cultivating relationships and negotiating with publishers",
        "Managing Ad-ops personnel",
      ],
    },
    {
      name: "Meirovitch Public Relations",
      website: "https://www.meirovitch.com/",
      position: "Account Executive",
      date: "August 2015 - June 2019",
      actions: [
        "Co-leading the international activity at the agency",
        "Forming relationships with journalists and analysts throughout the globe",
        "Working with C-level executives directly providing vast media exposure in outlets such as TechCrunch",
        "During my time in the company we've managed to double our clientele",
      ],
    },
    {
      name: "Meretz",
      website: "https://meretz.org.il/",
      position: "Regional Campaign Manager",
      date: "October 2014 - January 2015",
      actions: [
        "Managing Meretz's electoral campaign in southern Israel",
        "Coordinating activities and events for candidates members of the Knesset",
        "Managing a team of volunteers",
        "After the campaign I was a parliamentary intern at MK Ilan Gilon’s chambers for five months",
      ],
    },
    {
      name: "Ashdodim Movement",
      website: "https://www.facebook.com/AshdodimMovement/",
      position: "Head of Communications",
      date: "March 2014 - July 2015",
      actions: [
        "Being a part of the managing team",
        "leading the media front in communal projects in of the movement",
        "Promoting various activities: youth oriented politics course, an orthodox-secular religious seminary, etc.",
      ],
    },
  ];

export { social, projects, otherProjects, experience } 