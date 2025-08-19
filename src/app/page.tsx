import MainSection from "@/components/main-section";
import Header from "@/components/sections/header";
import Wrapper from "@/components/wrapper";
import ModalProvider from "@/providers/modal-providers";

export default function Home() {
  return (
    <>
      <ModalProvider />
      <Wrapper>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <MainSection />
        </div>
      </Wrapper>
    </>
  );
}
