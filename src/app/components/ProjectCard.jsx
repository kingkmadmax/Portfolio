import React from "react"
import { CodeBracketIcon,EyeIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
const ProjectCard =({ imgUrl,title,description,gitUrl,previwUrl }) =>{ 
    return (
        <div>
               
            <div 
            className="h-52 md:h-72 rounded-t-xl relative group"
             style={{background:`url(${imgUrl})`,backgroundSize:"cover"}}
             >
               
              <div className="overlay flex items-center justify-center gap-4 absolute top-0 left-0 w-full h-full bg-[#00000088] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
  <Link href="gitUrl">
    <div className="h-14 w-14 flex items-center justify-center m-5 border border-[#ADB7BE] hover:border-white rounded-full group/link">
      <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover:text-white" />
    </div>
  </Link>

  <Link href="previwUrl">
    <div className="h-14 w-14 flex items-center justify-center mr-0 border border-[#ADB7BE] hover:border-white rounded-full group/link">
      <EyeIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover:text-white" />
    </div>

  </Link>
</div>

                
             </div>
             <div className="text-white rounded-b-xl bg-[#3e3d3d] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE] " >{description}</p>
             </div>
        </div>
    )
}
export default ProjectCard;