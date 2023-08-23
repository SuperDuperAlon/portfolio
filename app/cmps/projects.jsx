import Image from "next/image";
import { projects } from "../data/data";

export function Projects() {

  return (
    <section className="section-layout" id="work">
      <div className="observed">
        <h1 className="section-header">My Projects</h1>
        <div className="projects-main-section">
          <ul className="clean-list">
            {projects.map((project, idx) => {
              return (
                <li key={idx}>
                  <section>
                    <div className="fs28 mar-b4 bold">
                      <a href={`${project.url}`}>{project.name}</a>
                    </div>
                    <div className="mar-b8">{project.description}</div>
                      <Image
                        src={project.image}
                        width="0"
                        height="0"
                        sizes="100vw"
                        alt="project"
                        className="proj-img"
                      />
                    {project.stack.map((tech) => {
                      return (
                        <li key={tech.idx} className="stack-list">
                          {tech}
                        </li>
                      );
                    })}
                  </section>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="projects-secondary-section">
          <ul>
            {otherProjects.map((project) => {
              return (
                <li key={project.idx}>
                  <div>Featured Project</div>
                  <div>
                    <a href={`${project.url}`}>{project.name}</a>
                  </div>
                  <div>{project.description}</div>
                  {project.stack.map((tech) => {
                    return <li key={tech.idx}>{tech}</li>;
                  })}
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    </section>
  );
}
