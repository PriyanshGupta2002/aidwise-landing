"use client";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({
  subsets: ["latin"],
});
const HeroSection = () => {
  return (
    <div className="w-full p-3 relative mt-28">
      <div
        className={cn(
          "max-w-5xl m-auto p-2 flex flex-col  space-y-6 items-center justify-center",
          montserrat.className
        )}
      >
        <Image
          src={"/left-grid.svg"}
          width={430}
          height={694}
          alt="left-grid"
          className="absolute left-0"
        />
        <Image
          src={"/center-grid.svg"}
          width={380}
          height={694}
          alt="left-grid"
          className="absolute left-1/2 -translate-x-96"
        />

        <h2
          className={cn(
            "text-6xl w-[70%] text-center bg-clip-text bg-gradient-to-br font-medium from-[#ffffff] to-[#00FF80] text-transparent"
          )}
        >
          Unlock the Future of Business with Aidwise AI-Driven Intelligence
        </h2>
        <Image
          src={"/star.svg"}
          width={132}
          height={132}
          className="absolute -top-16 z-30 right-[23%]"
          alt="star"
        />
        <p className="text-[#ffffff] w-[70%]  text-center">
          Discover how integrating AI-driven intelligence into your business
          workflow can unlock new avenues for growth, innovation, and
          competitive advantage.
        </p>
        <Image
          src={"/right-grid.svg"}
          width={430}
          height={694}
          alt="left-grid"
          className="absolute right-0 "
        />
      </div>
    </div>
  );
};

export default HeroSection;
