import Link from "next/link";
import React from "react";

const TextLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      target="_blank"
      href={href}
      className="font-bold text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
    >
      {children}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Dikodekan di{" "}
        <TextLink href="https://code.visualstudio.com/">
          Visual Studio Code
        </TextLink>{" "}
        oleh saya sendiri. Dibangun dengan{" "}
        <TextLink href="https://nextjs.org/">Next.js</TextLink> dan{" "}
        <TextLink href="https://tailwindcss.com/">Tailwind CSS</TextLink>,
        dihosting dengan{" "}
        <TextLink href="https://vercel.com/zahman23s-projects">Vercel</TextLink>
        . Semua teks menggunakan font{" "}
        <TextLink href="https://rsms.me/inter/">Inter</TextLink>.
      </p>
    </footer>
  );
};

export default Footer;
