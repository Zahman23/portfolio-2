import { usePreviewModalStore } from "@/stores/preview-modal-store";
import React from "react";
import Modal from "../ui/modal";
import Title from "../ui/title";
import Description from "../ui/description";
import ListTeknologi from "./list-teknologi";
import ProjectImage from "../ui/image";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ProjectType } from "@/types/dataType";

const PreviewModal = () => {
  const { isOpen, onClose, data: project } = usePreviewModalStore();

  if (!project) return null;

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <div className="h-full w-full border border-primary">
            <Image
              src={project.image[0]}
              alt={project.title}
              className="aspect-video object-cover rounded border-2 border-text/10 transition group-hover:border-text/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{ color: "transparent" }}
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Link
            target="_blank"
            href={
              project.link === ProjectType.Internal ? "/internal" : project.link
            }
          >
            <Title title={project.title} icon={true} />
          </Link>
          <Description desc={project.description} />
          <div className="space-y-2 mt-2">
            <span className="font-light leading-snug text-slate-200">
              Features
            </span>
            {project.features.map((feature) => (
              <div key={feature} className="flex items-center">
                <span className={cn("text-sm leading-normal")}>{feature}</span>
              </div>
            ))}
          </div>
          <ListTeknologi technologys={project.technology} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
