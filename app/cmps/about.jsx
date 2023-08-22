import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import alon from "../../public/assets/alon.jpg";
import { languages, frameworks, styling, back }  from "../data/stack";


export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-layout" id="about">
      {/* <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s 0.5s",
        }}
      > */}
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
      {/* </div> */}
    </section>
  );
}
