import memojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { useState } from "react";
import { SupabaseAuth } from "@/components/SupabaseAuth";

export const HeroSection = () => {
  const [showAuth, setShowAuth] = useState(false);
  return (
  <div className="py-40 md:py-56 lg:py-72 relative z-0 overflow-x-clip">
    <div className="absolute inset-0 [mask-image: linear-gradient(to_bottom, transparent, black_10%, black_70%,transparent)]">
      <div
      className="absolute inset-0 -z-30 opacity-10" style={{
        backgroundImage: `url(${grainImage.src})`,
      }} >
      </div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
        <StarIcon className="size-8 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={430} rotation={-14}>
        <SparkleIcon className="size-8 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79}>
        <SparkleIcon className="size-10 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178}>
        <SparkleIcon className="size-14 text-emerald-300/20"/>
      </HeroOrbit>
    </div>
    <div className="container relative z-10">
      <div className="flex flex-col items-center">
        <Image src={memojiImage}
        className="size-[100px]"
        alt="Person peeking at the laptop" />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full  relative">
            <div className="bg-green-500 size-2.5 rounded-full  animate-ping"></div>
          </div>
          <div className="text-sm font-medium">4 Projects are already on progress</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">Collaborate. Create. Conquer.</h1>

        <p className="mt-4 text-center text-white/80 md:text-lg" >Join the community, Collaborate with students accross colleges, Access mentorship sessions, and bring your ideas to life!</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold"> View Projects</span>
          < ArrowDown className="size-4"/>
        </button>
        <button
          className="inline-flex items-center gap-2 border border-green-500 px-6 h-12 rounded-xl bg-green-500 text-white font-semibold"
          onClick={() => setShowAuth(true)}
        >
          Join Us
        </button>
      </div>
      {showAuth && <SupabaseAuth onClose={() => setShowAuth(false)} />}
    </div>
  </div>)
};
