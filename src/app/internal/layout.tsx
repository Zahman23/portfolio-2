import { Metadata } from "next";
import React from "react";

interface InternalLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Internal",
  description: "internal Project",
  icons: {
    icon: "logo.png",
  },
};

const InternalLayout = ({ children }: InternalLayoutProps) => {
  return <>{children}</>;
};

export default InternalLayout;
