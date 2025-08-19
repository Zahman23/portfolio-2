import React from "react";
import Teknologi from "../ui/teknologi";

interface ListTeknologiProps {
  technologys: string[];
}

const ListTeknologi = ({ technologys }: ListTeknologiProps) => {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="teknologi used">
      {technologys.map((tekno) => (
        <li key={tekno} className="mr-1.5 mt-2">
          <Teknologi teknologi={tekno} />
        </li>
      ))}
    </ul>
  );
};

export default ListTeknologi;
