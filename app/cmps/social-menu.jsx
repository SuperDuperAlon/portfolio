import { social } from "../data/data";

export function Social() {

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
