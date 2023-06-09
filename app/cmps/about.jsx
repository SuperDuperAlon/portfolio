import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import alon from "../../public/assets/alon.jpg";
import { FaJava, FaReact } from "react-icons/fa";
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
} from "react-icons/si";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const icons = [
    { name: "Javascript (ES6+)", img: <SiJavascript /> },
    { name: "CSS", img: <SiCss3 /> },
    { name: "HTML", img: <SiHtml5 /> },
    { name: "Typescript", img: <SiTypescript /> },
    { name: "React", img: <FaReact /> },
    { name: "Redux", img: <SiRedux /> },
    { name: "Next.js", img: <SiNextdotjs /> },
    { name: "Vue", img: <SiVuedotjs /> },
    { name: "Angular", img: <SiAngular /> },
    { name: "Sass", img: <SiSass /> },
    { name: "Node.js", img: <SiNodedotjs /> },
    { name: "Express.js", img: <SiExpress /> },
    { name: "Java", img: <FaJava /> },
    { name: "SQL", img: <SiSqlite /> },
    { name: "MongoDB", img: <SiMongodb /> },
    { name: "Bootstrap", img: <SiBootstrap /> },
    { name: "JQuery", img: <SiJquery /> },
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
        <h1 className="section-header">About Me</h1>
        <div className="about-section">
          <div className="img-container">
            <Image
              src={alon}
              width={100}
              height={100}
              className="about-img"
              alt="about-me-photo"
            />
          </div>
          <div>
            <p>
              A marketing professional turned Full Stack Developer who likes to
              put colors on blocks of code. My main stack is JavaScript (ES6+),
              React, Node, Sass, and MongoDB. As a Coding Academy Bootcamp
              graduate, I&apos;m well-trained in building well-designed E2E web
              apps.
            </p>
            <p>
              I come with varied experience from my past endeavors where I was a
              significant part of the companies I&apos;ve worked at and helped
              them grow their revenue and clientele. I&apos;m an organized,
              fast-learning autodidact, who&apos;s working great in a team,
              knowledgeable, and who&apos;s not afraid of taking challenges.
            </p>
          </div>
        </div>
        <div className="mar-b16">
          <div className="stack-list mar-b16">
            {icons.map((icon, idx) => {
              return (
                <div className="tech-stack-list" key={idx}>
                  {icon.img}
                  <div>{icon.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
