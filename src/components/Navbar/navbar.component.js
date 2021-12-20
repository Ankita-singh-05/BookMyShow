import React from "react";
import { BiChevronRight } from "react-icons/bi"

const NavSm = () => {
    return (
        <>
        <div>
            <div>
                <h3>It All Starts Here!</h3>
                <span>
                    Pune <BiChevronRight />
                </span>
                <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700 bg-red-500" >
                    Save changes
                </button>
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