export function Projects() {
  const projects = [
    {
      name: "Anyplace",
      description: "An Airbnb inspired clone",
      image: "tba",
      url: "https://any-place-app.onrender.com/",
      stack: [
        "React",
        "Redux",
        "Node",
        "Express",
        "Sass",
        "Socket.io",
        "MongoDB",
      ],
    },
    {
      name: "Minesweeper",
      description: "The classic game - Sprint #1 project at Coding Academy",
      url: "https://superduperalon.github.io/Meme-Generator/",
      image: "tba",
      stack: ["Javascript", "CSS"],
    },
    {
      name: "Meme Generator",
      description: "Meme Generator - Sprint #2 at Coding Academy",
      url: "https://superduperalon.github.io/Minesweeper/",
      image: "tba",
      stack: ["Javascript", "CSS"],
    },
    {
      name: "Web Portfolio",
      description: "This website",
      url: "https://superduperalon.github.io/Minesweeper/",
      image: "tba",
      stack: ["React", "Next.js", "Sass"],
    },
  ];

  const otherProjects = [
    {
      name: "Simon",
      description: "The classic game - Angela Yu Udemy Course",
      url: "https://superduperalon.github.io/Meme-Generator/",
      stack: ["Javascript", "CSS"],
    },
    {
      name: "Movie Seats",
      description: "Brad Traversy Udemy Course",
      url: "https://superduperalon.github.io/Minesweeper/",
      stack: ["Javascript", "CSS"],
    },
  ];

  return (
    <section className="intro-layout">
      <div>
        <h1>My Projects</h1>
        <ul>
          {projects.map((project) => {
            return (
              <li key={project.idx}>
                <section>
                  <div>Featured Project</div>
                  <div>
                    <a href={`${project.url}`}>{project.name}</a>
                  </div>
                  <div>{project.description}</div>
                  <div>img</div>
                  {project.stack.map((tech) => {
                    return <li key={tech.idx}>{tech}</li>;
                  })}
                </section>
              </li>
            );
          })}
        </ul>
        <ul>
          {otherProjects.map((project) => {
            return (
              <li key={project.idx}>
                <section>
                  <div>Featured Project</div>
                  <div>
                    <a href={`${project.url}`}>{project.name}</a>
                  </div>
                  <div>{project.description}</div>
                  {project.stack.map((tech) => {
                    return <li key={tech.idx}>{tech}</li>;
                  })}
                </section>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
