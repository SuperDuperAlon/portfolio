import Image from "next/image";
import alon from "../../public/assets/alon.jpg";

export function About() {
  const skills = ["Javascript (ES6+)", "React", "Node.js", "Sass", "MongoDb"];
  return (
    <section className="about-layout" id="about">
      <div>
        <h1 className="section-header">About Me</h1>
        <div className="about-section">
          <div>
            <p>
              I am a Full Stack / Front End Developer. I have recently finished
              my training at Coding Academy where I have learned how to build
              e2e web apps using both client and server-side tools such as
              Javascript, React, Mongo, Node, Sass, etc. and I’ve put them to
              use in my final project - Anyplace, an e2e Airbnb clone.{" "}
            </p>
            <p>
              Over the past few years, I have been working as an account manager
              in public relations and Adtech companies, where I’ve been working
              with amazing people, doing versatile and interesting work while
              having a competitive salary.
            </p>
            <p>
              During that time I’ve been taking online classes at Udemy and
              Codecademy, learning how to write code on my own. And about a year
              ago I’ve come to realize that this is what I want to do for the
              rest of my life and I’ve doubled down, on what was a huge risk for
              me - I enrolled and graduated from Coding Academy’s Full Stack
              Development program.
            </p>
            <p>This is my stack:</p>

            <ul>
              {skills.map((skill) => {
                return (
                  <li className="green" key={skill.idx}>
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
          <Image src={alon} width="100%" height="100%" className="about-img"/>
        </div>
      </div>
    </section>
  );
}
