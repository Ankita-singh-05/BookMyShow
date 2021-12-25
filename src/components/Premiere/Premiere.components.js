import React from "react";
import Slider from "react-slick";

//Poster
import Poster from "../Poster/poster.components";

export const Premiere = () => {
    const settings = {
        infinity: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        InitialSlide: 0
    };

    return (
        <>
            <Slider {...settings} />
        </>
    );
};