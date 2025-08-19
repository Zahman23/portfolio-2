import Title from "@/components/ui/title";
import Wrapper from "@/components/wrapper";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

const InternalPage = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-center min-h-screen w-full">
        <Link href={"/"}>
          <Title title="Maaf Project tidak bisa dikunjungi dikarena project bersifat Internal project" />
        </Link>
      </div>
    </Wrapper>
  );
};

export default InternalPage;
