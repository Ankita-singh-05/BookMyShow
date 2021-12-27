import React from "react";
import { BiChevronRight, BiSearch, BiShareAlt } from "react-icons/bi";

const NavSm = () => {
    return (
        <>
            <div className="text-gray-800 flex items-center justify-between">
                <h3 className="text-xl font-bold">It All Starts Here!</h3>
                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
        </>
    );
};
    
const NavLg = () => {
    return (
        <>
         <div className="flex text-white text-xl font-semibold">
             <div className="flex"> book <img src="https://in.bmscdn.com/webin/common/favicon.ico" 
             alt="Logo" className="w-30 h-10"/>show </div>
         </div>
         <div className="w-full flex gap-2 items-center bg-white px-30 py-3 m-1 mt-4 rounded-md">
                <BiSearch className="pl-1"/>
                <input 
                    type="search"
                    className="w-full"
                    placeholder="Search for Movies, Events, Plays, Sports and Activities"
                />
            </div>
        </>
    );
};

const MovieNavbar = () => {
    return (
        <>
        <nav className="px-2 py-4">
            <div className="md:hidden">{/* Mobile Screen */}
                <NavSm />
            </div>
            <div className="hidden md:block lg:hidden"> {/* Tablet Screen */}
                <NavSm />
            </div>
            <div className="bg-gray-700 hidden lg:flex"> {/* Large Screen */}
               <NavLg />
            </div>
        </nav>
        </>
    );
};

export default MovieNavbar;