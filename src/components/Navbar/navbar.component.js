import React from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";

const NavSm = () => {
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold text-white">It All Starts Here!</h3>
                <span className="text-white text-xs flex items-center">
                    Pune 
                    <BiChevronRight />
                </span>
                <div className="w-8 h-8">
                    <BiSearch className="w-full h-full" />
                </div>
            </div>
        </div>
        </>
    );
};

const NavMd = () => {
    return (
        <>
            <div className="w-full flex gap-2 items-center bg-white px-2 py-3 rounded-md">
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

const Navbar = () => {
    return (
        <>
        <nav className="bg-gray-600 px-2 py-4">
            <div className="md:hidden">{/* Mobile Screen */}
                <NavSm />
            </div>
            <div className="hidden md:flex lg:hidden"> {/* Tablet Screen */}
                <NavMd />
            </div>
            <div className="hidden lg:flex"> {/* Large Screen */}
               <NavLg />
            </div>
        </nav>
        </>
    );
};

export default Navbar;