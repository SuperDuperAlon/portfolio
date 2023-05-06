export function Intro() {
  return (
    <section className="intro-layout" id="about">
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
            href="./assets/alon-resume.pdf.pdf"
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
