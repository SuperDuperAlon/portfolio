import { RxTriangleRight } from "react-icons/rx";
import { experience } from "../data/data";

export function ExperienceMB() {

  return (
    <section className="section-layout" id="experience">
      <h1 className="section-header">What I&apos;ve Done</h1>
      <div className="experience-section">
            {experience.map((exp, idx) => (
              <>
                <details className="mb-exp-details">
                  <summary>
                    <h1 className="fs28 light-slate mar-b8">{exp.position}</h1>
                    <h2 className="fs18 green mar-b4">{exp.name}</h2>
                    <h4 className="fs14">{exp.date}</h4>
                    </summary>
                    <ul className="experience-list">
                {experience[idx].actions.map((action, idx) => {
                  return (
                    <li key={idx} className="">
                      {" "}
                      {/* <span className="green">
                        <RxTriangleRight />
                      </span> */}
                      {action}
                    </li>
                  );
                })}
              </ul>
                </details>
              </>
            ))}
      </div>
    </section>
  );
}
