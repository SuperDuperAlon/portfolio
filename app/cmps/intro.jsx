import { useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function Intro() {
  const observeIntersection = useIntersectionObserver();

  useEffect(() => {
    observeIntersection("intro-layout");
  }, []);
  return (
    <section className="intro-layout">
      <div className="">
        <h3 className="green">Hi, my name is</h3>
        <h1 className="big-heading light-slate mar-t24">
          Alon Mlievski<span className="dot">.</span>
        </h1>
        <h1 className="big-heading slate">I write and color blocks of code.</h1>
        <p>
          I am a Full Stack Developer specializing in building and developing
          web applications.
        </p>
        <button className="mar-t48">
          <a
            href="https://www.dropbox.com/s/bvnx5by7z3f9xss/Alon%20Mlievski%20-%20Full%20Stack%20Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </button>
      </div>
    </section>
  );
}
