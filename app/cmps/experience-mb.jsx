import { RxTriangleRight } from "react-icons/rx";
import { experience } from "../data/data";

export function ExperienceMB() {

  return (
    <section className="section-layout" id="experience">
      <h1 className="section-header">What I&apos;ve Done</h1>
      <div className="experience-section">
            {experience.map((exp) => (
              <>
                <details className="mb-exp-details">
                  <summary>
                    <h1 className="fs20 light-slate mb-8">{exp.position}</h1>
                    <h2 className="fs14 mb-4">{exp.name}</h2>
                    <h4 className="fs12">{exp.date}</h4>
                    </summary>
                  tatata
                </details>
              </>
            ))}
      </div>
    </section>
  );
}
