import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiSend } from 'react-icons/fi';

export function Social() {
  const social = [
    // {
    //   name: "cv",
    //   link: "https://www.dropbox.com/s/bvnx5by7z3f9xss/Alon%20Mlievski%20-%20Full%20Stack%20Developer.pdf",
    // },
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
    {
      name: "wa",
      icon: <FaWhatsapp />,
      link: "https://wa.me/972504438778",
    },
    {
      name: "mail",
      icon: <FiSend/>,
      link: "mailto:alonmlievski@gmail.com",
    },
    {
      name: "fb",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/alon.mlievski",
    },
  ];

  return (
    <section className="social">
      <ul>
        {social.map((icon, idx) => {
          return (
            <li className="clean-list social-list" key={idx}>
              <a href={icon.link} target="_blank">
                {icon.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
