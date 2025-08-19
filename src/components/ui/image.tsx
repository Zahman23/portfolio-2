"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectImageProps {
  alt: string;
  image: StaticImageData;
}

const ProjectImage = ({ alt, image }: ProjectImageProps) => {
  return (
    <Image
      src={image}
      width={200}
      height={48}
      alt={alt}
      className="aspect-video object-cover rounded border-2 border-text/10 transition group-hover:border-text/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      style={{ color: "transparent" }}
      decoding="async"
      loading="lazy"
    />
  );
};

export default ProjectImage;
