import React from "react";
import { About } from "./cmps/about";
import { Contact } from "./cmps/contact";
import { Expirience } from "./cmps/expirience";
import { Intro } from "./cmps/intro";
import { Header } from "./cmps/header";
import { Projects } from "./cmps/projects";
import { Footer } from "./cmps/footer";

export default function Home() {
  return (
    <>
      <Header />
      <section className="index-layout">
        <Intro />
        <About />
        <Expirience />
        <Projects />
        <Contact />
      </section>
      <Footer />
    </>
  );
}
