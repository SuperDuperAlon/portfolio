'use client'

import React from "react";
import { useState, useEffect } from "react";
import { About } from "./cmps/about";
import { Contact } from "./cmps/contact";
import { Experience } from "./cmps/experience";
import { Intro } from "./cmps/intro";
import { Projects } from "./cmps/projects";
import { Social } from "./cmps/social-menu";
import { ExperienceMB } from "./cmps/experience-mb";
import { Social_MB } from "./cmps/social-menu-mb";

export default function Home() {
  var size = undefined;

  if (typeof window !== "undefined") {
    size = window.innerWidth;
  } else {
    console.error('error');
  }

  const MOBILE_WIDTH = 687;
  const [isMobile, setIsMobile] = useState(size < 687);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  function updateDimensions() {
    setIsMobile(window.innerWidth < MOBILE_WIDTH);
  }

  return (
    <>
      {!isMobile && (
        <section className="index-layout">
          <Intro />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </section>
      )}
      {isMobile && (
        <section className="index-layout">
          <Intro />
          <About />
          <ExperienceMB />
          <Projects />
          <Contact />
        </section>
      )}
    </>
  );
}
