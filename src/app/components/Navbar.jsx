import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";


const navLink = [
    {
        title:"About",
        path: "#about"
    },
    {
        title:"project",
        path: "#project"
    },
    {
        title:"contact",
        path: "#contactt"
    }
]
const Navbar =()=> {
    return(
        
            <nav className="fixed top-0 left-0 right-0 z-10 bg-[rgba(18,18,18,0.9)]
            bg-opacity-90">


            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2" >
                <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
                Logo
                </Link>
                <div className="menu block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        { navLink.map(
                                (link, index) => (
                                    <li key={index}>
                                        <NavLink href= {link.path} title={link.title} />
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>

            </div>
        </nav>

    );
    };
    export default Navbar;
