// import { useState, useRef, useEffect } from "react";
import { RxTriangleRight } from "react-icons/rx";

export function ExperienceMB() {

  const experience = [
    {
      name: "Prequel",
      website: "https://prequel.tv/",
      position: "Publishers Account Manager",
      date: "June 2021 - October 2022",
      actions: [
        "Managing multiple video publisher accounts",
        "Analyzing and reporting Video Ads data and KPIs from various servers",
        "Cultivating relationships and negotiating with publishers",
        "Managing Ad-ops personnel",
      ],
    },
    {
      name: "Zippor Media",
      website: "https://www.zippormedia.com/",
      position: "Publishers Account Manager",
      date: "July 2019 - March 2020",
      actions: [
        "Managing multiple video publisher accounts",
        "Analyzing and reporting Video Ads data and KPIs from various servers",
        "Cultivating relationships and negotiating with publishers",
        "Managing Ad-ops personnel",
      ],
    },
    {
      name: "Meirovitch Public Relations",
      website: "https://www.meirovitch.com/",
      position: "Account Executive",
      date: "August 2015 - June 2019",
      actions: [
        "Co-leading the international activity at the agency",
        "Forming relationships with journalists and analysts throughout the globe",
        "Working with C-level executives directly providing vast media exposure in outlets such as TechCrunch",
        "During my time in the company we've managed to double our clientele",
      ],
    },
    {
      name: "Meretz",
      website: "https://meretz.org.il/",
      position: "Regional Campaign Manager",
      date: "October 2014 - January 2015",
      actions: [
        "Managing Meretz's electoral campaign in southern Israel",
        "Coordinating activities and events for candidates members of the Knesset",
        "Managing a team of volunteers",
        "After the campaign I was a parliamentary intern at MK Ilan Gilon’s chambers for five months",
      ],
    },
    {
      name: "Ashdodim Movement",
      website: "https://www.facebook.com/AshdodimMovement/",
      position: "Head of Communications",
      date: "March 2014 - July 2015",
      actions: [
        "Being a part of the managing team",
        "leading the media front in communal projects in of the movement",
        "Promoting various activities: youth oriented politics course, an orthodox-secular religious seminary, etc.",
      ],
    },
  ];

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
