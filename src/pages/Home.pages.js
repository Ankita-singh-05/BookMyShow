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
            </div>


            <div className="bg-bms-700 py-16">
                <div className="mx-auto px-32 container">
                    <img 
                        src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                        alt="Premiere-Rupay"
                        className="w-full h-full"
                    />
                </div>
                
                <div className="mx-auto px-32 container">
                  <Premiere />
                </div>
            </div>
        </>
    );
};

export default HomePage;
