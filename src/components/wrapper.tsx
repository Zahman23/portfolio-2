"use client";

import React, { useEffect, useState } from "react";
import Header from "./sections/header";
import RadialCustom from "./ui/radial-custom";

interface MainSectionProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: MainSectionProps) => {
  const [cursor, setCursor] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (window.innerWidth <= 1024) return;

    const handleMouse = (e: MouseEvent) => {
      setCursor({
        x: e.pageX,
        y: e.pageY,
      });
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <>
      <div className="font-inter relative min-h-screen">
        <RadialCustom x={cursor.x} y={cursor.y} />
        <div className="mx-auto max-w-7xl px-6 font-sans md:px-12 md:py-16 lg:py-0">
          {children}
        </div>
      </div>
    </>
  );
};

export default Wrapper;
