import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";



export default function Navbar() {
    return (
        <header className="bg-grey-800 md:sticky top-0 z-10">
            {/* md:sticky will stick this to the top */}
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">Kimberly Burkhart</a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center
                text-base justify-center">
                    <a href="#projects" className="mr-10 hover:text-white"> Past Work </a>
                    <a href="#skills" className="mr-10 hover:text-white"> Skills</a>
                    {/* <a href="#testimonials" className="mr-10 hover:text-white">Testimonials</a> */}
                </nav>
                    <a href="#contact" className="inline-flex items-center bg-grey-800 
                    border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 
                    rounded text-base mt-4 md:mt-0"> Hire Me
                    <ArrowRightIcon className="w-5 h-5 ml-2" /></a>
            </div>
        </header>
    );
}