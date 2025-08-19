"use client";

import React from "react";
import Navbar from "../ui/nav";
import { navLinks } from "@/data/nav";
import LinkSosmed from "../widgets/link-sosmed";

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
          Zidan Rohman
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-text sm:text-xl">
          Front End Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Saya merancang pengalaman digital yang mudah diakses dan presis untuk
          web.
        </p>
        <Navbar navlinks={navLinks} />
      </div>
      <LinkSosmed />
    </header>
  );
};

export default Header;
