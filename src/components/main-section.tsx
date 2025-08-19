"use client";

import React from "react";
import About from "./sections/about";
import Experience from "./sections/experience";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Footer from "./sections/footer";

const MainSection = () => {
  return (
    <main className="pt-24 lg:w-[52%] lg:py-24 min-h-screen">
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
};

export default MainSection;
