import React from "react";

interface TeknologiProps {
  teknologi: string;
}

const Teknologi = ({ teknologi }: TeknologiProps) => {
  return (
    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
      {teknologi}
    </div>
  );
};

export default Teknologi;
