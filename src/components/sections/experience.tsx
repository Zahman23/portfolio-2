"use client";

import React from "react";
import { MdArrowOutward } from "react-icons/md";

import Section from "../widgets/section";
import { experienceData } from "@/data/data";
import Link from "next/link";
import Title from "../ui/title";
import Description from "../ui/description";
import ListTeknologi from "../widgets/list-teknologi";
import CardHover from "../ui/card-hover";

const Experience = () => {
  return (
    <Section label="Experience" name="experience">
      <div>
        <ol className="group">
          {experienceData.map((data) => (
            <li key={data.company} className="mb-12 cursor-pointer">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100 lg:group-hover:opacity-50">
                <CardHover />
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label={`${data.dari}- ${data.sampai}`}
                >
                  {`${data.dari} — ${data.sampai}`}
                </header>
                <div className="z-10 sm:col-span-6">
                  <Title title={data.jobdesk} company={data.company} />
                  <Description desc={data.description} />
                  <ListTeknologi technologys={data.teknologi} />
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <Link
            target="_blank"
            href={"/Resume.pdf"}
            className="inline-flex items-center font-medium leading-tight text-text hover:text-teal-300 focus-visible:text-teal-300 text-base group/link"
          >
            <span>
              {`View Full `}
              <span className="inline-block">
                Resume
                <MdArrowOutward className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
