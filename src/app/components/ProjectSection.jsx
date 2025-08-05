import React from "react"

import ProjectCard from "./ProjectCard";
 
const Project_Data =[
    {
        id:1,
        title:"react",
        description:"project 1",
        image:"/image/project/4.png",
        tag:["all","web"]
    },
     {
        id:2,
        title:"java",
        description:"project 2",
        image:"/image/project/1.jpg",
        tag:["all","web"]
    },
     {
        id:3,
        title:"python",
        description:"project 3",
        image:"/image/project/2.jpg",
        tag:["all","web"]
    },
     {
        id:4,
        title:"Sql",
        description:"project 4",
        image:"/image/project/3.jpg",
        tag:["all","web"]
    },
     {
        id:5,
        title:"ruby",
        description:"project 5",
        image:"/image/project/5.png",
        tag:["all","web"]
    },
    {
        id:6,
        title:"fluter",
        description:"project 6",
        image:"/image/project/6.jpg",
        tag:["all","web"]
    },
] 

const ProjectSection =() =>{
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4">My projects</h2>
            <div>{Project_Data.map((project) => 
            <ProjectCard 
            key={project.id}
            
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
            /> )}</div>
        </>

    )
}
export default ProjectSection;