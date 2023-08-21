import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import alon from "../../public/assets/alon.jpg";
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
} from "react-icons/si";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  ];

  return (
    <section ref={ref} className="section-layout" id="about">
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s 0.5s",
        }}
      >
        <div className="about-section">
          <div className="img-container">
            <Image
              src={alon}
              width={400}
              height={400}
              className="about-img"
              alt="about-me-photo"
            />
          </div>
          <p>
            A marketing professional turned Full Stack Developer who&apos;s <span className="highlight">passionate</span> about using code to create beautiful and seamless digital solutions. As a Coding Academy graduate, my primary stack is MERN, although these days I&apos;m incorporating more skills into my digital tool belt.
          </p>
          <p>
            I come with varied experience and soft skills from my past endeavors where I was a <span className="highlight">significant part</span> of the companies I&apos;ve worked at, helping them grow their revenue and clientele.
          </p>
          <p>
            An ardent and <span className="highlight">organized autodidact</span>, who&apos;s truly passionate about learning and growing as a client-side developer.
          </p>

          <div className="test">
            <h1>Languages</h1>
            <div className="stack-list mar-b16">
              {languages.map((icon, idx) => {
                return (
                  <div className="tech-stack-list" key={idx}>
                    <div>
                    {icon.img}
                    </div>
                    <div>{icon.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="test">
            <h1>Frameworks</h1>
            <div className="stack-list mar-b16">
              {frameworks.map((icon, idx) => {
                return (
                  <div className="tech-stack-list" key={idx}>
                    <div>
                    {icon.img}
                    </div>
                    <div>{icon.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="test">
            <h1>Styling</h1>
            <div className="stack-list mar-b16">
              {styling.map((icon, idx) => {
                return (
                  <div className="tech-stack-list" key={idx}>
                    <div>
                    {icon.img}
                    </div>
                    <div>{icon.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="test">
            <h1>Backend</h1>
            <div className="stack-list mar-b16">
              {back.map((icon, idx) => {
                return (
                  <div className="tech-stack-list" key={idx}>
                    <div>
                    {icon.img}
                    </div>
                    <div>{icon.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
