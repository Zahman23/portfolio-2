"use client";

import React, { useState } from "react";
import { Link } from "react-scroll";

import { NavLinksType } from "@/types/navType";
import { cn } from "@/lib/utils";

interface NavbarProps {
  navlinks: NavLinksType[];
}

const Navbar = ({ navlinks }: NavbarProps) => {
  const [navActive, setNavActive] = useState<string>("about");

  const handleSetActive = (to: string) => {
    setNavActive(to);
  };

  const active = (name: string) => {
    return {
      garis:
        navActive === name ? "bg-text w-16 visible:w-16 visible:bg-text " : "",
      text: navActive === name ? "visible:text-text text-text" : "",
    };
  };

  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navlinks.map((link) => (
          <li key={link.name}>
            <Link
              onSetActive={handleSetActive}
              offset={-96}
              spy={true}
              to={link.name}
              smooth={true}
              duration={500}
              className="group flex items-center py-3 cursor-pointer"
            >
              <span
                className={cn(
                  "mr-4 h-px w-8 bg-slate-800 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                  active(link.name).garis
                )}
              ></span>
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                  active(link.name).text
                )}
              >
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
