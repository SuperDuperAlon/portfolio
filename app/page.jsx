"use client";

import React from "react";
import { useState, useEffect } from "react";
import { About } from "./cmps/about";
import { Contact } from "./cmps/contact";
import { Experience } from "./cmps/experience";
import { Intro } from "./cmps/intro";
import { Header } from "./cmps/header";
import { Projects } from "./cmps/projects";
import { Footer } from "./cmps/footer";
import { Social } from "./cmps/social-menu";
// import { useClient } from "blitz";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 687);
  const MOBILE_WIDTH = 687;

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  function updateDimensions() {
    setIsMobile(window.innerWidth < MOBILE_WIDTH);
  }

  // const client = useClient();

  return (
    <>
      {/* <Header /> */}
      {!isMobile && (
        <section className="index-layout scroll">
          <Intro />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Social />
          {/* <Footer /> */}
        </section>
      )}
    </>
  );
}
