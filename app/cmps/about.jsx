import Image from "next/image";
import { RxTriangleRight } from "react-icons/rx";
import alon from "../../public/assets/alon.jpg";

export function About() {
  const skills = [
    "Javascript (ES6+)",
    "React",
    "Redux",
    "Next",
    "Node.js",
    "Express",
    "Sass",
    "MongoDb",
  ];
  return (
    <section className="section-layout" id="about">
      <div>
        <h1 className="section-header">About Me</h1>
        <div className="about-section">
          <div>
            <p>
              I am a Full Stack Developer and Front End Enthusiast looking for
              an opportunity to code professionally. I have versatile experience
              in Account Management at Ad-tech and Public Relations, where I’ve
              been working with amazing people, doing versatile, interesting and
              influential work, while putting my soft skills to use.
            </p>
            <p>
              Over the past few months I have been learning how to use Client
              and Server side tools, frameworks and languages, and putting them
              to use building e2e apps, such as Anyplace, an Airbnb clone, and
              many others after-school projects.
            </p>
            <p>This is my main stack:</p>

            <ul className="clean-list mar-b16">
              {skills.map((skill) => {
                return (
                  <li className="tech-stack-list" key={skill.idx}>
                    <RxTriangleRight />
                    {skill}
                  </li>
                );
              })}
            </ul>

            <p>
              I have also encountered and used Java, SQL, Angular, Vue, Vuex,
              Typescript, etc.
            </p>
          </div>
          <Image src={alon} width="100%" height="100%" className="about-img" />
        </div>
      </div>
    </section>
  );
}
