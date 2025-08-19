"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BclImage from "@/assets/bcl/login.jpg";

import { BsArrowDown, BsArrowUp } from "react-icons/bs";

import Section from "../widgets/section";
import CardHover from "../ui/card-hover";
import Title from "../ui/title";
import Description from "../ui/description";
import ListTeknologi from "../widgets/list-teknologi";
import ProjectImage from "../ui/image";
import { projectsData } from "@/data/data";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePreviewModalStore } from "@/stores/preview-modal-store";

const Projects = () => {
  const { onOpen } = usePreviewModalStore();

  const [viewAll, setViewAll] = useState<boolean>(false);
  const [isAnimation, setIsAnimation] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const visibleProjects = projectsData.slice(0, 3);
  const hiddenProjecs = projectsData.slice(3);

  return (
    <Section label="Projects" name="projects">
      <ul className="group/list cursor-pointer">
        {visibleProjects.map((project) => (
          <li
            className="mb-12"
            key={project.id}
            onClick={() => onOpen(project)}
          >
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <CardHover />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <Title title={project.title} />
                <Description desc={project.description} />
                <ListTeknologi technologys={project.technology} />
              </div>
              <ProjectImage
                alt="bcl monitoring dashbord"
                image={project.image[0]}
              />
            </div>
          </li>
        ))}

        <AnimatePresence>
          {viewAll && (
            <motion.div
              key={viewAll ? "expanded" : "collapsed"}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{
                height: 0,
                opacity: 1,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onAnimationStart={() => setIsAnimation(true)}
              onAnimationComplete={() => setIsAnimation(false)}
              // 👇 hanya pakai overflow-hidden saat animasi
              className="overflow-hidden"
            >
              {hiddenProjecs.map((project) => (
                <li
                  className="mb-12"
                  key={project.id}
                  onClick={() => onOpen(project)}
                >
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <Title title={project.title} />
                      <Description desc={project.description} />
                      <ListTeknologi technologys={project.technology} />
                    </div>
                    <ProjectImage
                      alt="bcl monitoring dashbord"
                      image={project.image[0]}
                    />
                  </div>
                </li>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </ul>

      <div className="mt-12">
        <button
          className="cursor-pointer"
          onClick={() => setViewAll((prev) => !prev)}
        >
          <span className="inline-flex items-center font-medium leading-tight text-slate-200 group">
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                {viewAll ? "Show Less Projects" : "View All Projects"}
              </span>
              {viewAll ? (
                <BsArrowUp className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:-translate-y-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none" />
              ) : (
                <BsArrowDown className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-y-1 group-focus-visible:translate-y-1 motion-reduce:transition-none" />
              )}
            </span>
          </span>
        </button>
      </div>
    </Section>
  );
};

export default Projects;
