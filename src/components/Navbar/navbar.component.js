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
            <div className="w-full">
                <BiSearch />
                <input 
                    type="search"
                    className="w-full"
                    placeholder="Search for Movies, Events, Plays, Sports and Activities"
                />
            </div>
        </>
    ); 
};
       

const NavLg = () => {};

const Navbar = () => {
    return (
        <>
        <nav className="bg-gray-400 px-2 py-4">
            <div className="md:hidden">{/* Mobile Screen */}
                <NavSm />
            </div>
            <div className="hidden md:flex lg:hidden"> {/* Tablet Screen */}
                <NavMd />
            </div>
            <div className="hidden lg:flex">
                {/* Large Screen */}
            </div>
        </nav>
        </>
    );
};

export default Navbar;