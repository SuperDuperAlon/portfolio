export function Experience() {
  const Experience = [
    {
      name: "Prequel",
      website: "https://prequel.tv/",
      position: "Publishers Account Manager",
      date: "June 2021 - October 2022",
      actions: ["one", "two", "three"],
    },
    {
      name: "Zippor Media",
      website: "https://www.zippormedia.com/",
      position: "Publishers Account Manager",
      date: "July 2019 - March 2020",
      actions: ["one", "two", "three"],
    },
    {
      name: "Meirovitch Public Relations",
      website: "https://www.meirovitch.com/",
      position: "Account Executive",
      date: "August 2015 - June 2019",
      actions: ["one", "two", "three"],
    },
    {
      name: "Meretz",
      website: "https://meretz.org.il/",
      position: "Regional Campaign Manager",
      date: "October 2014 - January 2015",
      actions: ["one", "two", "three"],
    },
    {
      name: "Ashdodim Movement",
      website: "https://www.facebook.com/AshdodimMovement/",
      position: "Head of Communications",
      date: "March 2014 - July 2015",
      actions: ["one", "two", "three"],
    },
  ];

  return (
    <section className="intro-layout">
      <div>
        <h1>Where Ive Worked</h1>
        <ul>
          {Experience.map((company) => {
            return (
              <li key={company.idx}>
                <div>
                  {company.position}
                  <a href={`${company.website}`}>@{company.name}</a>
                  <div>{company.date}</div>
                  <ul>
                    {company.actions.map((action) => {
                      return <li key={action.idx}>{action}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
