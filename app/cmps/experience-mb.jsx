// import { useState, useRef, useEffect } from "react";
import { RxTriangleRight } from "react-icons/rx";
import { experience } from "../data/data";

export function ExperienceMB() {

  

  return (
    <section className="section-layout " id="experience">
      <h1 className="section-header">What I&lsquo;ve Done</h1>
      <div className="experience-section">
        <div>
          <ul>
            {experience.map((exp, idx) => {
              return (
                <li key={idx} className="flex column">
                  <div className="fs20 mar-b4 light-slate">{exp.position}</div>
                  <a href={`${exp.website}`}>@ {exp.name}</a>
                  <div className="fs14 mar-b8">{exp.date}</div>
                  <ul className="inner-ul">
                    {exp.actions.map((action, idx) => {
                      return (
                        <li key={idx} className="inner-list">
                          <span className="green">
                            <RxTriangleRight />
                          </span>
                          {action}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
