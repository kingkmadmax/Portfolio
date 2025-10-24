"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        {/* Left side (Text) */}
        <div className="col-span-7 text-center lg:text-left">
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
              Hello, I'm{" "}
            </span>
            <br />
            <span
              className="inline-block min-w-[260px] bg-clip-text bg-gradient-to-r text-white"
              style={{ display: "inline-block" }}
            >
              <TypeAnimation
                sequence={[
                  "Kirubel Mamushet",
                  1000,
                  "Android Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Algorithm Engineer",
                  1000,
                  "Back-End Developer",
                  1000,
                  "Project Manger",
                  1000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </span>
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl mt-5">
            Best front-end and back-end developer and engineer in Ethiopia and the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-2 rounded-full bg-gradient-to-br from-blue-300 via-blue-600 to-blue-950 text-white hover:opacity-90">
              Hire Me
            </button>
            <button className="px-6 py-2 rounded-full bg-[#121212] border border-blue-700 text-white hover:bg-slate-800">
              Download CV
            </button>
          </div>
        </div>

        {/* Right side (Image) */}
        <div className="col-span-5 flex justify-center lg:justify-end">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/image/halo.jpg"
              alt="Hello World"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
