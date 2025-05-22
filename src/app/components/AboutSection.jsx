"use client";

import React, { useTransition, useState, startTransition } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/image/images.jpeg"
          width={500}
          height={500}
          alt="Kirubel"
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Kirubel Mamushet is a dedicated and passionate software engineering student with three years of
            experience studying at BITS College. Throughout his academic journey,
            he has developed strong skills in web and mobile application development, particularly
            using frameworks like Flutter and tools like GetX and Django. Kirubel is committed to continuous 
            learning and innovation, with a keen interest in building efficient, user-centered
            software solutions.
          </p>
          <div className="flex flex-row mt-8 space-x-4 text-[#ADB7BE]">
            <span
              onClick={() => handleTabChange("skills")}
              className={`cursor-pointer font-semibold hover:text-white ${tab === "skills" ? "text-white" : ""}`}
            >
              Skills
            </span>
            <span
              onClick={() => handleTabChange("education")}
              className={`cursor-pointer font-semibold hover:text-white ${tab === "education" ? "text-white" : ""}`}
            >
              Education
            </span>
            <span
              onClick={() => handleTabChange("experience")}
              className={`cursor-pointer font-semibold hover:text-white ${tab === "experience" ? "text-white" : ""}`}
            >
              Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
