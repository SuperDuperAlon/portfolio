import Image from "next/image";

export function Projects() {
  const projects = [
    {
      name: "Anyplace",
      description:
        "An E2E Airbnb clone using client and server side tools. Was built as a final project at Coding Academy",
      image: "/assets/Screenshots/anyplace.jpg",
      url: "https://anyplace-h06h.onrender.com/",
      stack: [
        "React",
        "Redux",
        "Javascript",
        "Node",
        "Express",
        "Sass",
        "Socket.io",
        "MongoDB",
      ],
    },
    {
      name: "Boarder",
      description: "Trello clone",
      image: "/assets/Screenshots/boarder.jpg",
      url: "https://boarder-flame.vercel.app/",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Appwrite.io",
        "Beautiful DnD",
        "Headless UI",
      ],
    },
    {
      name: "Car Showcase",
      description: "Full car showcase",
      image: "/assets/Screenshots/car_app.jpg",
      url: "https://car-showcase-six-tawny.vercel.app/",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Headless UI",
      ],
    },
    {
      name: "Web Portfolio",
      description: "This website",
      url: "https://portfolio-superduperalon.vercel.app/",
      image: "/assets/Screenshots/portfolio.jpg",
      stack: ["React", "Next.js", "Sass", "Javascript", "Framer-Motion"],
    },
    {
      name: "Minesweeper",
      description: "The classic game - Sprint #1 project at Coding Academy",
      url: "https://superduperalon.github.io/Minesweeper/",
      image: "/assets/Screenshots/minesweeper.jpg",
      stack: ["Javascript", "CSS"],
    },
    {
      name: "MemeGen",
      description: "Meme Generator - Sprint #2 at Coding Academy",
      url: "https://superduperalon.github.io/Meme-Generator/",
      image: "/assets/Screenshots/memegen.jpg",
      stack: ["Javascript", "CSS"],
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
    <section className="section-layout" id="work">
      <div className="observed">
        <h1 className="section-header">My Projects</h1>
        <div className="projects-main-section">
          <ul className="clean-list">
            {projects.map((project, idx) => {
              return (
                <li key={idx}>
                  <section>
                    <div className="fs20 mar-b4">
                      <a href={`${project.url}`}>{project.name}</a>
                    </div>
                    <div className="mar-b8">{project.description}</div>
                    <div className="web-img">
                      <Image
                        src={project.image}
                        fill
                        alt="project"
                        className="proj-img"
                      />
                    </div>
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
