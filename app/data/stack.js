import { FaJava, FaReact } from "react-icons/fa";
import { GiSloth } from "react-icons/gi";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
  SiVuedotjs,
  SiSass,
  SiExpress,
  SiSqlite,
  SiAngular,
  SiRedux,
  SiNextdotjs,
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiJquery,
  SiAppwrite,
  SiHeadlessui,
  SiMui,
  SiPostman,
} from "react-icons/si";

const languages = [
    { name: "HTML", img: <SiHtml5 /> },
    { name: "Javascript (ES6+)", img: <SiJavascript /> },
    { name: "Typescript", img: <SiTypescript /> },
    { name: "Java", img: <FaJava /> },
  ]

  const frameworks = [
    { name: "React", img: <FaReact /> },
    { name: "Next.js", img: <SiNextdotjs /> },
    { name: "Vue", img: <SiVuedotjs /> },
    { name: "Angular", img: <SiAngular /> },
    { name: "Redux", img: <SiRedux /> },
    { name: "Zustand", img: <GiSloth /> },
  ]

  const styling = [
    { name: "CSS", img: <SiCss3 /> },
    { name: "Sass", img: <SiSass /> },
    { name: "Bootstrap", img: <SiBootstrap /> },
    { name: "JQuery", img: <SiJquery /> },
    { name: "Material UI", img: <SiMui /> },
    { name: "Headless UI", img: <SiHeadlessui /> },
  ]

  const back = [
    { name: "Node.js", img: <SiNodedotjs /> },
    { name: "Express.js", img: <SiExpress /> },
    { name: "SQL", img: <SiSqlite /> },
    { name: "MongoDB", img: <SiMongodb /> },
    { name: "Appwrite", img: <SiAppwrite/> },
    { name: "Postman", img: <SiPostman/> },
  ];

  export { languages, frameworks, styling, back } 