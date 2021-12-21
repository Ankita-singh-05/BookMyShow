import React from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";

const NavSm = () => {
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold text-green-500">It All Starts Here!</h3>
                <span className="text-gray-400 text-xs flex items-center">
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

const NavMd = () => {};
const NavLg = () => {};

const Navbar = () => {
    return (
        <>
        <nav>
            <div className="md:hidden">{/* Mobile Screen */}
                <NavSm />
            </div>
            <div className="hidden md:flex lg:hidden">
                {/* Tablet Screen */}
            </div>
            <div className="hidden lg:flex">
                {/* Large Screen */}
            </div>
        </nav>
        </>
    );
};

export default Navbar;