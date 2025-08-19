"use client";

import React from "react";
import Section from "../widgets/section";
import { aboutData } from "@/data/data";
import { parseTextWithLinks } from "@/hooks/text-link";

const About = () => {
  return (
    <Section label="About" name="about">
      <div>
        {aboutData.map((data) => (
          <p key={data.id} className="mb-4">
            {parseTextWithLinks(data.desc)}
          </p>
        ))}
      </div>
    </Section>
  );
};

export default About;
