import React from "react";
//Components
import EntertainmentCardSlider from "../components/EntertainmentCard/EntertainmentCard.component";
import  Premiere  from "../components/Premiere/Premiere.components";

const HomePage = () => {
    return (
        <>
            <div className="container mx-auto px-32">
                <h1 className="text-2xl font-bold text-gray-900 my-3">
                    The Best of Entertainment
                </h1>
                <EntertainmentCardSlider />
                <Premiere />
            </div>
        </>
    );
};

export default EntertainmentCardSlider;