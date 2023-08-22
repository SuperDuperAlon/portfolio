import { motion } from "framer-motion";

export function Intro() {
  return (
    <section className="intro-layout" id="about">
      <div className="">
        <motion.h3
          className="green hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          className="big-heading light-slate mar-t24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Alon Mlievski<span className="dot">.</span>
        </motion.h1>
        <motion.h1
          className="big-heading slate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I write and color blocks of code.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I am a Full Stack Developer specializing in building and developing
          web applications.
        </motion.p>
        <a
          href="./assets/Alon Mlievski - Full Stack Developer"
          download
        >
          <motion.button
            className="mar-t48"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            My Resume
          </motion.button>
        </a>
      </div>
    </section>
  );
}
