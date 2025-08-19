import React from "react";

interface DescriptionProps {
  desc: string;
}

const Description = ({ desc }: DescriptionProps) => {
  return <p className="mt-2 text-sm leading-normal">{desc}</p>;
};

export default Description;
