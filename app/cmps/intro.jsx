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
          I am a Software Developer specializing in building and developing
          web applications.
        </motion.p>
        <div className="mar-t48">
          <a
            href="../../public/assets/Alon_Mlievski_CV.pdf"
            download
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Download Resume
            </motion.button>
          </a>
        </div>
      </div>
    </section >
  );
}
