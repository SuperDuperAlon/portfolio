import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import alon from "../../public/assets/alon.jpg";
import { front, back, others } from "../data/stack";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-layout" id="about">
      <div>
        <div className="about-section">

          <div className="img-container"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s 0.5s",
            }}>
            <Image
              src={alon}
              width={400}
              height={400}
              className="about-img"
              alt="about-me-photo"
            />
          </div>
          <p
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s 0.5s",
            }}
          >
            A people professional, with an extensive background in politics (national and local), public relations, and marketing, turned Software Developer (with more than 480k lines of code on Github). Looking for a Full Stack or Front End development role
          </p>
          {/* <p
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s 0.5s",
            }}
          >
            I come with varied experience and soft skills from my past endeavors where I was a <span className="highlight">significant part</span> of the companies I&apos;ve worked at, helping them grow their revenue and clientele.
          </p> */}
          {/* <p
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s 0.5s",
            }}
          >
            An ardent and <span className="highlight">organized autodidact</span>, who&apos;s truly passionate about learning and growing as a client-side developer.
          </p> */}
          <div className="test"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s 0.5s",
            }}>
            <h1>Frontend</h1>
            <div className="stack-list mar-b16">
              {front.map((icon, idx) => {
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
          <div className="test"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s 0.5s",
            }}>
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
          <div className="test"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s 0.5s",
            }}>
            <h1>Misc.</h1>
            <div className="stack-list mar-b16">
              {others.map((icon, idx) => {
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
