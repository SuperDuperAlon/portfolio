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
        "An E2E Airbnb clone using client and server side tools. Was built as a final project at Coding Academy",
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
      description: "Trello clone",
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
      description: "Full car showcase",
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

export { social, projects, otherProjects } 