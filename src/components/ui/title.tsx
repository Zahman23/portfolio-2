import React from "react";
import { MdArrowOutward } from "react-icons/md";

interface TitleProps {
  title: string;
  company?: string;
  icon?: boolean;
}

const Title = ({ title, company, icon = false }: TitleProps) => {
  return (
    <h3 className="font-medium leading-snug text-slate-200">
      <div className="inline-flex items-center font-medium leading-tight text-text hover:text-teal-300 focus-visible:text-teal-300 text-base group/link">
        <span className="absoulte -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
        <span className="">
          {`${title} ${company ? "·" : ""} `}
          {company && <span className="inline-block">{company}</span>}
          {icon && (
            <span className="inline-block">
              <MdArrowOutward className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
            </span>
          )}
        </span>
      </div>
    </h3>
  );
};

export default Title;
