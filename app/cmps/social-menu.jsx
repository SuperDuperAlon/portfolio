import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

export function Social() {
  const social = [
    // {
    //   name: "cv",
    //   link: "https://www.dropbox.com/s/bvnx5by7z3f9xss/Alon%20Mlievski%20-%20Full%20Stack%20Developer.pdf",
    // },
    {
      name: "mail",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/alon.mlievski",
    },
    {
      name: "gh",
      icon: <FaGithub />,
      link: "https://github.com/SuperDuperAlon",
    },
    {
      name: "li",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/alon-mlievski-6756aa74/",
    },
  ];

  return (
    <section className="social">
      <ul>
        {social.map((icon) => {
          return (
            <li className="clean-list social-list" key={icon.idx}>
              <a href={icon.link} target="_blank" download>
                {icon.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
