import React from "react";

//Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.components";
import EntertainmentCard from "../components/EntertainmentCard/EntertainmentCard.component";

const DefaultLayout = (props) => {
    return (
        <div>
            <Navbar />
            <HeroCarousal />
            <EntertainmentCard />
            {props.children}
        </div>
    );
};

export default DefaultLayout;