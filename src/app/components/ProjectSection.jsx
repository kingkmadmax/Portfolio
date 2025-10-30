"use client"
import React,{useState,useRef} from "react"
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";
const Project_Data =[
    {
        id:1,
        title:"react",
        description:"project 1",
        image:"/image/project/4.png",
        tag:["All","Web"],
        gitUrl:"/",
        previwUrl:"/"
    },
     {
        id:2,
        title:"java",
        description:"project 2",
        image:"/image/project/1.jpg",
        tag:["All","Web"],
         gitUrl:"/",
        previwUrl:"/"
    },
     {
        id:3,
        title:"python",
        description:"project 3",
        image:"/image/project/2.jpg",
        tag:["All","Web"],
         gitUrl:"/",
        previwUrl:"/"
    },
     {
        id:4,
        title:"Sql",
        description:"project 4",
        image:"/image/project/3.jpg",
        tag:["All","Web"],
         gitUrl:"/",
        previwUrl:"/"
    },
     {
        id:5,
        title:"ruby",
        description:"project 5",
        image:"/image/project/5.png",
        tag:["All","App"],
         gitUrl:"/",
        previwUrl:"/"
    },
    {
        id:6,
        title:"fluter",
        description:"project 6",
        image:"/image/project/6.jpg",
        tag:["All","App"],
         gitUrl:"/",
        previwUrl:"/"
    },
] 

const ProjectSection =() =>{
    const [tag,setTag] =useState("All");
    const ref = useRef(null);
    const isInView =useInView(ref,{once:true});
    const handleTagChange =(newTag) =>{
        setTag(newTag);

    };
    const filteredProjects = Project_Data.filter((project)=>
        project.tag.includes(tag)

    );

    const cardVariants ={
        initial:{y:50,opacity:0},
        animate:{y:0,opacity:1},
    };
    return (
        <section ref={ref}>
            <h2 className="text-center text-4xl font-bold text-white mt-4">My projects

            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
              <ProjectTag
               onClick={handleTagChange}
               name="All"
               isSelected = {tag ==='All'}
               />
               <ProjectTag
               onClick={handleTagChange}
               name="Web"
               isSelected = {tag ==='Web'}
               />
               <ProjectTag
               onClick={handleTagChange}
               name="App"
               isSelected = {tag ==='App'}
               />
            </div>
           <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project) => 
            <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ?"animate":"inital"}
            >
            <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
            gitUrl={project.gitUrl}
            previwUrl={project.previwUrl}

            />
            
            </motion.li> )}</div>
        </section>

    )
}
export default ProjectSection;