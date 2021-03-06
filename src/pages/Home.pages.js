import React, { useState, useEffect } from "react";
import axios from "axios";

//Components
import EntertainmentCardSlider from "../components/EntertainmentCard/EntertainmentCard.component";
import  Premiere  from "../components/Premiere/Premiere.components";
import RecommendedMovies from "../components/RecommendedMovies/RecommendedMovies.component";

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    },[]);

    console.log({popularMovies});

    return (
        <>
            <div className="flex flex-col gap-14">

                <div className="px-16 mt-12">
                    <h1 className="text-2xl font-bold text-gray-900 top-3">
                        Recommended Movies
                    </h1>
                    <RecommendedMovies/>
                </div>

            <div className="container mx-auto px-16 pt-16">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
                alt="BMS_Stream" />
            </div>

            <div className="container mx-auto px-16">
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
                
                <div className="mx-auto px-16 container gap-1">
                  <Premiere PremiereImages={popularMovies} />
                </div>
            </div>


            </div>
        </>
    );
};

export default HomePage;
