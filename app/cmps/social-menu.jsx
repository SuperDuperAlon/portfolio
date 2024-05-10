import { social } from "../data/data";
import { motion } from "framer-motion";

export function Social() {

  return (
    <section className="social">
      <ul>
        {social.map((icon, idx) => {
          return (
            <li className="clean-list social-list" key={idx}>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: `${icon.delay}` }}
                href={icon.link} 
                target="_blank"
              >
                {icon.icon}
              </motion.a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
