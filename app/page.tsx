import Hero from "@/components/LandingPage/Hero";
import Mortage from "@/components/LandingPage/Moratge";
import Srtories from "@/components/LandingPage/Srtories";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-black w-full overflow-x-hidden">
        <Hero />
        <Srtories />
        <Mortage />
      </div>
    </>
  );
}
