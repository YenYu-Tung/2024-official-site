import Image from "next/image";
import PreviousWork from "@/app/components/previousWork";
import FAQ from "@/app/components/faq";
import Sponsor from "@/app/components/sponsor";
import Footer from "@/app/components/footer";
import Stuednt from "@/app/components/stuednt";

export default function Home() {
  return (
    <div className="container px-5 md:px-10 md:mx-auto">
      <FAQ marginBotton={100} />
      <PreviousWork marginBotton={100} />
      <Stuednt marginBotton={100} />
      <Sponsor marginBotton={100} />
      <Footer />
    </div>
  );
}
