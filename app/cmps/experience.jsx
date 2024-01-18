import { useState } from "react";
import { RxTriangleRight } from "react-icons/rx";
import { experience } from "../data/data";

export function Experience() {
  const [currentItem, setCurrentItem] = useState(0);
  
  function handleChange(num) {
    setCurrentItem(num);
  }

  return (
    <section className="section-layout" id="experience">
      <div className="observed">
        <h1 className="section-header">What I&lsquo;ve Done</h1>
        <div className="experience-section">
          <ul className="clean-list">
            {experience.map((button, idx) => {
              return (
                  <button key={idx} className="btn-exp" onClick={() => handleChange(idx)}>
                    <div>{button.name}</div>
                  </button>
              );
            })}
          </ul>
          {
            <div>
              <div className="fs20 mar-b4 light-slate">
                {experience[currentItem].position}
                {"  "}
                <a href={`${experience[currentItem].website}`}>
                  @ {experience[currentItem].name}
                </a>
              </div>
              <div className="fs14 mar-b8">{experience[currentItem].date}</div>
              <ul>
                {experience[currentItem].actions.map((action, idx) => {
                  return (
                    <li key={idx} className="clean-list experience-list">
                      {" "}
                      <span className="green">
                        <RxTriangleRight />
                      </span>
                      {action}
                    </li>
                  );
                })}
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  );
}
