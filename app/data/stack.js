import { FaReact } from "react-icons/fa";
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
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiMicrosoftexcel,
  SiGooglesheets,
  SiSlack,
  SiFigma,
  SiTrello,
} from "react-icons/si";
import { CgMonday } from "react-icons/cg";



const others = [
  { name: "Postman", img: <SiPostman /> },
  { name: "Git", img: <SiGit /> },
  { name: "Excel", img: <SiMicrosoftexcel /> },
  { name: "Sheets", img: <SiGooglesheets /> },
  { name: "Slack", img: <  SiSlack /> },
  { name: "Monday", img: <CgMonday /> },
  { name: "Trello", img: <SiTrello /> },
  { name: "Figma", img: <SiFigma /> },
]

const front = [
  { name: "HTML5", img: <SiHtml5 /> },
  { name: "Javascript (ES6+)", img: <SiJavascript /> },
  { name: "Typescript", img: <SiTypescript /> },
  { name: "CSS3", img: <SiCss3 /> },
  { name: "Sass", img: <SiSass /> },
  { name: "Tailwind", img: <SiTailwindcss /> },
  { name: "React", img: <FaReact /> },
  { name: "Next.js", img: <SiNextdotjs /> },
  { name: "Vue", img: <SiVuedotjs /> },
  { name: "Redux", img: <SiRedux /> },
  { name: "Zustand", img: <GiSloth /> },
  { name: "Bootstrap", img: <SiBootstrap /> },
  { name: "JQuery", img: <SiJquery /> },
  { name: "Material UI", img: <SiMui /> },
  { name: "Headless UI", img: <SiHeadlessui /> },
  { name: "Framer Motion", img: <SiFramer /> },
]

const back = [
  { name: "Node.js", img: <SiNodedotjs /> },
  { name: "Express.js", img: <SiExpress /> },
  { name: "MongoDB", img: <SiMongodb /> },
  { name: "Appwrite", img: <SiAppwrite /> },
  { name: "SQL", img: <SiSqlite /> },

];






export { front, back, others } 