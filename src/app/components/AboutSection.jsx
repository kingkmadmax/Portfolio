"use client";

import React, { useTransition, useState, startTransition } from "react";
import Image from "next/image";
import TabButtons from "./TabButtons";
import { Content } from "next/font/google";

const TAB_DATA = [
  {
    title:"Skills",
    id:"skills",
    content:(
      <ul>
        <li>pyten</li>
        <li>java</li>
        <li>postgresSQl</li>

      </ul>
    )
  },
    {
    title:"Education",
    id:"education",
    content:(
      <ul>
        <li>udasity boot compe</li>
        <li>BITS College</li>
       
        
      </ul>
    )
  },
    {
    title:"Experience",
    id:"experience",
    content:(
      <ul>
        <li>fandemtale of web devlopment</li>
     
        
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending ,startTransition  ] = useTransition();

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
        <div className="mt-4 md:mt-0 text-left"> 
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Kirubel Mamushet is a dedicated and passionate software engineering student with three years of
            experience studying at BITS College. Throughout his academic journey,
            he has developed strong skills in web and mobile application development, particularly
            using frameworks like Flutter and tools like GetX and Django. Kirubel is committed to continuous 
            learning and innovation, with a keen interest in building efficient, user-centered
            software solutions.
          </p>
          <div className="flex flex-row  mt-8 ">
            <TabButtons selectTab ={() => handleTabChange("skills")}
                        active={tab==="skills"}>{" "} Skills{""}</TabButtons>
            
            <TabButtons selectTab ={() => handleTabChange("education")}
                        active={tab==="Education"}>{" "} Education{""}</TabButtons>
            
            <TabButtons selectTab ={() => handleTabChange("experience")}
                        active={tab==="Experience"}>{""} Experience{""}</TabButtons>

          
          </div>
          <div className="mt-8" >{ TAB_DATA.find((t) =>t.id ===tab).content}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
